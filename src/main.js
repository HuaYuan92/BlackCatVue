// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Iview from 'iview'
import store from './store'
import commons from './components/common/index'
import filters from './components/filters/index'

// import axios from 'axios'
// import stores from './store'
Object.keys(commons).forEach(function (key, index, arr) {
  Vue.component(key, commons[key])
})
Object.keys(filters).forEach(function (key, index, arr) {
  Vue.filter(key, filters[key])
})

Vue.use(Iview)
Vue.config.productionTip = false
Vue.prototype.route =router;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
