'use client'

import {useState, Fragment} from 'react'

import {Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from '@headlessui/react'
import {EllipsisVerticalIcon} from '@heroicons/react/24/outline'

export default function BusinessReviewMenu() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }

  const handleEditDialogOpen = () => {
    setIsDropDownOpen(false)
    setIsEditDialogOpen(true)
  }

  const handleDeleteDialogOpen = () => {
    setIsDropDownOpen(false)
    setIsDeleteDialogOpen(true)
  }

  return (
    <>
      <button type="button" className="absolute top-4 right-4" onClick={toggleDropDown}>
        <EllipsisVerticalIcon className="h-4 w-4"></EllipsisVerticalIcon>
      </button>
      {isDropDownOpen && (
        <ul className="z-10 absolute right-1 top-8 border bg-bg border-accent2 rounded-md">
          <li>
            <button
              type="button"
              className="block hover:bg-accent2 hover:text-bg text-sm py-1 px-2"
              onClick={handleEditDialogOpen}
            >
              編集
            </button>
            <button
              type="button"
              className="block hover:bg-accent2 hover:text-bg text-sm py-1 px-2"
              onClick={handleDeleteDialogOpen}
            >
              削除
            </button>
          </li>
        </ul>
      )}
      {isEditDialogOpen && (
        <Transition show={isEditDialogOpen} as={Fragment}>
          <Dialog open={isEditDialogOpen} onClose={() => setIsEditDialogOpen(false)} className="relative z-50">
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
                <DialogPanel className="max-w-lg space-y-8 bg-white p-12 border border-accent">
                  <DialogTitle className="font-bold text-center">返信内容の編集</DialogTitle>
                  <form action="post">
                    <label className="mt-8 block text-base font-bold" htmlFor="content">
                      内容
                    </label>
                    <textarea
                      name="content"
                      id="content"
                      rows={4}
                      className="mt-4 py-2 px-4 block w-full text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
                      placeholder=""
                    />
                  </form>
                  <button
                    type="button"
                    onClick={() => setIsEditDialogOpen(false)}
                    className="mr-6 py-2 px-6 text-base text-textbk border border-accent2 rounded-full"
                  >
                    キャンセル
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-6 text-base bg-accent border border-accent text-white rounded-full"
                  >
                    投稿
                  </button>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>
      )}
      {isDeleteDialogOpen && (
        <Transition show={isDeleteDialogOpen} as={Fragment}>
          <Dialog open={isDeleteDialogOpen} onClose={() => setIsDeleteDialogOpen(false)} className="relative z-50">
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
                <DialogPanel className="max-w-lg space-y-8 bg-white p-12 border border-accent text-center">
                  <DialogTitle className="font-bold">返信内容の削除</DialogTitle>
                  <p>
                    返信内容を削除します。
                    <br />
                    よろしいですか？
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
      )}
    </>
  )
}
