'use client'

import {useState} from 'react'
import Link from 'next/link'

import {EllipsisVerticalIcon} from '@heroicons/react/24/outline'
import DeleteReviewButton from './delete-review-button'

export default function UserReviewMenu() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }

  return (
    <>
      <button type="button" onClick={toggleDropDown}>
        <EllipsisVerticalIcon className="h-4 w-4"></EllipsisVerticalIcon>
      </button>
      {isDropDownOpen && (
        <ul className="z-10 absolute right-1 top-6 border bg-bg border-accent2 rounded-md">
          <li>
            <Link href="/mypage/review/1/edit" className="hover:bg-accent2 hover:text-bg text-sm py-1 px-2">
              クチコミを編集
            </Link>
          </li>
          <li>
            <DeleteReviewButton></DeleteReviewButton>
          </li>
        </ul>
      )}
    </>
  )
}
