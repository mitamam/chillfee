'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import UploadImageButton from '@/components/upload-image'
import AddTextImage from '@/components/add-text-image'

export default function Page() {
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
            <label className="mt-6 block text-base" htmlFor="content">
              本文
            </label>
            <AddTextImage></AddTextImage>
            <label className="mt-6 block text-base" htmlFor="open-time">
              公開期間
            </label>
            <div className="flex items-center gap-2">
              <input
                className="mt-2 py-2 px-4 block text-base border border-accent2 rounded-md outline-none"
                type="datetime-local"
                name="open-period"
                id="open-period"
              />
              <span> ~ </span>
              <input
                className="mt-2 py-2 px-4 block text-base border border-accent2 rounded-md outline-none"
                type="datetime-local"
                name="close-period"
                id="close-period"
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
              <button
                onClick={() => {
                  alert('記事のプレビューページに飛ぶ')
                }}
                className="py-3 px-6 text-nowrap bg-accent text-sm text-white rounded-full"
              >
                記事をプレビュー
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}