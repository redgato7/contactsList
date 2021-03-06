const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync({force: false}) // true - reset database
  .then(() => {
    app.listen(config.port)
    console.log(`Server is on ${config.port} port`)
  })
