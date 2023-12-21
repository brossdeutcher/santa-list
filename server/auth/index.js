const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('auth')
})

module.exports = app