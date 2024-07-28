'use client'

import {useCallback} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import useEmblaCarousel from 'embla-carousel-react'

import {ChevronLeftIcon, ChevronRightIcon, StarIcon} from '@heroicons/react/24/outline'

import Header from '@/components/header'
import Footer from '@/components/footer'
import SeeMoreButton from '@/components/seemore-button'

// 実装時削除
import testImage from '@/public/45f7044d45f7155c58f5aede2eddc83e.jpg'
import userIcon from '@/public/user_icon.jpg'
import ReportButton from '@/components/report-button'
import FavoriteButton from '@/components/favorite-button'
import WriteReviewButton from '@/components/write-review-button'

export default function Page() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const detailItems = [
    '店名（正式名称）',
    '所在地',
    '連絡先',
    'SNS・ホームページ',
    '営業時間',
    '定休日',
    'アクセス',
    'WiFi',
    '電源',
    'トイレ',
    '席数',
    'コーヒーの値段（一杯）',
    '支払い方法',
  ]

  return (
    <>
      <Header />
      <main className="bg-bg">
        <div className="mx-auto max-w-7xl pt-24 px-5 lg:px-8 pb-8 sm:pb-14 lg:pb-20">
          <div className="flex justify-end">
            <Link
              href="/cafes/1/edit"
              className="text-sm mt-5 lg:mt-7 inline-block py-1 px-3 border rounded-full border-accent2"
            >
              カフェ情報の編集
            </Link>
          </div>
          {/* gallery */}
          <div ref={emblaRef} className="relative mt-5 lg:mt-7 overflow-hidden">
            <div className="flex">
              <div className="shrink-0 basis-3/4 md:basis-2/4 min-w-0 overflow-hidden pt-[50%] md:pt-[30%]">
                <Image src={testImage} alt="" layout="fill" objectFit="cover"></Image>test 1
              </div>
              <div className="shrink-0 basis-3/4 md:basis-2/4 min-w-0 overflow-hidden pt-[50%] md:pt-[30%]">
                <Image src={testImage} alt="" layout="fill" objectFit="cover"></Image>test 2
              </div>
              <div className="shrink-0 basis-3/4 md:basis-2/4 min-w-0 overflow-hidden pt-[50%] md:pt-[30%]">
                <Image src={testImage} alt="" layout="fill" objectFit="cover"></Image>test 3
              </div>
            </div>
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 left-0 p-2 bg-bg/50 rounded-full md:left-40 lg:left-56"
            >
              <ChevronLeftIcon className="h-4 w-4 text-accent2"></ChevronLeftIcon>
            </button>
            <button
              onClick={scrollNext}
              className="absolute top-1/2 right-0 p-2 bg-bg/50 rounded-full md:right-40 lg:right-56"
            >
              <ChevronRightIcon className="h-4 w-4 text-accent2"></ChevronRightIcon>
            </button>
          </div>
          {/* / gallery */}

          <div className="flex flex-col md:gap-x-8 lg:gap-x-16 md:flex-row justify-between">
            {/* left contents */}
            <div className="md:w-2/3">
              <div className="mt-12 lg:mt-20 flex items-center justify-between">
                <h1 className="text-lg font-bold">店名</h1>
                <FavoriteButton className="w-7 h-7"></FavoriteButton>
              </div>
              <p className="text-base mt-6 lg:mt-10">
                これは店舗説明です。これは店舗説明です。これは店舗説明です。
                これは店舗説明です。これは店舗説明です。これは店舗説明です。
                これは店舗説明です。これは店舗説明です。これは店舗説明です。
                <br />
                <br />
                これは店舗説明です。これは店舗説明です。これは店舗説明です。
                これは店舗説明です。これは店舗説明です。これは店舗説明です。
                これは店舗説明です。これは店舗説明です。これは店舗説明です。
              </p>

              {/* review */}
              <div>
                <div className="mt-14 lg:mt-20">
                  <h2 className="text-xl font-bold mb-8">クチコミ</h2>
                  <div className="flex items-center justify-between">
                    <WriteReviewButton></WriteReviewButton>
                    <SeeMoreButton href="/cafes/1/review"></SeeMoreButton>
                  </div>
                </div>
                <ul className="flex justify-between gap-4 flex-col mt-4">
                  {/* 実装時削除↓ */}
                  {Array.from({length: 2}, (_, index) => (
                    <li className="border border-accent2 flex flex-col">
                      <div className="p-6">
                        <div className="flex items-center gap-3">
                          <Image src={userIcon} className="rounded-full w-10 h-10" alt=""></Image>
                          <div>
                            <span className="block text-nowrap text-sm font-bold">ユーザー名</span>
                            <div className="flex items-center gap-0.5 mt-1">
                              {Array.from({length: 5}, (_, index) => (
                                <StarIcon className="h-4 w-4 text-textbk/30"></StarIcon>
                              ))}
                              <span className="ml-2 block text-xs text-textbk/40">2024/01/01</span>
                            </div>
                          </div>
                        </div>
                        <p className="mt-3 text-sm">
                          これは口コミの内容です。これは口コミの内容です。これは口コミの内容です。これは口コミの内容です。
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* / review */}

              {/* cafe details */}
              <div className="mt-10 lg:mt-16">
                <h2 className="text-xl font-bold">店舗詳細</h2>
                <ul className="mt-8 mb-8 mx-auto sm:w-2/3 md:w-full flex flex-col px-4 py-3 border border-accent2 divide-y divide-accent2">
                  {detailItems.map((name, index) => (
                    <li key={index} className="flex justify-between w-full px-8 py-3 first:pt-0 last:pb-0">
                      <h4 className="text-sm w-1/3">{name}</h4>
                      <p className="text-sm w-2/3"></p>
                    </li>
                  ))}
                  <li className="pt-4 pl-8 flex gap-3">
                    <span className="block text-sm text-nowrap text-accent px-2 py-1 border border-accent rounded-full">
                      静か
                    </span>
                    <span className="block text-sm text-nowrap text-accent px-2 py-1 border border-accent rounded-full">
                      緑が多い
                    </span>
                  </li>
                </ul>
              </div>
              {/* / cafe details */}
            </div>
            {/* / left contents */}

            {/* right contents */}
            <div className="md:w-1/3">
              {/* new articles */}
              <div className="mt-10 lg:mt-16">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">新着情報</h2>
                  <SeeMoreButton href="/cafes/1/news"></SeeMoreButton>
                </div>
                <div className="p-6 mt-8 w-2/3 sm:w-1/2 md:w-full lg:w-2/3 mx-auto border border-accent2">
                  <div className="relative w-full pt-[75%] overflow-hidden">
                    <Image src={testImage} alt="" layout="fill" objectFit="cover"></Image>
                  </div>
                  <h3 className="mt-4 text-base font-bold">ニュースのタイトル</h3>
                  <p className="text-xs text-textbk/40 mt-2">2024/01/01</p>
                </div>
              </div>
              {/* / new articles */}

              <div className="mx-auto mt-8 mb-4 relative sm:w-72 md:w-full h-0 sm:pt-72 pt-[75%]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.1980116491522!2d139.769273885302!3d35.69674460188763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f2302fe3959%3A0x24825cbf42c47804!2zTmV1cm8gRGl2ZSDnp4vokYnljp_vvIjlsLHlirTnp7vooYzmlK_mj7Tkuovmpa3miYDvvIk!5e0!3m2!1sja!2sjp!4v1720578688945!5m2!1sja!2sjp"
                  width="600"
                  height="450"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              {/* Reporting Cafe Information */}
              {/* ユーザーがログインしていなかったらログインページに飛ばす */}
              <ReportButton title="店舗情報の通報">
                <span className="text-sm underline">店舗情報を通報する</span>
              </ReportButton>
              {/* / Reporting Cafe Information */}
            </div>
          </div>
          {/* right contents */}
        </div>
      </main>
      <Footer />
    </>
  )
}
