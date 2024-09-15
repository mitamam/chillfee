'use client'

import {useState, Fragment} from 'react'
import {Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from '@headlessui/react'
import {StarIcon} from '@heroicons/react/24/outline'

import Header from '@/components/header'
import Footer from '@/components/footer'
import StarRating from '@/components/star-rating'

export default function Page() {
  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false)
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)

  return (
    <>
      <Header />
      <main className="bg-bg">
        <div className="mx-auto max-w-sm md:max-w-lg px-5 lg:px-8 pt-24 pb-8 sm:pb-14 lg:pb-20">
          <h1 className="mt-14 text-xl font-bold">クチコミを編集</h1>
          <form method="post" className="py-10">
            <h2 className="mb-4 block text-base font-bold">評価</h2>
            <StarRating />
            <label className="mt-8 block text-base font-bold" htmlFor="content">
              内容
            </label>
            <textarea
              name="content"
              id="content"
              rows={4}
              className="mt-4 py-2 px-4 block w-full text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
              placeholder="居心地のよい空間で、集中して勉強ができました。"
            />
            <div className="mt-12 flex items-center justify-center gap-6">
              {/* キャンセルボタン */}
              <button
                type="button"
                onClick={() => setIsCancelDialogOpen(true)}
                className="py-3 px-8 bg-bg text-base text-textbk border border-accent2 rounded-full"
              >
                キャンセル
              </button>
              <Transition show={isCancelDialogOpen} as={Fragment}>
                <Dialog onClose={() => setIsCancelDialogOpen(false)} className="relative z-50">
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
                        <p>
                          キャンセルすると、編集内容は保存されません。
                          <br />
                          よろしいですか？
                        </p>
                        <button
                          type="button"
                          onClick={() => setIsCancelDialogOpen(false)}
                          className="mr-6 py-2 px-6 text-base text-textbk border border-accent2 rounded-full"
                        >
                          いいえ
                        </button>
                        {/* Todo：前ページに戻る */}
                        <button className="py-2 px-6 text-base bg-accent border border-accent text-white rounded-full">
                          はい
                        </button>
                      </DialogPanel>
                    </TransitionChild>
                  </div>
                </Dialog>
              </Transition>
              {/* 確認ボタン */}
              <button
                type="button"
                onClick={() => setIsConfirmDialogOpen(true)}
                className="py-3 px-8 bg-accent text-base text-white rounded-full"
              >
                内容を確認
              </button>
              <Transition show={isConfirmDialogOpen} as={Fragment}>
                <Dialog onClose={() => setIsConfirmDialogOpen(false)} className="relative z-50">
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
                        <DialogTitle className="font-bold">内容の確認</DialogTitle>
                        <p>
                          以下の内容でよろしいですか？
                          <br />
                          よろしければ、投稿ボタンを押してください。
                        </p>
                        <ul className="text-left">
                          <div>
                            <h4 className="text-base font-bold mb-1">評価</h4>
                            <div className="flex items-center gap-0.5 mb-4">
                              {Array.from({length: 5}, (_, index) => (
                                <StarIcon key={index} className="h-5 w-5 text-textbk/30"></StarIcon>
                              ))}
                              <span className="text-sm ml-1 font-bold">3.5</span>
                            </div>
                            <h4 className="text-base font-bold mb-1">内容</h4>
                            <p className="text-base">クチコミの内容</p>
                          </div>
                        </ul>
                        <button
                          type="button"
                          onClick={() => setIsConfirmDialogOpen(false)}
                          className="mr-6 py-2 px-6 text-base text-textbk border border-accent2 rounded-full"
                        >
                          いいえ
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
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
