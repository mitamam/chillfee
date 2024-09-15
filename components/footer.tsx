import Link from 'next/link'
import Image from 'next/image'

import LogoIconWhite from '@/public/logo_icon_white.svg'

export default function Footer() {
  return (
    <footer className="w-full bg-accent2 text-bg">
      <div className="mx-auto w-full max-w-7xl p-8 lg:px-8">
        <Image src={LogoIconWhite} alt="" className="mx-auto w-14"></Image>
        <div className='py-8 border-b border-bg/30'>
          <ul className=" -mr-12 flex items-center justify-center gap-8">
            <li>
              <Link href="/contact" className="text-sm">
                お問い合わせ
              </Link>
            </li>
            <li>
              <Link href="/term-of-service" className="text-sm">
                利用規約
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-sm">
                プライバシーポリシー
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-xs text-center pt-8">&copy; 2024 Mitama Masuda All Rights Reserved.</p>
      </div>
    </footer>
  )
}