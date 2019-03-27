const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/registerContact',
    AuthenticationControllerPolicy.registerContact,
    AuthenticationController.registerContact)
  app.get('/contacts',
    AuthenticationController.index)
  app.get('/contacts/:contactId',
    AuthenticationController.show)
  app.put('/contacts/:contactId',
    AuthenticationController.put)
}
