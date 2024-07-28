import {useState, Fragment} from 'react'

import {Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from '@headlessui/react'
import {TrashIcon, StarIcon} from '@heroicons/react/24/outline'

export default function DeleteReviewButton() {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setIsDeleteDialogOpen(true)}>
        <TrashIcon className="h-4 w-4 text-textbk/30" />
      </button>
      <Transition show={isDeleteDialogOpen} as={Fragment}>
        <Dialog onClose={() => setIsDeleteDialogOpen(false)} className="relative z-50">
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
              <DialogPanel className="max-w-lg space-y-8 bg-white text-center p-12 border border-accent">
                <DialogTitle className="font-bold">クチコミの削除</DialogTitle>
                <p>
                  次のクチコミを削除しますか？
                  <br />
                  削除されたクチコミは復元できません。
                </p>
                <div>
                  <h4 className="text-base font-bold mb-1">評価</h4>
                  <div className="flex items-center gap-0.5 mb-4">
                    {Array.from({length: 5}, (_, index) => (
                      <StarIcon className="h-5 w-5 text-textbk/30"></StarIcon>
                    ))}
                    <span className="text-sm ml-1 font-bold">3.5</span>
                  </div>
                  <h4 className="text-base font-bold mb-1">内容</h4>
                  <p className="text-base">クチコミの内容</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDeleteDialogOpen(false)}
                  className="mr-6 py-2 px-6 text-base text-textbk border border-accent2 rounded-full"
                >
                  キャンセル
                </button>
                <button
                  type="submit"
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
