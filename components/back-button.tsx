import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function BackButton({href = '', className = ''}) {
  return (
    <Link href={href} className={`inline-block ${className}`}>
      <ChevronLeftIcon className='h-5 w-5'></ChevronLeftIcon>
    </Link>
  )
}