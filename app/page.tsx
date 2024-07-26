'use client'
import Image from 'next/image'

import Header from '@/components/header'
import Footer from '@/components/footer'
import LogoImage from '@/public/logo_vertical.svg'
import SearchBox from '@/components/search-box'

export default function Page() {
  return (
    <>
      <Header bg="transparent" />
      <main className="bg-[url('/hero.jpg')] bg-bg/20 bg-blend-lighten bg-bottom bg-no-repeat bg-cover lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-center">
          <div className="mx-auto text-center py-32 sm:py-48 lg:py-56">
            <Image className="w-32 mx-auto sm:mb-10" src={LogoImage} alt="" />
            <h1 className="my-10">
              「作業しやすい」カフェの情報に特化した
              <br />
              カフェ検索サイト
            </h1>
            <SearchBox className="border rounded-md"></SearchBox>
          </div>
        </div>
        <div className='text-right text-bg'>
          <span className="text-xs">Photo by </span>
          <a
            className="text-xs underline"
            href="https://unsplash.com/ja/@anchorcoffee?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            The Anchor
          </a>
          <span className="text-xs"> on </span>
          <a
            className="text-xs underline"
            href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E7%AA%93%E9%9A%9B%E3%81%AE%E8%8C%B6%E8%89%B2%E3%81%AE%E6%9C%A8%E8%A3%BD%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB-ACtEE_FcaRU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Unsplash
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}