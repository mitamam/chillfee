const express = require('express')

const router = express.Router()

// 検索結果ページ
router.get('/search', async (req, res) => {
  try {
    // const cafes = await
    console.log('send get request to /search page')
    console.log(req.query)
    const cafes = null
    res.json(cafes)
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// カフェ詳細ページ
router.get('/cafes/:cafe_id', async (req, res) => {
  try {
    console.log('send get request to /cafes/:cafe_id page')
    console.log(req.params)
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// 新規カフェの登録（一般ユーザー）
router.post('/cafes', async (req, res) => {
  try {
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

module.exports = router
