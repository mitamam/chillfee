import Link from 'next/link'

export default function CreateNewsButton() {
  return (
    <>
      <Link href="/cafes/1/news/create" className="my-6 text-sm inline-block border border-accent2 py-2 px-4 rounded-full">
        新規記事を作成
      </Link>
    </>
  )
}
