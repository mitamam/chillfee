import Link from 'next/link'
import {ChevronRightIcon} from '@heroicons/react/24/outline'

export default function UserMenuItem({href = '#', name = '', children}) {
  return (
    <li className="cursor-pointer my-2 rounded-xl hover:bg-accent2/5">
      <Link href={href} className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          {children}
          <span className="block text-sm lg:text-base font-bold">{name}</span>
        </div>
        <ChevronRightIcon className="h-4 w-4"></ChevronRightIcon>
      </Link>
    </li>
  )
}