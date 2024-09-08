const express = require('express')
const next = require('next')
const cors = require('cors')

require('dotenv').config()

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const api = require('./api')
const dbApi = require('./db')

const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(async () => {
  const server = express()

  api(server)
  dbApi(server)
  server.use(cors())
  server.use(express.json())
  server.use(express.urlencoded({ extended: true }))

  server.all('*', (req, res) => {
    handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`Server listening at port ${port}`)
  })
})
