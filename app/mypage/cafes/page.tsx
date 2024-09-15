import Image from 'next/image'
import Link from 'next/link'

import UserMenu from '@/components/user-menu'
import BackButton from '@/components/back-button'
import Pagination from '@/components/pagination'

// タスク：実装時削除
import Thumbnail from '@/public/45f7044d45f7155c58f5aede2eddc83e.jpg'

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-24">
      <div className="flex items-start">
        {/* right menu */}
        <UserMenu className="md:w-1/4 hidden md:block"></UserMenu>
        {/* left contents */}
        <div className="w-full md:w-3/4 md:border-l border-accent2 md:pl-8 pb-8 sm:pb-14 lg:pb-20">
          <BackButton className="my-6 absolute md:hidden"></BackButton>
          <h1 className="my-5 text-lg font-bold md:hidden text-center">店舗一覧</h1>
          <div className="mb-4 md:mt-10 flex items-center justify-end">
            <Link href="/mypage/cafes/create" className="text-sm inline-block border border-accent2 py-2 px-4 rounded-full">
              新規カフェを登録
            </Link>
          </div>
          <ul className="flex flex-wrap gap-4 mb-8">
            {Array.from({length: 7}, (_, index) => (
              <li key={index} className="w-[calc(50%-8px)]">
                <Link href="/mypage/cafes/1">
                  <div className="p-4 border border-accent2">
                    <div className="flex gap-4 flex-wrap items-center">
                      <div className="flex-1 max-w-28">
                        <Image src={Thumbnail} alt="" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-base font-bold">店舗名</h3>
                        <p className="mb-2 text-sm text-textbk/40">店舗所在地</p>
                        <span className="inline-block text-xs font-bold border border-accent2 rounded-full py-1 px-2">公開中</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Pagination></Pagination>
        </div>
      </div>
    </div>
  )
}
