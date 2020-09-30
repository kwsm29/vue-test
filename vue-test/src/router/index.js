import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/pages/page1'
import page2 from '@/pages/page2'
import page3 from '@/pages/page3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page1',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    },
    {
      path: '/page3',
      name: 'page3',
      component: page3
    }
  ]
})
