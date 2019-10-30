import VueLoaderInstall from './loading/index.js'

export default {
    install (Vue, options) {
        Vue.use(VueLoaderInstall, options)
    }
}