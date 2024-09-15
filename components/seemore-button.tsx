import Link from 'next/link'
import {ChevronRightIcon} from '@heroicons/react/24/outline'

export default function SeeMoreButton({ href = '#' }) {
  return (
    <Link href={href}
      className="group flex items-center text-sm px-3 pl-4 py-1 border border-accent rounded-full"
    >
      <span className="pb-[2px]">More</span>
      <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform transform duration-200 group-hover:translate-x-1 backface-hidden"></ChevronRightIcon>
    </Link>
  )
}