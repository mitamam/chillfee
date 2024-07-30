'use client'

import Image from 'next/image'

import Header from '@/components/header'
import Footer from '@/components/footer'

// Todo：実装時削除
import TestImage from '@/public/45f7044d45f7155c58f5aede2eddc83e.jpg'

// pと画像の間は基本16pxでmd以上で24px

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-bg">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 pt-24 pb-8 sm:pb-14 lg:pb-20">
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
        </div>
      </main>
      <Footer />
    </>
  )
}
