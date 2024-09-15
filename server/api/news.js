const express = require('express')

const router = express.Router()

// お知らせ一覧ページ
router.get('/cafes/:cafe_id/news', async (req, res) => {
  try {
    console.log('send get request to /cafes/:cafe_id/news page')
    console.log(req.params)
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// お知らせ詳細ページ
router.get('/cafes/:cafe_id/news/:news_id', async (req, res) => {
  try {
    console.log('send get request to /cafes/:cafe_id/news/:news_id page')
    console.log(req.params)
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// 店舗別お知らせ管理ページ
router.get('/mypage/cafes/:cafe_id/news', async (req, res) => {
  try {
    console.log(req.params)
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// 個々のお知らせ管理ページ
router.get('/mypage/cafes/:cafe_id/news/:news_id', async (req, res) => {
  try {
    console.log(req.params)
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// お知らせの新規作成
router.post('/cafes/:cafe_id/news', async (req, res) => {
  try {
    console.log(req.params)
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// お知らせ編集ページ
router.get('/cafes/:cafe_id/news/:news_id/edit', async (req, res) => {
  try {
    console.log(req.params)
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// お知らせ内容の更新
router.patch('/cafes/:cafe_id/news/:news_id', async (req, res) => {
  try {
    console.log(req.params)
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// お知らせの削除
router.delete('/cafes/:cafe_id/news/:news_id', async (req, res) => {
  try {
    console.log(req.params)
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

module.exports = router
