import UserMenu from '@/components/user-menu'
import BackButton from '@/components/back-button'
import Pagination from '@/components/pagination'
import ChangePaymentMethod from '@/components/change-payment-method'

export default function Page() {
  return (
    <div className="max-w-7xl px-5 lg:px-8 pt-24">
      <div className="flex items-start">
        {/* right menu */}
        <UserMenu className="md:w-1/4 hidden md:block"></UserMenu>
        {/* left contents */}
        <div className="w-full md:w-3/4 lg:w-2/4 md:border-l border-accent2 md:pl-8 pb-8 sm:pb-14 lg:pb-20">
          <BackButton className="mt-10 mb-6"></BackButton>
          <h2 className="mb-8 md:mt-10 text-lg font-bold">お支払い情報</h2>
          <h3 className="mb-4 text-base font-bold">お支払い方法</h3>
          {/* If payment information is not yet registered */}
          {/* <div className="w-1/2 border border-accent2 p-4 mb-8 text-center">
            <p className="text-base text-accent2 mb-2">未登録</p>
            <p className="text-xs">※店舗のサブスクリプションページから登録できます。</p>
          </div> */}
          {/* If payment information is registered */}
          <div className="w-full border border-accent2 p-4 mb-8">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm font-bold mb-4">クレジットカード</p>
                <p className="text-base mb-2">**** **** **** 1234</p>
                <p className="text-base">Hanako Yamada</p>
              </div>
              <ChangePaymentMethod></ChangePaymentMethod>
            </div>
          </div>
          <h3 className="mb-4 text-base font-bold">お支払い履歴（全店舗）</h3>
          <div className="w-full border border-accent2 p-4 mb-8">
            <ul className="divide-y mb-10">
              {Array.from({length: 7}, (_, index) => (
                <li key={index} className="flex justify-between items-center py-4 first:pt-0 last:pb-0">
                  <p className="text-base font-bold">〇〇プラン</p>
                  <p className="text-sm text-textbk/50">店名</p>
                  <span className="text-sm">2024.1.1</span>
                  <span className="text-sm font-bold">¥300</span>
                </li>
              ))}
            </ul>
            <Pagination bg="accent2"></Pagination>
          </div>
        </div>
      </div>
    </div>
  )
}
