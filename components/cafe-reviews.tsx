import {ChangeEvent, useState} from 'react'

import Pagination from '@/components/pagination'
import Review from '@/components/review'
import SortBy from '@/components/sort-by'

const options = [
  '新着順',
  '古い順',
  '評価が高い順',
  '評価が低い順'
]

export default function CafeReviews() {
  const [isOnlyReplied, setIsOnlyReplied] = useState(false)

  function handleOnlyRepliedChecked(event: ChangeEvent<HTMLInputElement>) {
    setIsOnlyReplied(event.target.checked)
  }

  return (
    <>
      <div className="flex items-center justify-end gap-2 mt-8">
        <SortBy options={options}></SortBy>
        <label htmlFor="only-replied" className="text-sm select-none">
          返信したクチコミのみ
        </label>
        <div className="relative">
          <input
            id="only-replied"
            name="only-replied"
            type="checkbox"
            className="peer appearance-none w-4 h-4 text-accent2 bg-bg border border-accent2/10 rounded-md"
            value=""
            onChange={handleOnlyRepliedChecked}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="absolute top-0.5 left-0 hidden w-4 h-4 peer-checked:block"
          >
            {`Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.`}
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        </div>
      </div>
      <ul className="mt-4 mb-10 flex flex-col lg:flex-row flex-wrap items-start justify-between gap-4 lg:gap-y-5">
        {Array.from({length: 6}, (_, index) => (
          <Review key={index}></Review>
        ))}
      </ul>
      <Pagination></Pagination>
    </>
  )
}
