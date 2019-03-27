const {Contact} = require('../models')

module.exports = {
  async registerContact (req, res) {
    try {
      const contact = await Contact.create(req.body)
      res.send(contact.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This number is already in use.'
      })
    }
  }
}
