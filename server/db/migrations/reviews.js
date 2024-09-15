const express = require('express')
const query = require('../db')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await query(
      `CREATE TABLE reviews (
        id integer PRIMARY KEY,
        user_id integer NOT NULL REFERENCES users (id),
        cafe_id integer NOT NULL REFERENCES cafes (id),
        rating integer NOT NULL CHECK (rating BETWEEN 0 AND 5),
        content varchar(256) NOT NULL,
        created_at timestamp NOT NULL,
        updated_at timestamp NOT NULL
        )`
    )
    res.json(result)
  } catch (err) {
    console.log(err)
    res.status(500).send('Internal Server Error')
  }
})

module.exports = router
