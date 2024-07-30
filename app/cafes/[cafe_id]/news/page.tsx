'use client'

import Image from 'next/image'
import Link from 'next/link'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Pagination from '@/components/pagination'

// Todo：実装時削除
import Thumbnail from '@/public/45f7044d45f7155c58f5aede2eddc83e.jpg'

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-bg">
        <div className="mx-auto max-w-5xl pt-24 px-5 lg:px-8 pb-8 sm:pb-14 lg:pb-20">
          <h2 className="text-xl font-bold mt-10 lg:mt-14">新着情報</h2>
          <ul className="my-10 flex flex-wrap gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-10">
            {Array.from({length: 7}, (_, index) => (
              <li className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(25%-12px)] lg:w-[calc(25%-24px)] border border-accent2">
                <Link href="/cafes/1/news/1" className="block p-4 lg:p-6">
                  <div className="relative w-full pt-[100%] overflow-hidden">
                    <Image src={Thumbnail} alt="" layout="fill" objectFit="cover"></Image>
                  </div>
                  <h3 className="mt-4 text-sm lg:text-base font-bold">ニュースのタイトル</h3>
                  <p className="text-xs text-textbk/30 mt-2">2024.01.01</p>
                </Link>
              </li>
            ))}
          </ul>
          <Pagination></Pagination>
        </div>
      </main>
      <Footer />
    </>
  )
}
