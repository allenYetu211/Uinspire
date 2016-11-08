import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import routes from './router'
import store from './store'

import './style/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
