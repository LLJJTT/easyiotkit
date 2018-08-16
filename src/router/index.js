import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Register from '@/components/register'
import Home from '@/components/home'



Vue.use(Router)

export default new Router({
  routes: [
   {
  		path:'/',
  		redirect:'login'
  	},
  	{
      path: '/login',
      name: 'login',
      component: Login
    },
  	{
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
  ]
})
