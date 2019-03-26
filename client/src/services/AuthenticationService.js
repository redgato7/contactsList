import Api from '@/services/Api'

export default {
  registerContact (credentials) {
    return Api().post('registerContact', credentials)
  }
}
