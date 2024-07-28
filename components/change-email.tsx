import {useState, Fragment} from 'react'

import {Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from '@headlessui/react'

export default function ChangeEmail() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <button type="button" className="block ml-auto underline text-sm mt-1" onClick={() => setIsDialogOpen(true)}>
        変更
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
              <DialogPanel className="w-full max-w-lg space-y-12 bg-white py-12 px-16 border border-accent">
                <DialogTitle className="font-bold text-center">メールアドレスの変更</DialogTitle>
                <ul>
                  <li className="w-full mb-6">
                    <label className="block text-base font-bold" htmlFor="email">
                      メールアドレス
                    </label>
                    <input
                      className="mt-2 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="現在のメールアドレス"
                    />
                  </li>
                  <li className="w-full">
                    <label className="block text-base font-bold" htmlFor="new-email">
                      新しいメールアドレス
                    </label>
                    <input
                      className="mt-2 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
                      type="email"
                      name="new-email"
                      id="new-email"
                    />
                  </li>
                </ul>
                <div className='flex justify-center items-center'>
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
                  >
                    変更
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
