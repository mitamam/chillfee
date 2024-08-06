import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import {Switch} from '@headlessui/react'

import CreateNewsButton from '@/components/create-news-button'
import DeleteNewsButton from '@/components/delete-news-button'
import Pagination from '@/components/pagination'
import BackButton from '@/components/back-button'
import NewsContent from '@/components/news-content'

import {ClockIcon} from '@heroicons/react/24/outline'

// Todo：実装時削除
import Thumbnail from '@/public/45f7044d45f7155c58f5aede2eddc83e.jpg'
const content: Element[] = [
  {id: '1', type: 'text', content: 'test text', size: ''},
  {id: '2', type: 'image', content: '/45f7044d45f7155c58f5aede2eddc83e.jpg', size: 'small'},
]

interface Element {
  id: string
  type: string
  content: any
  size: string
}

export default function CafeNews({isDetailPage = false}) {
  const [enabled, setEnabled] = useState(false)

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const status = ['公開前', '公開中', '公開後', '非公開', '下書き']

  return (
    <>
      {isDetailPage ? (
        <>
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between border-b border-accent2 pb-8">
            <div className="flex items-start gap-8">
              <BackButton className="mt-6"></BackButton>
              <div>
                <h1 className="mt-6 text-lg font-bold">記事の設定</h1>
                <p className="text-base mt-8 mb-2">公開期間</p>
                <div className="flex items-center gap-4">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    showTimeInput
                    dateFormat="yyyy/MM/dd aa h:mm"
                    className="border border-accent2 text-base px-2 py-1 rounded-md outline-none"
                  />
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    showTimeInput
                    dateFormat="yyyy/MM/dd aa h:mm"
                    className="border border-accent2 text-base px-2 py-1 rounded-md outline-none"
                  />
                </div>
                <div className="mt-8 flex items-center gap-2">
                  <p className="text-base">公開期間を無視して非公開にする</p>
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className="group inline-flex h-5 w-9 items-center rounded-full bg-accent2/10 transition data-[checked]:bg-accent2"
                  >
                    <span className="size-3 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-5"></span>
                  </Switch>
                </div>
                <DeleteNewsButton></DeleteNewsButton>
              </div>
            </div>
            <Link
              href="/cafes/1/news/1/edit"
              className="mt-8 ml-12 lg:mt-0 lg:ml-0 inline-block border border-accent2 text-base px-4 py-2 rounded-full"
            >
              記事を編集する
            </Link>
          </div>
          <div className="mx-auto max-w-5xl px-5 py-8">
            <h1 className="text-xl font-bold">タイトル</h1>
            <p className="mt-4 text-sm">2024.01.01</p>
            <div className="mt-10 relative w-full pt-[50%] overflow-hidden">
              <Image src={Thumbnail} alt="header image" layout="fill" objectFit="cover"></Image>
            </div>
            {content.map((element) => (
              <NewsContent key={element.id} element={element} />
            ))}
          </div>
        </>
      ) : (
        <div className="mx-auto max-w-md sm:max-w-full">
          <div className="flex justify-end">
            <CreateNewsButton></CreateNewsButton>
          </div>
          <ul className="flex items-start flex-wrap mb-8 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-10">
            {Array.from({length: 4}, (_, index) => (
              <li
                key={index}
                className="w-[calc(50%-8px)] sm:w-[calc(33.33%-12px)] lg:w-[calc(25%-24px)] border border-accent2"
              >
                <Link href="/mypage/cafes/1/news/1" className="block p-4">
                  <div className="relative w-full pt-[100%] overflow-hidden">
                    <Image src={Thumbnail} alt="" layout="fill" objectFit="cover"></Image>
                  </div>
                  <h2 className="mt-2 text-sm font-bold">ニュースのタイトル</h2>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-xs">2024.01.01</p>
                    <span className="py-1 px-2 text-xs bg-accent2 text-white rounded-full">{status[0]}</span>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <ClockIcon className="h-4 w-4"></ClockIcon>
                    <div>
                      <p className="text-xs">2024/01/01 0:00 -</p>
                      <p className="mt-1 text-xs">2024/01/02 0:00</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Pagination></Pagination>
        </div>
      )}
    </>
  )
}
