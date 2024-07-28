import {useState, Fragment} from 'react'

import Image from 'next/image'
import {XMarkIcon, EllipsisHorizontalIcon} from '@heroicons/react/24/solid'

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

const sizeOptions = {
  small: ImageSizes.Small,
  medium: ImageSizes.Medium,
  large: ImageSizes.Large
}

export default function NewsImage(props: any) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('small')
  const [selectedSizeOption, setSelectedSizeOption] = useState(sizeOptions.small)

  const handleDeleteImage = () => {
    props.onDelete(props.id)
    setIsDeleteDialogOpen(false)
  }

  const handleRadioChange = (event) => {
    const selected = event.target.value
    setSelectedOption(selected)
    setSelectedSizeOption(sizeOptions[selected])
    setIsDropDownOpen(false)
  }
  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }

  return (
    <div style={{width: selectedSizeOption[0]}} className="my-4 mx-auto">
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
          <EllipsisHorizontalIcon className="h-4 w-4"></EllipsisHorizontalIcon>
        </button>
        {isDropDownOpen && (
          <ul className="z-10 absolute left-1 top-7 bg-white/70 rounded-md">
            {options.map((option, index) => (
              <li key={index}>
                <label htmlFor={`${option.value}${props.id}`} className='block text-sm hover:bg-accent2 hover:text-white py-1 px-2 rounded-sm'>{option.name}</label>
                <input
                  type="radio"
                  value={option.value}
                  id={`${option.value}${props.id}`}
                  name={`image${props.id}-size`}
                  checked={selectedOption === option.value}
                  onChange={handleRadioChange}
                  className='hidden'
                />
              </li>
            ))}
          </ul>
        )}
        <div style={{width: '100%', paddingTop: selectedSizeOption[1]}} className="relative overflow-hidden">
          <Image src={props.src} alt={`Content ${props.index}`} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  )
}
