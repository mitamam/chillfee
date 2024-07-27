import {useState, Fragment, ChangeEvent} from 'react'

import {XMarkIcon} from '@heroicons/react/24/solid'
import {Dialog, DialogPanel, Transition, TransitionChild} from '@headlessui/react'

export default function NewsText(props: any) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [postContent, setPostContent] = useState(props.content)

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange(props.key)
    setPostContent(e.target.value)
  }

  const handleDeleteText = () => {
    props.onDelete(props.key)
    setIsDeleteDialogOpen(false)
  }

  return (
    <div key={props.key} className="flex items-start">
      <textarea
        value={postContent}
        onChange={handleTextareaChange}
        className="mt-3 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
        name="content"
        id="content"
        rows={5}
      />
      {/* 画像の削除ボタン */}
      <button
        type="button"
        className="z-10 ml-1 p-1 bg-white/50 rounded-full"
        onClick={() => setIsDeleteDialogOpen(true)}
      >
        <XMarkIcon className="h-4 w-4"></XMarkIcon>
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
              <DialogPanel className="max-w-lg space-y-8 bg-white p-12 text-center border border-accent">
                <p>テキストを削除してもよろしいですか？</p>
                <button
                  onClick={() => setIsDeleteDialogOpen(false)}
                  className="mr-6 py-2 px-6 text-base text-textbk border border-accent2 rounded-full"
                >
                  キャンセル
                </button>
                <button
                  onClick={handleDeleteText}
                  className="py-2 px-6 text-base bg-accent border border-accent text-white rounded-full"
                >
                  削除
                </button>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
