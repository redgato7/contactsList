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
              'name', 'surname', 'phonenumber'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        contacts = await Contact.findAll({
          limit: 10
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
      res.send(contact)
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
  },
  async remove (req, res) {
    try {
      const {contactId} = req.params
      const contact = await Contact.findOne({
        where: {
          id: contactId
        }
      })
      if (!contact) {
        return res.status(403).send({
          error: 'you do not have access to this contact'
        })
      }
      await contact.destroy()
      res.send(contact)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the contact'
      })
    }
  }
}
