'use client'
import {useState, FormEvent} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Header from '@/components/header'
import Footer from '@/components/footer'
import testImage from '@/public/45f7044d45f7155c58f5aede2eddc83e.jpg'

import {ChevronDownIcon, MagnifyingGlassIcon, StarIcon, WifiIcon, Battery100Icon} from '@heroicons/react/24/outline'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import Pagination from '@/components/pagination'
import SortBy from '@/components/sort-by'
import FavoriteButton from '@/components/favorite-button'

const wards = [
  {id: 0, name: '---'},
  {id: 1, name: '足立区'},
  {id: 2, name: '荒川区'},
  {id: 3, name: '板橋区'},
  {id: 4, name: '江戸川区'},
  {id: 5, name: '大田区'},
  {id: 6, name: '葛飾区'},
  {id: 7, name: '北区'},
  {id: 8, name: '江東区'},
  {id: 9, name: '品川区'},
  {id: 10, name: '渋谷区'},
  {id: 11, name: '新宿区'},
  {id: 12, name: '杉並区'},
  {id: 13, name: '墨田区'},
  {id: 14, name: '世田谷区'},
  {id: 15, name: '台東区'},
  {id: 16, name: '中央区'},
  {id: 17, name: '千代田区'},
  {id: 18, name: '豊島区'},
  {id: 19, name: '中野区'},
  {id: 20, name: '練馬区'},
  {id: 21, name: '文京区'},
  {id: 22, name: '港区'},
  {id: 23, name: '目黒区'},
]

const sortingCafes = ['新着順', '評価の高い順', 'クチコミの多い順', 'コーヒーの安い順']

