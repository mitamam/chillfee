const express = require('express')
const query = require('../db')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await query(
      'CREATE TABLE cafes ( \
        id integer PRIMARY KEY, \
        user_id integer REFERENCES users (id), \
        plan_id integer REFERENCES plans (id), \
        name varchar(32) NOT NULL, \
        description varchar(256) NOT NULL, \
        official_name varchar(64) NOT NULL, \
        postal_code varchar(8) NOT NULL, \
        ward varchar(4) NOT NULL, \
        address varchar(64) NOT NULL, \
        contact varchar(64) NOT NULL, \
        official_link varchar(64), \
        opened_at time, \
        closed_at time, \
        closed_on varchar(32), \
        location varchar(64), \
        wifi varchar(32), \
        power varchar(32), \
        bathroom varchar(32), \
        seats integer CHECK (seats >= 1), \
        coffee_price integer CHECK (coffee_price >= 0), \
        payment varchar(64), \
        created_at timestamp NOT NULL, \
        updated_at timestamp NOT NULL \
        CHECK (opened_at < closed_at) \
        )'
    )
    res.json(result)
  } catch (err) {
    console.log(err)
    res.status(500).send('Internal Server Error')
  }
})

module.exports = router
