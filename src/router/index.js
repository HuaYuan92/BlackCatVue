import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import PersonList from '@/components/meun/Person'
import PersonResult from '@/components/meun/PersonResult'
import EntList from '@/components/meun/EntList'
import EntResult from '@/components/meun/EntResult'
import InfoList from '@/components/info/InfoList'
import PersonHold from '@/components/hold/PersonHold'
import EntHold from '@/components/hold/EntHold'
import EntDetail from '@/components/meun/EntDetail'
import PersonDetail from '@/components/meun/PersonDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
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
          path: 'personresult',
          component: PersonResult,
        },
        {
          path: 'persondetail',
          component: PersonDetail,
        },
        {
          path: 'entlist',
          component: EntList,
        },
        {
          path: 'entresult',
          component: EntResult,
        },
        {
          path: 'entdetail',
          component: EntDetail,
        },
        {
          path: 'infolist',
          component: InfoList,
        },
        {
          path: 'personhold',
          component: PersonHold ,
        },
        {
          path: 'enthold',
          component: EntHold,
        },

      ]
    },
    {
      path: '/*',
      component: Login
    },
  ]
})
