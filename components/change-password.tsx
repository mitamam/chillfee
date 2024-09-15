import {useState, Fragment} from 'react'

import {Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from '@headlessui/react'

export default function ChangePassword() {
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
                <DialogTitle className="font-bold text-center">パスワードの変更</DialogTitle>
                <ul>
                  <li className="w-full mb-6">
                    <label className="block text-base font-bold" htmlFor="password">
                      パスワード
                    </label>
                    <input
                      className="mt-2 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="現在のパスワード（隠す）"
                    />
                  </li>
                  <li className="w-full mb-6">
                    <label className="block text-base font-bold" htmlFor="new-password">
                      新しいパスワード
                    </label>
                    <input
                      className="mt-2 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
                      type="password"
                      name="new-password"
                      id="new-password"
                    />
                  </li>
                  <li className="w-full">
                    <label className="block text-base font-bold" htmlFor="new-password-reenter">
                      新しいパスワード（再入力）
                    </label>
                    <input
                      className="mt-2 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
                      type="password"
                      name="new-password-reenter"
                      id="new-password-reenter"
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
