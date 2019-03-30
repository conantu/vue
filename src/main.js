import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/css/main.css'
import './assets/css/aui.css'
import './assets/css/theme-color.css'
import './assets/css/font-awesome.min.css'
import './assets/css/weui.min.css'
import './assets/css/jquery-weui.min.css'
import './assets/css/bootstrap.min.css'
import './assets/js/jquery.min.js'
import './assets/js/jquery-weui.min.js'
// import './assets/js/jquery.cookie.js'

import './plugins/axios'
import config from './config/config'
window.baseUrl = config.baseUrl.localhost_http

import 'vue-swipe/dist/vue-swipe.css'
import { Swipe, SwipeItem } from 'vue-swipe';
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);


import loading from './plugins/loading'
Vue.use(loading)

import store from './store'

import router from './plugins/router.config.js'
new Vue({
  router,store,
  render: h => h(App)
}).$mount('#app')
