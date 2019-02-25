import Vue from 'vue'
import App from './App.vue'

import router from './router.js'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/my-mint.scss';//全局修改mint-UI样式  

import mock from './mock';
mock.start();

Vue.use(MintUI)

new Vue({
  el: '#app',
  mock,
  router,
  store,
  render: h => h(App)
})
