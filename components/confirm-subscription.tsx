import {useState, Fragment} from 'react'

import {Dialog, DialogPanel, Transition, TransitionChild} from '@headlessui/react'

export default function ConfirmSubscription({isFree = true, current = false}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      {current ? (
        <button type="button" disabled className="mt-8 w-full py-2 text-sm rounded-full bg-accent2/10 text-accent2">
          現在のプラン
        </button>
      ) : (
        <button
          type="button"
          className="mt-8 w-full py-2 text-sm rounded-full bg-bg text-accent2"
          onClick={() => setIsDialogOpen(true)}
        >
          このプランを選ぶ
        </button>
      )}
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
              <DialogPanel className="relative max-w-xl bg-white py-12 px-16 border border-accent2 text-center">
                <p className='text-base mb-8'>「{isFree ? 'フリープラン' : 'プレミアムプラン'}」に変更しますか？</p>
                <button
                  type="button"
                  onClick={() => setIsDialogOpen(false)}
                  className="mr-6 py-2 px-6 text-base text-textbk border border-accent2 rounded-full"
                >
                  キャンセル
                </button>
                <button
                  type="submit"
                  className="py-2 px-6 text-base bg-accent border border-accent text-white rounded-full"
                  onClick={() => alert('変更')}
                >
                  変更
                </button>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
