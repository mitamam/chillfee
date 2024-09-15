const express = require('express')
const query = require('../db')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await query(
      'CREATE TABLE users (id integer PRIMARY KEY, \
       name varchar(32) NOT NULL, \
       email varchar(256) UNIQUE NOT NULL, \
       password varchar(64) UNIQUE NOT NULL, \
       user_type integer NOT NULL, \
       user_icon varchar(256) NOT NULL, \
       created_at timestamp NOT NULL, \
       updated_at timestamp NOT NULL)'
      )
    res.json(result)
  } catch (err) {
    console.log(err)
    res.status(500).send('Internal Server Error')
  }
})

module.exports = router
