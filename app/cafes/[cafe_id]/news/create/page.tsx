'use client'

import {useState} from 'react'
import Link from 'next/link'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import Header from '@/components/header'
import Footer from '@/components/footer'
import UploadImageButton from '@/components/upload-image'
import AddTextImage from '@/components/add-text-image'

export default function Page() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  return (
    <>
      <Header />
      <main className="bg-bg">
        <div className="mx-auto max-w-sm md:max-w-lg px-5 lg:px-8 pt-24 pb-8 sm:pb-14 lg:pb-20">
          <h1 className="mt-14 text-xl font-bold">記事を投稿</h1>
          <form method="post" className="py-12">
            <label className="block text-base" htmlFor="title">
              タイトル
            </label>
            <input
              className="mt-2 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
              type="text"
              name="title"
              id="title"
              placeholder="新メニューのお知らせ"
              required
            />
            <h2 className="mt-6 block text-base">サムネイル画像</h2>
            <UploadImageButton width="50%" height="100%" id="thumbnail-img" />
            <h2 className="mt-6 block text-base">ヘッダー画像</h2>
            <UploadImageButton id="header-img" width="100%" height="50%" />
            <h2 className="mt-6 block text-base">本文</h2>
            <AddTextImage></AddTextImage>
            <h2 className="mt-6 block text-base">公開期間</h2>
            <div className="flex items-center gap-4">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                showTimeInput
                dateFormat="yyyy/MM/dd aa h:mm"
                className="border border-accent2 text-base px-2 py-1 rounded-md outline-none"
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                showTimeInput
                dateFormat="yyyy/MM/dd aa h:mm"
                className="border border-accent2 text-base px-2 py-1 rounded-md outline-none"
              />
            </div>
            <div className="mt-12 flex items-center justify-center gap-6">
              {/* 下書きを保存して終了ボタン */}
              <button
                onClick={() => {
                  alert('下書きを保存して終了！')
                }}
                className="py-3 px-4 text-nowrap bg-bg text-sm text-textbk border border-accent2 rounded-full"
              >
                下書きを保存して終了
              </button>
              {/* 記事をプレビューボタン */}
              <Link
                href='/cafes/1/news/create/preview'
                onClick={() => {
                  alert('記事のプレビューページに飛ぶ')
                }}
                className="py-3 px-6 text-nowrap bg-accent text-sm text-white rounded-full"
              >
                記事をプレビュー
              </Link>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
