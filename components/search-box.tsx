
import { FormEvent } from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'

export default function SearchBox({className = ''}) {
  async function cafeSearch(event: FormEvent<HTMLFormElement>) {
    alert('submit!')
  }

  return (
    <form onSubmit={cafeSearch} className="mx-auto max-w-md flex-1">
      <label htmlFor="top-search" className="text-sm font-medium text-textbk sr-only">
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="top-search"
          placeholder="検索"
          className={`bg-transparent border-accent2 block w-full p-4 text-sm text-accent2 focus:outline-none placeholder:text-accent2 ${className}`}
        />
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center px-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-accent2/80" aria-hidden="true" />
        </button>
      </div>
    </form>
  )
}