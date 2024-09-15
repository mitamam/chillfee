import Link from 'next/link'

export default function WriteReviewButton() {
  const isUserLogin = true

  return (
    <Link
      href={isUserLogin ? '/cafes/1/review/create' : '/signin'}
      className="text-sm inline-block py-1 px-3 border rounded-full border-accent2"
    >
      レビューを書く
    </Link>
  )
}
