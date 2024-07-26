import {useState} from 'react'

import {BookmarkIcon} from '@heroicons/react/24/outline'

export default function FavoriteButton({className = ''}) {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleClick = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <>
      <button type="button" className={`z-10 w-5 h-5 ${className}`} onClick={handleClick}>
        <BookmarkIcon
          className={`transition ease-in-out duration-100 ${isFavorite ? 'fill-accent' : 'fill-transparent'} ${
            isFavorite ? 'text-accent' : 'text-accent2'
          }`}
        ></BookmarkIcon>
      </button>
    </>
  )
}