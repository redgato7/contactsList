const Joi = require('joi')

module.exports = {
  registerContact (req, res, next) {
    const schema = {
      name: Joi.string().regex(
        new RegExp('^[a-zA-Z]{2,64}$')
      ),
      surname: Joi.string().regex(
        new RegExp('^[a-zA-Z]{2,64}$')
      ),
      phonenumber: Joi.string().regex(
        new RegExp('^[0-9]{6,12}$')
      )
    }
    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'name':
          res.status(400).send({
            error: 'The name should contain only lowercases or uppercases from 2 to 64 letters.'
          })
          break
        case 'surname':
          res.status(400).send({
            error: 'The surname should contain only lowercases or uppercase from 2 to 64 letters.'
          })
          break
        case 'phonenumber':
          res.status(400).send({
            error: 'The phone number should contain only numbers. Minimum: 6 digits, maximum: 12 digits.'
          })
          break
        default:
          res.status(400).send({
            error: 'Default error'
          })
      }
    } else {
      next()
    }
  }
}
