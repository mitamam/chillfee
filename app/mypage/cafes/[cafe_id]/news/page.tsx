import UserMenu from '@/components/user-menu'
import MypageTop from '@/components/mypage-top'


export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-24">
      <div className="flex items-start">
        {/* right menu */}
        <UserMenu className="md:w-1/4 hidden md:block"></UserMenu>
        {/* left contents */}
        <div className="w-full md:w-3/4 md:border-l border-accent2 md:pl-8 pb-8 sm:pb-14 lg:pb-20">
          <MypageTop index={3}></MypageTop>
        </div>
      </div>
    </div>
  )
}