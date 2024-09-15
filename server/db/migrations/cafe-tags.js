const express = require('express')
const query = require('../db')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await query(
      `CREATE TABLE cafe_tags ( 
        id integer PRIMARY KEY,
        cafe_id integer NOT NULL REFERENCES cafes (id),
        tag_id integer NOT NULL REFERENCES tags (id),
        created_at timestamp NOT NULL ,
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
