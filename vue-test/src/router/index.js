import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/pages/page1'
import page2 from '@/pages/page2'
import contact from '@/pages/contact'
import form from '@/pages/form/form'
import confirm from "@/pages/form/confirm"
import complete from "@/pages/form/complete"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "page1",
      component: page1
    },
    {
      path: "/page2",
      name: "page2",
      component: page2
    },
    {
      path: "/contact",
      name: "contact",
      component: contact,
      children: [
        {
          path: "/contact",
          component: form
        },
        {
          path: "/confirm",
          component: confirm,
          props: true
        },
        {
          path: "/complete",
          component: complete,
        }
        // {
        //   path: "/confirm",
        //   component: Confirm,
        //   meta: {
        //     isConfirm: true
        //   }
        // }
      ]
    }
  ]
});
