const {sql} = require('@vercel/postgres')

async function query (q) {
  const client = await sql.connect()
  return await client.query(q)
}

module.exports = query
