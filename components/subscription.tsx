import ChangePlanButton from '@/components/change-plan-button'
import StopSubscriptionButton from '@/components/stop-subscription-button'
import Pagination from '@/components/pagination'

export default function Subscription() {
  return (
    <div className="flex flex-col md:flex-row gap-12 mt-8">
      <div className="flex-1 max-w-md">
        <h2 className="text-base font-bold mb-4">現在のプラン</h2>
        <div className="bg-accent2/5 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold">プレミアムプラン</p>
            <div className="flex items-center">
              <p className="text-lg font-bold">¥300</p>
              <span className="text-xs text-accent2/70">/month</span>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-4">
            <StopSubscriptionButton></StopSubscriptionButton>
            <ChangePlanButton></ChangePlanButton>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-base font-bold mb-4">お支払い履歴</h2>
        <div className='border border-accent2 p-4'>
          <ul className="divide-y mb-10">
            {Array.from({length: 7}, (_, index) => (
              <li key={index} className="flex justify-between items-center py-4 first:pt-0 last:pb-0">
                <p className="text-base font-bold">〇〇プラン</p>
                <span className="text-sm">2024.1.1</span>
                <span className="text-sm font-bold">¥300</span>
              </li>
            ))}
          </ul>
          <Pagination bg="accent2"></Pagination>
        </div>
      </div>
    </div>
  )
}
