const express = require('express')
const query = require('../db')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await query(
      'CREATE TABLE articles ( \
        id integer PRIMARY KEY, \
        user_id integer NOT NULL REFERENCES users (id), \
        cafe_id integer NOT NULL REFERENCES cafes (id), \
        publication_status_id integer NOT NULL REFERENCES publication_status (id), \
        title varchar(64) NOT NULL, \
        thumbnail varchar(64), \
        header varchar(128), \
        publication_at timestamp, \
        publication_end_at timestamp, \
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
