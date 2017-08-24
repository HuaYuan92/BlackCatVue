import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
