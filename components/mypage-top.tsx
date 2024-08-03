import Image from 'next/image'
import {StarIcon} from '@heroicons/react/24/outline'

import BackButton from '@/components/back-button'
import MypageTab from '@/components/mypage-tab'


// タスク：実装時削除
import Thumbnail from '@/public/45f7044d45f7155c58f5aede2eddc83e.jpg'

export default function MypageTop(props) {
  return (
    <>
      <BackButton className="mt-6 absolute"></BackButton>
      <div className="flex justify-between items-center mt-16 md:mt-10">
        <div className="flex items-center gap-4">
          <div>
            <Image src={Thumbnail} className="rounded-full w-16 h-16" alt=""></Image>
          </div>
          <div>
            <h1 className="mb-1 text-base font-bold">店名</h1>
            <p className="text-sm">所在地</p>
          </div>
        </div>
        <div>
          <span className="inline-block text-xs border border-accent2 rounded-full font-bold py-1 px-2">公開中</span>
          <div className="flex items-center gap-0.5 mt-4">
            {Array.from({length: 5}, (_, index) => (
              <StarIcon key={index} className="h-5 w-5 text-textbk/30"></StarIcon>
            ))}
          </div>
        </div>
      </div>
      <MypageTab index={props.index}></MypageTab>
    </>
  )
}
