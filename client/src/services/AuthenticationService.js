import Api from '@/services/Api'

export default {
  registerContact (credentials) {
    return Api().post('registerContact', credentials)
  },
  index (search) {
    return Api().get('contacts', {
      params: {
        search: search
      }
    })
  },
  show (contactId) {
    return Api().get(`contacts/${contactId}`)
  },
  put (contact) {
    return Api().put(`contacts/${contact.id}`, contact)
  }
}
