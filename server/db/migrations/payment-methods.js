const express = require('express')
const query = require('../db')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await query(
      'CREATE TABLE payment_methods ( \
        id integer PRIMARY KEY, \
        payment_method_name varchar(32) NOT NULL, \
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
