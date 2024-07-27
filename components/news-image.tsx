import {useState, Fragment} from 'react'

import Image from 'next/image'
import {XMarkIcon, ChevronDownIcon} from '@heroicons/react/24/solid'

import {Dialog, DialogPanel, Transition, TransitionChild} from '@headlessui/react'

const ImageSizes = {
  Small: ['40%', '100%'] as [string, string],
  Medium: ['256px', '75%'] as [string, string],
  Large: ['100%', '50%'] as [string, string],
}

const options = [
  {value: 'small', name: '小'},
  {value: 'medium', name: '中'},
  {value: 'large', name: '大'},
]

export default function NewsImage(props: any) {
  const smallSize = ImageSizes.Small
  const mediumSize = ImageSizes.Medium
  const largeSize = ImageSizes.Large

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState({value: 'small', name: '小'})

  const handleDeleteImage = () => {
    props.onDelete(props.index)
    setIsDeleteDialogOpen(false)
  }

  const handleOptionClick = (option: {value: string, name: string}) => {
    setSelectedOption(option)
  }
  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }

  return (
    <div style={{width: smallSize[0]}} key={props.index} className="my-4 mx-auto">
      <div className="relative">
        {/* 画像の削除ボタン */}
        <button
          type="button"
          className="z-10 absolute right-0 p-1 bg-white/50 rounded-full"
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
                  <p>画像を削除してもよろしいですか？</p>
                  <button
                    onClick={() => setIsDeleteDialogOpen(false)}
                    className="mr-6 py-2 px-6 text-base text-textbk border border-accent2 rounded-full"
                  >
                    キャンセル
                  </button>
                  <button
                    onClick={handleDeleteImage}
                    className="py-2 px-6 text-base bg-accent border border-accent text-white rounded-full"
                  >
                    削除
                  </button>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>
        {/* 画像のサイズ変更ボタン */}
        <button type="button" className="z-10 absolute left-0 p-1 bg-white/50 rounded-full" onClick={toggleDropDown}>
          <ChevronDownIcon className="h-4 w-4"></ChevronDownIcon>
        </button>
        {isDropDownOpen && (
          <div>
            {options.map((option) => (
              <div>
                <label htmlFor={`${option.value}${props.index}`}>{option.name}</label>
                <input
                  type="radio"
                  value={option.value}
                  id={`${option.value}${props.index}`}
                  name={`image${props.index}-size`}
                  onClick={() => handleOptionClick(option)}
                />
              </div>
            ))}
          </div>
        )}
        <div style={{width: '100%', paddingTop: smallSize[1]}} className="relative overflow-hidden">
          <Image src={props.src} alt={`Content ${props.index}`} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  )
}