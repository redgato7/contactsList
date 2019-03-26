const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.post('/registerContact', (req, res) => {
  res.send({
    message: `Your contact ${req.body.name} was registered.`
  })
})

app.listen(process.env.PORT || 8081)
