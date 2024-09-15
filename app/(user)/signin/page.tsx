import Link from 'next/link'

import {ArrowRightIcon} from '@heroicons/react/24/outline'

import HeaderTop from '@/components/header'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <>
      <HeaderTop />
      <main className="bg-bg md:bg-[url('/hero.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="pb-14 md:pb-0">
          <div className="flex flex-row justify-center items-center pt-24 md:pt-0 bg-bg md:w-1/2 md:h-screen">
            <div className="flex-1 max-w-sm md:max-w-md px-5 md:px-12">
              <form method="post" className="block">
                <h1 className="mt-8 md:mt-0 text-xl font-bold text-center">ログイン</h1>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="メールアドレス"
                  className="mt-10 py-2 px-4 w-full block text-sm bg-bg border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="パスワード"
                  className="mt-6 py-2 px-4 w-full block text-sm bg-bg border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
                />
                <button type="submit" className="w-full mt-8 py-3 text-sm text-white font-bold bg-accent rounded-full">
                  ログイン
                </button>
              </form>
              <Link href="/signin" className="flex w-full items-center justify-end gap-2 mt-4">
                <span className="text-xs text-accent2/50">登録がお済みでない方はこちら</span>
                <ArrowRightIcon className="h-3 w-3 text-accent2/50"></ArrowRightIcon>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