export default function Page() {
  async function cafeSearch(event: FormEvent<HTMLFormElement>) {
    alert('submit!')
  }

  const [quietEnabled, setQuietEnabled] = useState(false)
  const [busyEnabled, setBusyEnabled] = useState(false)
  const [wifiEnabled, setWifiEnabled] = useState(false)
  const [powerEnabled, setPowerEnabled] = useState(false)
  const [bathroomEnabled, setBathroomEnabled] = useState(false)

  const [selectedWard, setSelectedWard] = useState(wards[0])

  return (
    <>
      <Header />
      <main className="bg-bg">
        <div className="mx-auto max-w-7xl pt-24 px-5 lg:px-8">
          <div className="py-8 sm:py-14 lg:py-20 lg:flex lg:justify-between lg:items-start">
            {/* left menu */}
            <div className="bg-main px-6 py-8 rounded-xl lg:min-w-80">
              {/* search and filter */}
              <form onSubmit={cafeSearch} className="mx-auto">
                <label htmlFor="top-search" className="mb-2 text-sm font-medium text-textbk sr-only">
                  Search
                </label>
                <div className="relative">
                  <input
                    type="search"
                    id="top-search"
                    className="bg-transparent border-b border-accent2 block 
                  w-full p-4 pe-7 text-sm text-accent2 focus:outline-none 
                  placeholder:text-accent2/30"
                    placeholder="検索"
                  />
                  <button type="submit" className="absolute inset-y-0 end-0 flex items-center px-3">
                    <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                {/* filter */}
                <Disclosure defaultOpen>
                  <DisclosureButton className="w-full flex items-center justify-between pt-4">
                    絞り込み
                    <ChevronDownIcon className="h-5 w-5" />
                  </DisclosureButton>
                  <Transition
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 -translate-y-6"
                    enterTo="opacity-100 translate-y-0"
                    leave="duration-300 ease-out"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-6"
                  >
                    <DisclosurePanel>
                      <h2 className="mt-8 text-lg font-bold">タグ</h2>
                      <p className="text-base font-bold mt-4">環境</p>
                      <div className="flex items-center gap-2 py-4">
                        {/* quiet filter */}
                        <label
                          htmlFor="quiet-filter"
                          className="cursor-pointer rounded-full
                        text-sm text-textbk px-3 py-1 select-none border border-accent2
                        has-[:checked]:bg-accent2 has-[:checked]:text-bg
                        hover:text-bg hover:bg-accent2"
                        >
                          <span className="text-center text-nowrap">静か</span>
                          <input
                            type="checkbox"
                            className="hidden peer"
                            id="quiet-filter"
                            checked={quietEnabled}
                            onChange={() => setQuietEnabled(!quietEnabled)}
                          />
                        </label>
                        {/* busy filter */}
                        <label
                          htmlFor="busy-filter"
                          className="cursor-pointer rounded-full
                        text-sm text-textbk px-3 py-1 select-none border border-accent2
                        has-[:checked]:bg-accent2 has-[:checked]:text-bg
                        hover:text-bg hover:bg-accent2"
                        >
                          <span className="text-center text-nowrap">賑やか</span>
                          <input
                            type="checkbox"
                            className="hidden peer"
                            id="busy-filter"
                            checked={busyEnabled}
                            onChange={() => setBusyEnabled(!busyEnabled)}
                          />
                        </label>
                      </div>
                      <p className="text-base font-bold">設備</p>
                      <div className="flex items-center gap-2 py-4">
                        {/* wifi filter */}
                        <label
                          htmlFor="wifi-filter"
                          className="cursor-pointer rounded-full
                        text-sm text-textbk px-3 py-1 select-none border border-accent2
                        has-[:checked]:bg-accent2 has-[:checked]:text-bg
                        hover:text-bg hover:bg-accent2"
                        >
                          <span className="text-center text-nowrap">WiFi</span>
                          <input
                            type="checkbox"
                            className="hidden peer"
                            id="wifi-filter"
                            checked={wifiEnabled}
                            onChange={() => setWifiEnabled(!wifiEnabled)}
                          />
                        </label>
                        {/* power filter */}
                        <label
                          htmlFor="power-filter"
                          className="cursor-pointer rounded-full
                        text-sm text-textbk px-3 py-1 select-none border border-accent2
                        has-[:checked]:bg-accent2 has-[:checked]:text-bg
                        hover:text-bg hover:bg-accent2"
                        >
                          <span className="text-center text-nowrap">電源</span>
                          <input
                            type="checkbox"
                            className="hidden peer"
                            id="power-filter"
                            checked={powerEnabled}
                            onChange={() => setPowerEnabled(!powerEnabled)}
                          />
                        </label>
                        {/* bathroom filter */}
                        <label
                          htmlFor="bathroom-filter"
                          className="cursor-pointer rounded-full
                        text-sm text-textbk px-3 py-1 select-none border border-accent2
                        has-[:checked]:bg-accent2 has-[:checked]:text-bg
                        hover:text-bg hover:bg-accent2"
                        >
                          <span className="text-center text-nowrap">トイレ</span>
                          <input
                            type="checkbox"
                            className="hidden peer"
                            id="bathroom-filter"
                            checked={bathroomEnabled}
                            onChange={() => setBathroomEnabled(!bathroomEnabled)}
                          />
                        </label>
                      </div>
                      <h2 className="mt-8 mb-4 text-lg font-bold">エリア</h2>
                      <button
                        type="button"
                        className="text-sm font-bold py-2 px-6 border border-accent2 rounded-full mb-4"
                      >
                        現在地から絞り込む
                      </button>
                      {/* select box for ward */}
                      <p className="text-base font-bold">23区（東京都）</p>
                      <Listbox defaultValue={selectedWard} onChange={setSelectedWard}>
                        {({open}) => (
                          <>
                            <div className="relative">
                              <ListboxButton className="mt-4 bg-transparent border border-accent2 rounded-lg py-2 px-4 w-full text-sm text-left text-accent2">
                                <span className="flex items-center justify-between pointer-events-none">
                                  <span className="block truncate">{selectedWard.name}</span>
                                  <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
                                </span>
                              </ListboxButton>

                              <Transition
                                show={open}
                                enter="transition ease-out duration-100"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <ListboxOptions className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-bg py-1 border border-accent2 text-base focus:outline-none sm:text-sm">
                                  {wards.map((ward) => (
                                    <ListboxOption
                                      key={ward.id}
                                      value={ward}
                                      className="py-1 pl-3 bg-bg hover:bg-accent2 hover:text-bg"
                                    >
                                      {ward.name}
                                    </ListboxOption>
                                  ))}
                                </ListboxOptions>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
                      <p className="text-base font-bold mt-4">町域・番地</p>
                      <input
                        type="text"
                        name="address"
                        placeholder="町域・番地"
                        className="mt-4 py-2 px-4 bg-transparent border border-accent2 w-full rounded-lg text-sm placeholder:text-accent2/30 focus:outline-none"
                      />

                      <h2 className="mt-8 text-lg font-bold">営業時間</h2>
                      <div className="flex items-center gap-2">
                        <input
                          className="mt-2 py-2 px-4 block text-base border border-accent2 bg-transparent rounded-md outline-none"
                          type="time"
                          name="open-time"
                          id="open-time"
                        />
                        <span> ~ </span>
                        <input
                          className="mt-2 py-2 px-4 block text-base border border-accent2 bg-transparent rounded-md outline-none"
                          type="time"
                          name="close-time"
                          id="close-time"
                        />
                      </div>
                    </DisclosurePanel>
                  </Transition>
                </Disclosure>
              </form>
            </div>

            {/* right menu */}
            <div>
              <SortBy id="cafe-sort" options={sortingCafes}></SortBy>
              {/* contents */}
              <ul className="mb-10 flex flex-row flex-wrap justify-between lg:flex-col gap-4 mt-4 lg:ml-20">
                {/* 実装時削除↓ */}
                {Array.from({length: 4}, (_, index) => (
                  <li key={index} className="sm:max-w-[48%] lg:max-w-full relative">
                    <div className="py-6 px-8 flex flex-col lg:gap-8 lg:flex-row border border-accent2 rounded-lg">
                      <Link href="/cafes/1" className="absolute inset-0 z-10"></Link>
                      <div>
                        <div className="relative w-full pt-[75%] lg:pt-[100%] overflow-hidden">
                          <FavoriteButton className='absolute right-2 top-2'></FavoriteButton>
                          <Image src={testImage} alt="" layout="fill" objectFit="cover"></Image>
                        </div>
                        <div className="flex items-center justify-between mt-4 lg:mt-2 lg:flex-col lg:items-start">
                          {/* rating */}
                          <div className="flex items-center gap-1 mb-2 lg:mb-0 lg:gap-0.5">
                            <StarIcon className="h-4 w-4 text-textbk/30"></StarIcon>
                            <StarIcon className="h-4 w-4 text-textbk/30"></StarIcon>
                            <StarIcon className="h-4 w-4 text-textbk/30"></StarIcon>
                            <StarIcon className="h-4 w-4 text-textbk/30"></StarIcon>
                            <StarIcon className="h-4 w-4 text-textbk/30"></StarIcon>
                            <span className="text-xs text-textbk/30">（10）</span>
                          </div>
                          <div className="flex items-center gap-1 text-accent">
                            <WifiIcon className="h-4 w-4"></WifiIcon>
                            <Battery100Icon className="h-4 w-4"></Battery100Icon>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-lg font-bold">店舗名</h3>
                        <p className="text-base mt-4">
                          これは店舗説明です。これは店舗説明です。
                          これは店舗説明です。これは店舗説明です。これは店舗説明です。
                        </p>
                        <ul className="flex items-end gap-2 mt-4 flex-grow">
                          <li className="py-1 px-3 text-sm text-accent2 border border-accent2 rounded-full text-nowrap">
                            静か
                          </li>
                          <li className="py-1 px-3 text-sm text-accent2 border border-accent2 rounded-full text-nowrap">
                            緑が多い
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* New cafe button when there are no search results */}
              {/* <div className="text-center">
                <p className="text-base mb-4">お探しのカフェが見つかりませんか？</p>
                <Link href='/cafes/create' className="inline-block mb-10 border border-accent2 py-2 px-8 rounded-full">
                  新規カフェを登録
                </Link>
              </div> */}

              {/* / New cafe button when there are no search results */}
              <Pagination></Pagination>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}