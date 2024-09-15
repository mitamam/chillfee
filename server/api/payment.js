const express = require('express')

const router = express.Router()

// ユーザーのお支払情報ページ
router.get('/mypage/payment', async (req, res) => {
  try {
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

// ユーザーのお支払情報更新
router.patch('/mypage/payment', async (req, res) => {
  try {
    res.json()
  } catch (err) {
    res.json({error: err.message || err.toString()})
  }
})

module.exports = router
