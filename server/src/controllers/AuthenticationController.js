const {Contact} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let contacts = null
      const search = req.query.search
      if (search) {
        contacts = await Contact.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        contacts = await Contact.findAll({
          limit: 100
        })
      }
      res.send(contacts)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the contacts'
      })
    }
  },
  async show (req, res) {
    try {
      const contact = await Contact.findById(req.params.contactId)
      res.send(contact)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the contacts'
      })
    }
  },
  async registerContact (req, res) {
    try {
      const contact = await Contact.create(req.body)
      res.send(contact.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This number is already in use.'
      })
    }
  },
  async put (req, res) {
    try {
      await Contact.update(req.body, {
        where: {
          id: req.params.contactId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the contact'
      })
    }
  }
}
