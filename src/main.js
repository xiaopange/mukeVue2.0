// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import App2 from './App2'
import VRouter from 'vue-router' //引入路由插件vue-router

Vue.use(VRouter) //全局注册使用路由VRouter
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  template: '<App2/>',
  components: { App2 }
  // template: '<App/>',
  // components: { App }
})
