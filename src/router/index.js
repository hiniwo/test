import Vue from 'vue'
import Router from 'vue-router'

const helloWorld = resolve => require(['@/components/index/HelloWorld'] , resolve)
const home = resolve => require(['@/components/index/home'], resolve);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: helloWorld,
      meta :{
      	title : "hello",
      	backgroundColor : "#ff0000"
      }
    },
     {
      path: '/home',
      name: 'home',
      component: home,
      meta :{
      	title : "首页",
      	backgroundColor : "#ccc"
      }
    },
    {
			path: "*",
			redirect: "/home"
		}
  ]
})
