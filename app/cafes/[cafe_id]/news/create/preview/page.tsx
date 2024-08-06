'use client'

import Image from 'next/image'
import Link from 'next/link'

import Header from '@/components/header'
import Footer from '@/components/footer'

// Todo：実装時削除
import TestImage from '@/public/45f7044d45f7155c58f5aede2eddc83e.jpg'
import BackButton from '@/components/back-button'

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-bg">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 pt-24 pb-8 sm:pb-14 lg:pb-20">
          <BackButton className="mt-12"></BackButton>
          <h1 className="mt-14 text-xl font-bold">タイトル</h1>
          <p className="mt-4 text-sm">2024.01.01</p>
          <div className="mt-10 relative w-full pt-[50%] overflow-hidden">
            <Image src={TestImage} alt="header image" layout="fill" objectFit="cover"></Image>
          </div>
          <p className="mt-10 text-base">
            ニュースの本文です。ニュースの本文です。ニュースの本文です。ニュースの本文です。
            <br />
            ニュースの本文です。ニュースの本文です。ニュースの本文です。ニュースの本文です。ニュースの本文です。ニュースの本文です。
            <br />
            <br />
            ニュースの本文です。ニュースの本文です。ニュースの本文です。ニュースの本文です。
          </p>
          <div className="mt-4 md:mt-6 mx-auto relative w-1/3 pt-[33.333%] overflow-hidden">
            <Image src={TestImage} alt="" layout="fill" objectFit="cover"></Image>
          </div>
          <p className="mt-4 md:mt-6 text-base">
            ニュースの本文です。ニュースの本文です。ニュースの本文です。ニュースの本文です。
            <br />
            ニュースの本文です。ニュースの本文です。ニュースの本文です。ニュースの本文です。ニュースの本文です。ニュースの本文です。
            <br />
            <br />
            ニュースの本文です。ニュースの本文です。ニュースの本文です。ニュースの本文です。
          </p>
          <div className="mt-4 md:mt-6 mx-auto relative w-1/2 pt-[40%] overflow-hidden">
            <Image src={TestImage} alt="" layout="fill" objectFit="cover"></Image>
          </div>
          <p className="mt-4 md:mt-6 text-base">
            ニュースの本文です。ニュースの本文です。ニュースの本文です。ニュースの本文です。
            <br />
            ニュースの本文です。ニュースの本文です。ニュースの本文です。ニュースの本文です。ニュースの本文です。ニュースの本文です。
            <br />
            <br />
            ニュースの本文です。ニュースの本文です。ニュースの本文です。ニュースの本文です。
          </p>
          <div className="mt-4 md:mt-6 mx-auto relative w-full pt-[50%] overflow-hidden">
            <Image src={TestImage} alt="" layout="fill" objectFit="cover"></Image>
          </div>
          <div className="mt-12 flex items-center justify-center gap-6">
            <Link
              href="/cafes/1/news/create"
              className="inline-block py-3 px-4 text-nowrap bg-bg text-sm text-textbk border border-accent2 rounded-full"
            >
              編集画面に戻る
            </Link>
            {/* 記事をプレビューボタン */}
            <Link
              href="/cafes/1/news/1"
              onClick={() => {
                alert('記事に飛ぶ')
              }}
              className="inline-block py-3 px-6 text-nowrap bg-accent text-sm text-white rounded-full"
            >
              記事を投稿
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
