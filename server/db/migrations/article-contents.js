const express = require('express')
const query = require('../db')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await query(
      'CREATE TABLE article_contents ( \
        id integer PRIMARY KEY, \
        article_id integer NOT NULL REFERENCES articles (id), \
        content_type_id integer NOT NULL REFERENCES content_types (id), \
        content varchar(256) NOT NULL, \
        turn_num integer NOT NULL CHECK (turn_num >= 0), \
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
