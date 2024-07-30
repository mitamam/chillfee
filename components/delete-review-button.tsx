import {useState, Fragment} from 'react'

import {Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from '@headlessui/react'
import {StarIcon} from '@heroicons/react/24/outline'

export default function DeleteReviewButton() {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="block hover:bg-accent2 hover:text-bg text-sm py-1 px-2"
        onClick={() => setIsDeleteDialogOpen(true)}
      >
        クチコミを削除
      </button>
      <Transition show={isDeleteDialogOpen} as={Fragment}>
        <Dialog open={isDeleteDialogOpen} onClose={() => setIsDeleteDialogOpen(false)} className="relative z-10">
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
                <div className='bg-accent2/5 rounded-md text-left p-4'>
                  <div className="flex items-center">
                    <span className="mr-2 block text-xs text-textbk/40">2024/1/1</span>
                    <div className="flex items-center gap-0.5">
                      {Array.from({length: 5}, (_, index) => (
                        <StarIcon key={index} className="h-4 w-4 text-textbk/30"></StarIcon>
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-sm">
                    これは口コミの内容です。これは口コミの内容です。これは口コミの内容です。これは口コミの内容です。
                  </p>
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
