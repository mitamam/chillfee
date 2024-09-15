import Image from 'next/image'
import Link from 'next/link'

import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import {ArrowRightIcon, ChevronDownIcon} from '@heroicons/react/24/outline'

import HeaderTop from '@/components/header'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <>
      <HeaderTop />
      <main className="bg-bg md:bg-[url('/hero.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="pb-14 md:pb-0">
          <div className="pt-24 bg-bg md:w-1/2 md:ml-[50%] h-screen">
            <div className="mx-auto max-w-sm md:max-w-md px-5 md:px-12">
              <form method="post">
                <h1 className="mt-14 text-xl font-bold text-center">アカウント作成</h1>
                {/* account type toggle(personal and business) */}
                <label
                  htmlFor="account-toggle"
                  className="mt-8 flex items-center justify-center rounded-md text-sm cursor-pointer font-bold text-accent2"
                >
                  <input type="checkbox" id="account-toggle" className="hidden peer" />
                  <span className="select-none border border-r-0 border-accent px-4 py-2 rounded-l-md bg-accent text-white peer-checked:bg-bg peer-checked:text-accent2 peer-checked:border-accent2">
                    パーソナル
                  </span>
                  <span className="select-none border border-l-0 border-accent2 px-6 py-2 rounded-r-md bg-bg peer-checked:bg-accent peer-checked:text-white peer-checked:border-accent">
                    ビジネス
                  </span>
                </label>
                {/* / account type toggle(personal and business) */}
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="お名前"
                  className="mt-10 py-2 px-4 w-full block text-sm bg-bg border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="メールアドレス"
                  className="mt-6 py-2 px-4 w-full block text-sm bg-bg border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
                />
                <Disclosure>
                  <DisclosureButton className="mt-6 group flex items-center gap-2 text-xs text-accent2/50">
                    注意事項
                    <ChevronDownIcon className="h-3 w-3 group-data-[open]:rotate-180 text-accent2/50" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-1 text-xs text-accent2/50">
                    <p>
                      - 8-16文字以内
                      <br />
                      - 大文字と小文字を含む
                      <br />
                      - 少なくとも1つの数字を含む
                      <br />- 少なくとも1つの特殊文字を含む（!@#\$%^&*）
                    </p>
                  </DisclosurePanel>
                </Disclosure>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="パスワード"
                  className="mt-2 py-2 px-4 w-full block text-sm bg-bg border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
                />
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="パスワード（再入力）"
                  className="mt-4 py-2 px-4 w-full block text-sm bg-bg border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
                />
                <button type="submit" className="w-full mt-8 py-3 text-sm text-white font-bold bg-accent rounded-full">
                  登録
                </button>
              </form>
              <Link href="/signin" className="flex w-full items-center justify-end gap-2 mt-4">
                <span className="text-xs text-accent2/50">登録済みの方はこちら</span>
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