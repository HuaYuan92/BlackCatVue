import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import PersonList from '@/components/meun/person'
import EntList from '@/components/meun/entlist'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
        path: 'personlist',
        component: PersonList,
      },
        {
          path: 'entlist',
          component: EntList,
        }

      ]
    }
  ]
})
