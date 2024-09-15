const express = require('express')
const query = require('../db')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await query(
      'CREATE TABLE plans ( \
        id integer PRIMARY KEY, \
        name varchar(32) UNIQUE NOT NULL, \
        price integer NOT NULL CHECK (price >= 0), \
        created_at timestamp NOT NULL, \
        updated_at timestamp NOT NULL \
        )'
    )
    res.json(result)
  } catch (err) {
    console.log(err)
    res.status(500).send('Internal Server Error')
  }
})

module.exports = router
