const express = require('express')
const query = require('../db')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await query(
      'CREATE TABLE publication_status ( \
        id integer PRIMARY KEY, \
        status varchar(16) UNIQUE NOT NULL, \
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
