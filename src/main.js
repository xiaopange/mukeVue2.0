// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import App2 from './App2'
import VRouter from 'vue-router' //引入路由插件vue-router

Vue.use(VRouter) //全局注册使用路由VRouter
Vue.config.productionTip = false
//当引入VRouter库后VRouter是一个全局的类，当使用这个路由时是定义router来实例化这个路由，然后将这个router插入到vue根实例里router
let router =new VRouter({

}) 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //简写，实际是router:router
  template: '<App2/>',
  components: { App2 }
  // template: '<App/>',
  // components: { App }
})
