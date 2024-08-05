import {useState, Fragment} from 'react'

import {Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from '@headlessui/react'

export default function DeleteNewsButton() {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="block rounded-md text-sm underline mt-4"
        onClick={() => setIsDeleteDialogOpen(true)}
      >
        記事を削除
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
                <DialogTitle className="font-bold">記事の削除</DialogTitle>
                <p>
                  記事「」を削除しますか？
                  <br />
                  削除された記事は復元できません。
                </p>
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
