import {useState, Fragment} from 'react'

import {Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from '@headlessui/react'

export default function StopSubscriptionButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isConfirmationDialog, setIsConfirmationDialog] = useState(true)
  const [isCompletionDialog, setIsCompletionDialog] = useState(false)

  function handleStopClick() {
    setIsCompletionDialog(true)
    setIsConfirmationDialog(false)
  }

  return (
    <>
      <button type="button" className="text-xs" onClick={() => setIsDialogOpen(true)}>
        サブスクリプションを停止
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
              <DialogPanel className="relative text-center space-y-8 w-full max-w-xl bg-white py-12 px-16 border border-accent2">
                {isConfirmationDialog && (
                  <>
                    <DialogTitle className="font-bold">サブスクリプションの停止</DialogTitle>
                    <p>
                      プレミアムプランのサブスクリプションを
                      <br />
                      停止しようとしています。
                      <br />
                      <br />
                      この操作により、自動更新は停止され次回からお支払いは行われませんが、前回のお支払いから一ヶ月間はプレミアムプランの機能を引き続きご利用いただけます。
                      <br />
                      <br />
                      本当にサブスクリプションを停止しますか？
                    </p>
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
                      onClick={handleStopClick}
                    >
                      停止
                    </button>
                  </>
                )}
                {isCompletionDialog && (
                  <>
                    <p>
                      サブスクリプションの停止が完了しました。
                      <br />
                      <br />
                      プレミアムプランの機能は〇〇日まで引き続きご利用いただけます。
                    </p>
                    <button
                      type="submit"
                      className="py-2 px-6 text-base bg-accent border border-accent text-white rounded-full"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      マイページに戻る
                    </button>
                  </>
                )}
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
