import Vue from 'vue'
import Router from 'vue-router'
import RegisterContact from '@/components/RegisterContact'
import Contacts from '@/components/Contacts'
import EditContact from '@/components/EditContact'
import ViewContact from '@/components/ViewContact/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/registercontact',
      name: 'registercontact',
      component: RegisterContact
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/contacts/:contactId/edit',
      name: 'contact-edit',
      component: EditContact
    },
    {
      path: '/contacts/:contactId',
      name: 'contact',
      component: ViewContact
    },
    { path: '*',
      redirect: 'contacts'
    }
  ]
})
