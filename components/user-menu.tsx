import Image from 'next/image'

import UserImage from '@/public/user_icon.jpg'
import {
  ChatBubbleOvalLeftEllipsisIcon,
  BuildingStorefrontIcon,
  UserIcon,
  CreditCardIcon,
  ArrowLeftStartOnRectangleIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'
import UserMenuItem from '@/components/user-menu-item'

export default function UserMenu({className = ''}) {
  return (
    <div className={`md:pr-5 pb-14 ${className}`}>
      <div className="flex items-center gap-4 pb-6 border-b border-accent2 mt-10">
        <div className="relative overflow-hidden w-16 pt-16 rounded-full">
          <Image src={UserImage} alt="" layout="fill" objectFit="cover" />
        </div>
        <div>
          <p className="text-nowrap text-base font-bold mb-2">ユーザー名</p>
          <span className="text-nowrap text-xs font-bold text-accent2/50 px-3 py-1 border border-accent2/30 rounded-xl">
            ビジネス
          </span>
        </div>
      </div>
      <nav className="mt-4">
        <ul>
          <UserMenuItem href="/mypage/account" name="アカウント">
            <UserIcon className="h-6 w-6 text-accent2 text-nowrap"></UserIcon>
          </UserMenuItem>
          {/* personal account */}
          <UserMenuItem href="/mypage/bookmarks" name="お気に入り">
            <HeartIcon className="h-6 w-6 text-accent2"></HeartIcon>
          </UserMenuItem>
          <UserMenuItem href="/mypage/review" name="投稿したクチコミ">
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-accent2"></ChatBubbleOvalLeftEllipsisIcon>
          </UserMenuItem>
          {/* / personal account */}
          {/* business account */}
          <UserMenuItem href="/mypage/cafes" name="店舗">
            <BuildingStorefrontIcon className="h-6 w-6 text-accent2"></BuildingStorefrontIcon>
          </UserMenuItem>
          <UserMenuItem href="/mypage/payment" name="お支払い情報">
            <CreditCardIcon className="h-6 w-6 text-accent2"></CreditCardIcon>
          </UserMenuItem>
          {/* / business account */}
          <UserMenuItem href="/signout" name="ログアウト">
            <ArrowLeftStartOnRectangleIcon className="h-6 w-6 text-accent2"></ArrowLeftStartOnRectangleIcon>
          </UserMenuItem>
        </ul>
      </nav>
    </div>
  )
}