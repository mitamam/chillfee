'use client'

import Image from 'next/image'
import Link from 'next/link'

import UserMenu from '@/components/user-menu'
import BackButton from '@/components/back-button'
import Pagination from '@/components/pagination'
import FavoriteButton from '@/components/favorite-button'

// Todo：実装時削除
import Thumbnail from '@/public/45f7044d45f7155c58f5aede2eddc83e.jpg'

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-24">
      <div className="flex flex-col justify-center md:justify-between md:flex-row">
        {/* right menu */}
        <UserMenu className="md:w-1/4 hidden md:block"></UserMenu>
        {/* left contents */}
        <div className="w-full md:border-l pb-8 sm:pb-14 lg:pb-20 md:px-16 border-accent2 md:w-3/4">
          <BackButton className="my-6 absolute md:hidden"></BackButton>
          <h1 className="my-5 text-lg font-bold md:hidden text-center">お気に入り</h1>
          <ul className="mt-4 md:mt-8 mb-10 flex flex-col lg:flex-row flex-wrap items-center justify-between gap-4 lg:gap-y-5">
            {Array.from({length: 4}, (_, index) => (
              <li
                key={index}
                className="border border-accent2 w-full lg:max-w-[48%] max-w-md p-2 flex gap-4 justify-start items-center relative top-0 left-0"
              >
                <Link href="/cafes/1" className="absolute inset-0 z-10"></Link>
                <div className="relative overflow-hidden w-24 pt-24 ">
                  <Image src={Thumbnail} alt="" layout="fill" objectFit="cover" />
                </div>
                <div>
                  <h2 className="text-base font-bold mb-1">店名</h2>
                  <p className="text-sm mb-1">所在地</p>
                  <span className="text-sm">営業時間</span>
                </div>
                <FavoriteButton className="absolute bottom-4 right-4 w-6 h-6"></FavoriteButton>
              </li>
            ))}
          </ul>
          <Pagination></Pagination>
        </div>
      </div>
    </div>
  )
}
