'use client'

import Image from 'next/image'

import {StarIcon, FlagIcon} from '@heroicons/react/24/outline'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Pagination from '@/components/pagination'
import ReportButton from '@/components/report-button'
import userIcon from '@/public/user_icon.jpg'
import SortBy from '@/components/sort-by'
import WriteReviewButton from '@/components/write-review-button'

const sortingReviews = ['新着順', '評価（高い順）', '評価（低い順）']

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-bg pt-24">
        <div className="mx-auto max-w-lg md:max-w-5xl px-5 lg:px-8 py-8 sm:py-14 lg:py-20">
          <div className="flex items-center justify-between">
            <WriteReviewButton></WriteReviewButton>
            <SortBy id="review-sort" options={sortingReviews}></SortBy>
          </div>
          <ul className="mt-4 mb-10 flex flex-col lg:flex-row flex-wrap items-center justify-between gap-4 lg:gap-y-5">
            {Array.from({length: 6}, (_, index) => (
              <li key={index} className="border border-accent2 flex flex-col lg:max-w-[49%] p-6">
                {/* top content */}
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <Image src={userIcon} className="rounded-full w-10 h-10" alt=""></Image>
                    <div>
                      <span className="block text-nowrap text-sm font-bold">ユーザー名</span>
                      <div className="flex items-center gap-0.5 mt-1">
                        {Array.from({length: 5}, (_, index) => (
                          <StarIcon key={index} className="h-4 w-4 text-textbk/30"></StarIcon>
                        ))}
                        <span className="ml-2 block text-xs text-textbk/40">2024/01/01</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    {/* report button */}
                    <ReportButton title="クチコミの通報">
                      <FlagIcon className="h-4 w-4 text-textbk/30"></FlagIcon>
                    </ReportButton>
                  </div>
                </div>
                {/* bottom content */}
                <p className="mt-3 text-sm">
                  これは口コミの内容です。これは口コミの内容です。これは口コミの内容です。これは口コミの内容です。
                </p>
                {/* Store replies (if any) */}
                <div className="p-4 mt-3 bg-accent2/5 rounded-md">
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm font-bold mb-1">店舗からの返信</h3>
                    <span className="ml-2 block text-xs text-textbk/40">2024/01/01</span>
                  </div>
                  <p className="text-sm">
                    これは返信内容です。これは返信内容です。これは返信内容です。これは返信内容です。これは返信内容です。これは返信内容です。これは返信内容です。これは返信内容です。
                  </p>
                </div>
                {/* / Store replies (if any) */}
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
