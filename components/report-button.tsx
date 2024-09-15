import {useState, Fragment} from 'react'

import {Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from '@headlessui/react'
import UploadImageButton from './upload-image'

export default function ReportButton({title, children}) {
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setIsReportDialogOpen(true)}>
        {children}
      </button>
      <Transition show={isReportDialogOpen} as={Fragment}>
        <Dialog onClose={() => setIsReportDialogOpen(false)} className="relative z-50">
          <div className="fixed inset-0 w-screen overflow-y-auto p-4">
            <div className="flex min-h-full items-center justify-center">
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
                  <DialogTitle className="font-bold">{title}</DialogTitle>
                  <p>
                    以下に通報内容を具体的にご記入ください。
                    <br />
                    可能であれば、関連する証拠やスクリーンショットを添付してください。
                  </p>
                  <form method="post" className="text-left">
                    <label className="block text-base font-bold" htmlFor="reporting-detail">
                      内容
                    </label>
                    <textarea
                      name="reporting-detail"
                      id="reporting-detail"
                      rows={5}
                      className="mt-2 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
                    ></textarea>
                    <h4 className="mt-6 block text-base font-bold">画像</h4>
                    <UploadImageButton multiple id="report-images" width="100%" height="50%"></UploadImageButton>
                  </form>
                  <button
                    type="button"
                    onClick={() => setIsReportDialogOpen(false)}
                    className="mr-6 py-2 px-6 text-base text-textbk border border-accent2 rounded-full"
                  >
                    キャンセル
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-6 text-base bg-accent border border-accent text-white rounded-full"
                  >
                    通報
                  </button>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}