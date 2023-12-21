const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')

app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  // res.send('Hello World!!')
})

app.use('/auth', require('./auth'))

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})