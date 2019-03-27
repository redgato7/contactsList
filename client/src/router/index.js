import Vue from 'vue'
import Router from 'vue-router'
import ViewContacts from '@/components/ViewContacts'
import RegisterContact from '@/components/RegisterContact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/viewcontacts',
      name: 'viewcontacts',
      component: ViewContacts
    },
    {
      path: '/registercontact',
      name: 'registercontact',
      component: RegisterContact
    }
  ]
})
