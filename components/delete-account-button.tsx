import {useState, Fragment} from 'react'
import {Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from '@headlessui/react'

export default function DeleteAccountButton() {
  const [isOpen, setIsOpen] = useState(false)

  const deleteAccount = () => {
    alert('delete account!')
    setIsOpen(false)
  }

  return (
    <>
      <button type='button' onClick={() => setIsOpen(true)} className="text-sm underline text-accent2">
        アカウントを削除
      </button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
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
              <DialogPanel className="max-w-lg space-y-8 bg-white p-12 border text-center border-accent">
                <DialogTitle className="text-lg font-bold">アカウントを削除しますか？</DialogTitle>
                <p>削除すると、以下の内容が全て失われます。</p>
                <ul className="text-left bg-accent2/5 p-4 rounded-md">
                  <li className="font-base">・ユーザー情報</li>
                  {/* personal user */}
                  <li className="font-base">・お気に入り</li>
                  <li className="font-base">・投稿したクチコミ</li>
                  {/* / personal user */}
                  {/* business user */}
                  <li className="font-base">・サブスクリプション</li>
                  <li className="font-base">・お支払い情報</li>
                  <li className="font-base">・下書き保存中のお知らせ</li>
                  <li className="font-base">・非公開設定の店舗情報</li>
                  {/* / business user */}
                </ul>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mr-6 py-2 px-6 text-base text-textbk border border-accent2 rounded-full"
                >
                  キャンセル
                </button>
                <button
                  onClick={deleteAccount}
                  className="py-2 px-6 text-base bg-accent border border-accent text-white rounded-full"
                >
                  削除
                </button>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
