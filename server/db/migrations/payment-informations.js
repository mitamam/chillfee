const express = require('express')
const query = require('../db')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await query(
      'CREATE TABLE payment_informations ( \
        id integer PRIMARY KEY, \
        user_id integer NOT NULL REFERENCES users (id), \
        payment_method_id integer NOT NULL REFERENCES payment_methods (id), \
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
