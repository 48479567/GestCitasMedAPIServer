const express = require('express')
  app = express()

app.use('/api', require('./router'))

module.exports = app