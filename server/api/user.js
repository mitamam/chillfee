const express = require('express')

const router = express.Router()

// ユーザーアカウントページ
router.get('/mypage/account', async (req, res) => {
  try {
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// ユーザー情報の更新
router.patch('/mypage/account', async (req, res) => {
  try {
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// ユーザーのお気に入り店舗ページ
router.get('/mypage/bookmarks', async (req, res) => {
  try {
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// ユーザーの投稿クチコミ一覧ページ
router.get('/mypage/review', async (req, res) => {
  try {
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// 店舗管理一覧ページ
router.get('/mypage/cafes', async (req, res) => {
  try {
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// 新規店舗の作成（ビジネスユーザー）
router.post('/mypage/cafes', async (req, res) => {
  try {
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// 店舗管理ページ
router.get('/mypage/cafes/:cafe_id', async (req, res) => {
  try {
    console.log(req.params)
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// 店舗編集ページ
router.get('/mypage/cafes/:cafe_id/edit', async (req, res) => {
  try {
    console.log(req.params)
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// 店舗情報の更新
router.put('/mypage/cafes/:cafe_id', async (req, res) => {
  try {
    console.log(req.params)
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// 店舗別サブスクページ
router.get('/mypage/cafes/:cafe_id/subscription', async (req, res) => {
  try {
    console.log(req.params)
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

module.exports = router
