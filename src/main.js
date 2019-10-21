// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import router from './router/index.js'
import utils from '@/utils/base.js'

Vue.config.productionTip = false
Vue.prototype.utils = utils

/* eslint-disable no-new */
/* eslint-disable indent */
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
