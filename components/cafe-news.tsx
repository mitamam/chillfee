import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import {Switch} from '@headlessui/react'

import CreateNewsButton from '@/components/create-news-button'
import DeleteNewsButton from '@/components/delete-news-button'

import {ClockIcon} from '@heroicons/react/24/outline'

// Todo：実装時削除
import Thumbnail from '@/public/45f7044d45f7155c58f5aede2eddc83e.jpg'

export default function CafeNews({isDetailPage = false}) {
  const [enabled, setEnabled] = useState(false)

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const status = ['公開前', '公開中', '公開後', '非公開', '下書き']

  return (
    <>
      {isDetailPage ? (
        <>
          <h1 className="mt-6 text-lg font-bold">記事の設定</h1>
          <p className="text-base mt-4">公開期間</p>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            showTimeInput
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            showTimeInput
          />
          <div className="mt-4 flex items-center gap-2">
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
        </>
      ) : (
        <div className="mx-auto max-w-md sm:max-w-full">
          <div className="flex justify-end">
            <CreateNewsButton></CreateNewsButton>
          </div>
          <ul className="flex items-start flex-wrap gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-10">
            {Array.from({length: 4}, (_, index) => (
              <li className="w-[calc(50%-8px)] sm:w-[calc(33.33%-12px)] lg:w-[calc(25%-24px)] border border-accent2">
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
        </div>
      )}
    </>
  )
}
