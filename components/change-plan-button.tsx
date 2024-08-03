import {useState, Fragment} from 'react'

import {Dialog, DialogPanel, Transition, TransitionChild} from '@headlessui/react'

import {XMarkIcon} from '@heroicons/react/24/outline'
import ConfirmSubscription from './confirm-subscription'

export default function ChangePlanButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="text-sm py-1 px-2 bg-accent2 rounded-full text-white"
        onClick={() => setIsDialogOpen(true)}
      >
        プランを変更
      </button>
      <Transition show={isDialogOpen} as={Fragment}>
        <Dialog onClose={() => setIsDialogOpen(false)} className="relative z-50">
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="transition-opacity ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <DialogPanel className="relative w-full max-w-xl bg-white py-12 px-16 border border-accent2">
                <button type="button" onClick={() => setIsDialogOpen(false)}>
                  <XMarkIcon className="absolute top-4 right-4 w-6 h-6"></XMarkIcon>
                </button>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                  {/* free plan */}
                  <div className="flex-1 flex flex-col border border-accent2 rounded-md p-4">
                    <div className="text-center border-b pb-2 border-accent2/30">
                      <h2 className="text-base font-bold">フリープラン</h2>
                      <div className="flex items-center justify-center">
                        <p className="text-base font-bold mr-1">Free</p>
                        <span className="text-xs text-accent2/70">/month</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-4 flex-grow">
                      <li className="flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
                          {`Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.`}
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                        <p className="text-sm">店舗の登録</p>
                      </li>
                      <li className="flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
                          {`Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.`}
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                        <p className="text-sm">店舗情報の編集</p>
                      </li>
                      <li className="flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
                          {`Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.`}
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                        <p className="text-sm">店舗別のクチコミ閲覧</p>
                      </li>
                    </ul>
                    <ConfirmSubscription isFree={true} current={true}></ConfirmSubscription>
                  </div>
                  {/* / free plan */}
                  {/* premium plan */}
                  <div className="flex-1 flex flex-col border bg-accent2 text-bg rounded-md p-4">
                    <div className="text-center border-b pb-2 border-bg">
                      <h2 className="text-base font-bold">プレミアムプラン</h2>
                      <div className="flex items-center justify-center">
                        <p className="text-base font-bold mr-1">¥300</p>
                        <span className="text-xs">/month</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-4 flex-grow">
                      <li className="flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-bg">
                          {`Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.`}
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                        <p className="text-sm">
                          店舗の登録などを含めた<b>全ての機能</b>
                        </p>
                      </li>
                      <li className="flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-bg">
                          {`Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.`}
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                        <p className="text-sm">店舗別の画像付き記事の投稿</p>
                      </li>
                      <li className="flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-bg">
                          {`Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.`}
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                        <p className="text-sm">クチコミへの返信</p>
                      </li>
                    </ul>
                    <ConfirmSubscription isFree={false}></ConfirmSubscription>
                  </div>
                  {/* / premium plan */}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
