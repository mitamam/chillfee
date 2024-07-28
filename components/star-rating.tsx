import {useState} from 'react'

interface StarRatingProps {
  count?: number
  onRating?: (rating: number) => void
}

import {StarIcon} from '@heroicons/react/24/solid'

const StarRating = ({count = 5, onRating}: StarRatingProps) => {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const handleClick = (index: number) => {
    setRating(index)
    if (onRating) {
      onRating(index)
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoverRating(index)
  }

  const handleMouseLeave = () => {
    setHoverRating(0)
  }

  return (
    <div className="flex items-center">
      {Array.from({length: count}, (_, index) => index + 1).map((star) => (
        <StarIcon
          key={star}
          className={`h-6 w-6 cursor-pointer ${(hoverRating || rating) >= star ? 'text-accent/80' : 'text-main/50'}`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
        ></StarIcon>
      ))}
      <span className="block ml-2 text-base font-bold text-accent">{hoverRating || rating}</span>
    </div>
  )
}

export default StarRating
