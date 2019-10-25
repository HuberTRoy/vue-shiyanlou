import VueLoader from './loader.vue'

export default {
    install (Vue, options) {
        Vue.mixin({
            beforeCreate () {
                Vue.component('v-loader', VueLoader)
            }
        })
    }
}