import axios from 'axios'

import VueLoader from './loader.vue'

export default {
    install (Vue, options) {
        // no options now.
        options
        // Callback functions.
        // Computed and Watch cannot moniting this data when set or delete item.
        // Every item setting will call all functions on it.
        Vue.prototype.__loader_checks = []

        Vue.prototype.$__loadingHTTP = new Proxy({}, {
            set: function (target, key, value, receiver) {
                let oldValue = target[key]
                if (!oldValue) {
                    // do something
                    Vue.prototype.__loader_checks.forEach((func) => {
                        func(key, value)
                    })
                }

                return Reflect.set(target, key, value, receiver)
            }
        })
        
        // https://github.com/t/e/s/t?args=1 to /t/e/s/t
        // /t/e/s/t?args=1 to /t/e/s/t
        // t/e/s/t?args=1 to /t/e/s/t
        function translate (url) {
            // Remove query.
            url = url.split('?')[0]
            // Remove domain.
            if (url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1) {
                url = url.split('/').slice(3,).join('/')
            }

            if (!url) {
                return '/'
            }

            if (url[0] !== '/') {
                return `/${url}`
            }

            return url
        } 
        // Set interceptor on axios, 
        // url that axios request will push in $__loadingHTTP.
        // url that axios response will delete in $__loadingHTTP. 
        axios.interceptors.request.use(config => {
            Vue.prototype.$__loadingHTTP[translate(config.url)] = config  

            return config
        })

        axios.interceptors.response.use(response => {
            delete Vue.prototype.$__loadingHTTP[translate(response.config.url)]  

            return response
        })

        Vue.mixin({
            beforeCreate () {
                Vue.component('v-loader', VueLoader)            
            }
        })
    }
}