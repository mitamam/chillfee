import {useState} from 'react'

import {StarIcon} from '@heroicons/react/24/outline'

export default function Review() {
  const [showReplyForm, setShowReplyForm] = useState(false)

  return (
    <li className="border border-accent2 flex flex-col lg:max-w-[49%] p-6">
      {/* top content */}
      <div>
        <div className="flex items-center justify-between">
          <span className="block text-nowrap text-sm font-bold">ユーザー名</span>
          {/* Reply button */}
          <button type="button" className="text-sm underline" onClick={() => setShowReplyForm(true)}>
            返信
          </button>
        </div>
        {/* Reply button */}
        <div className="flex items-center gap-0.5 mt-1">
          {Array.from({length: 5}, (_, index) => (
            <StarIcon className="h-4 w-4 text-textbk/30"></StarIcon>
          ))}
          <span className="ml-2 block text-xs text-textbk/40">2024/01/01</span>
        </div>
      </div>
      {/* bottom content */}
      <p className="mt-3 text-sm">
        これは口コミの内容です。これは口コミの内容です。これは口コミの内容です。これは口コミの内容です。
      </p>
      {/* Store replies (if any) */}
      <div className="p-4 mt-3 bg-accent2/5 rounded-md">
        <h3 className="text-sm font-bold mb-1">店舗からの返信</h3>
        <p className="text-sm">
          これは返信内容です。これは返信内容です。これは返信内容です。これは返信内容です。これは返信内容です。これは返信内容です。これは返信内容です。これは返信内容です。
        </p>
      </div>
      {/* / Store replies (if any) */}
      {/* Reply Form */}
      {showReplyForm && (
        <div className="mt-3">
          <textarea
            placeholder="返信を入力してください"
            rows={4}
            cols={50}
            className="w-full p-2 border rounded-md"
          ></textarea>
          <div className='flex items-center justify-end'>
            <button type="button" className="mt-2 mr-4 px-2 py-2 text-sm rounded-md hover:bg-accent2/5" onClick={() => setShowReplyForm(false)}>
              キャンセル
            </button>
            <button className="mt-2 px-4 py-2 text-sm bg-accent2 text-white rounded-md">送信</button>
          </div>
        </div>
      )}
      {/* / Reply Form */}
    </li>
  )
}
