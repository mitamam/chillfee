const express = require('express')

const router = express.Router()

// クチコミ一覧ページ
router.get('/cafes/:cafe_id/review', async (req, res) => {
  try {
    console.log('send get request to /cafes/:cafe_id/review page')
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// クチコミ編集ページ
router.get('/cafes/:cafe_id/review/edit', async (req, res) => {
  try {
    console.log('send get request to /cafes/:cafe_id/review/edit page')
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// 編集後のクチコミ更新
router.patch('/cafes/:cafe_id/review/:review_id', async (req, res) => {
  try {
    console.log('send post request to /cafes/:cafe_id/review/:review_id')
    console.log(req.body)
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// クチコミの投稿
router.post('/cafes/:cafe_id/review', async (req, res) => {
  try {
    console.log('send post request to /cafes/:cafe_id/review')
    console.log(req.body)
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// クチコミの削除
router.delete('/cafes/:cafe_id/review/:review_id', async (req, res) => {
  try {
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

module.exports = router
