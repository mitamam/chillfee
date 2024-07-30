import UserMenu from '@/components/user-menu'
import BackButton from '@/components/back-button'
import Pagination from '@/components/pagination'

import {StarIcon} from '@heroicons/react/24/outline'
import UserReviewMenu from '@/components/user-review-menu'

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-24">
      <div className="flex flex-col justify-center md:justify-between md:flex-row">
        {/* right menu */}
        <UserMenu className="md:w-1/4 hidden md:block"></UserMenu>
        {/* left contents */}
        <div className="w-full md:border-l pb-8 sm:pb-14 lg:pb-20 md:px-16 border-accent2 md:w-3/4">
          <BackButton className="my-6"></BackButton>
          <ul className="mt-4 mb-10 flex flex-col lg:flex-row flex-wrap items-center justify-between gap-4 lg:gap-y-5">
            <li className="border border-accent2 lg:max-w-[49%] p-6">
              <div className="flex justify-between items-center relative">
                <div className="flex items-center">
                  <span className="mr-2 block text-xs text-textbk/40">2024/1/1</span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({length: 5}, (_, index) => (
                      <StarIcon className="h-4 w-4 text-textbk/30"></StarIcon>
                    ))}
                  </div>
                </div>
                <UserReviewMenu></UserReviewMenu>
              </div>
              <p className="mt-3 text-sm">
                これは口コミの内容です。これは口コミの内容です。これは口コミの内容です。これは口コミの内容です。
              </p>
            </li>
          </ul>
          <Pagination></Pagination>
        </div>
      </div>
    </div>
  )
}
