'use client'

import {useState, Fragment} from 'react'
import {Bars3Icon, XMarkIcon, UserIcon, HeartIcon} from '@heroicons/react/24/outline'
import {Dialog, DialogPanel, Transition, TransitionChild} from '@headlessui/react'

import Link from 'next/link'
import Image from 'next/image'

import Logo from '@/public/logo.svg'
import LogoIcon from '@/public/logo_icon.svg'
import SearchBox from './search-box'

export default function Header({bg = 'bg', display = 'fixed'}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className={`${display} w-full border-b z-10 border-accent2 bg-${bg}`}>
      <nav
        className="mx-auto w-full flex gap-8 max-w-7xl items-center justify-between p-5 lg:px-8"
        aria-label="グローバル"
      >
        {/* logo */}
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Chillfee</span>
            <Image className="hidden lg:block h-14 w-auto" src={Logo} alt="" />
            <Image className="lg:hidden h-14 w-auto" src={LogoIcon} alt="" />
          </Link>
        </div>

        <SearchBox className="border rounded-md py-3"></SearchBox>

        {/* menu bar */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* main menu (not logged in)*/}
        <div className="hidden lg:flex">
          <Link href="/signin" className="text-sm py-2 px-4 rounded-full font-bold leading-6 text-accent2">
            ログイン
          </Link>
        </div>

        {/* main menu (logged in) */}
        {/* <div className="hidden lg:flex gap-6">
          <Link href="/mypage" className="inline-flex items-center justify-between text-sm font-bold leading-6 text-textbk">
            <UserIcon className="size-5" aria-hidden="true" />
          </Link>
          <Link href="/mypage/bookmarks" className="inline-flex items-center justify-between text-sm font-bold leading-6 text-textbk">
            <HeartIcon className="size-5" aria-hidden="true" />
          </Link>
        </div> */}
      </nav>

      {/* mobile */}
      <Transition appear show={mobileMenuOpen} as={Fragment}>
        <Dialog className="lg:hidden" onClose={setMobileMenuOpen}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPanel className="fixed inset-y-0 z-20 right-0 w-full overflow-y-auto bg-bg p-5 sm:py-9 sm:max-w-sm sm:ring-1 sm:ring-accent2">
              <div className="flex items-center justify-between sm:justify-end pb-6">
                <div className="sm:hidden">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <span className="sr-only">Chillfee</span>
                    <Image className="h-14 w-auto" src={LogoIcon} alt="" />
                  </Link>
                </div>
                {/* close button */}
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* mobile menu (not logged in) */}
              <div className="border-y border-accent2 flow-root">
                <div className="py-4">
                  <Link
                    href="/signin"
                    className="block px-3 py-2 text-base font-bold leading-7 transition-all text-textbk hover:text-opacity-10"
                  >
                    ログイン
                  </Link>
                </div>
              </div>

              {/* mobile menu (logged in) */}
              {/* <div className="border-y border-accent2 flow-root">
                <div className="divide-y divide-accent2">
                  <Link
                    href="/mypage"
                    className="flex items-center gap-3 px-3 py-4 text-base font-bold leading-7 text-textbk"
                  >
                    <UserIcon className="size-5" aria-hidden="true" />
                    <span>マイページ</span>
                  </Link>
                  <Link
                    href="/mypage/bookmarks"
                    className="flex items-center gap-3 px-3 py-4 text-base font-bold leading-7 text-textbk"
                  >
                    <HeartIcon className="size-5" aria-hidden="true" />
                    <span>お気に入り</span>
                  </Link>
                </div>
              </div> */}
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </header>
  )
}