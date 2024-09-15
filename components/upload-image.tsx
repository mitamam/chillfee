import {useState, ChangeEvent} from 'react'
import Image from 'next/image'

import {DocumentArrowUpIcon, XMarkIcon} from '@heroicons/react/24/solid'

interface Img {
  file: File
  url: string
}

export default function UploadImageButton({width = '96px', height = '96px', multiple = false, id = ''}) {
  const [images, setImages] = useState<Img[]>([])

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []).map((file: File) => ({
      file,
      url: URL.createObjectURL(file),
    }))
    if (multiple) {
      setImages((prevImages) => [...prevImages, ...files])
    } else if (files.length > 0) {
      setImages(files)
    } else {
      setImages((prevImages) => [...prevImages])
    }
  }

  const handleDeleteImage = (url: string) => {
    setImages((prevImages) => prevImages.filter((image) => image.url !== url))
  }

  return (
    <>
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <div style={{width: width}} key={index} className="m-2 ml-0 last:mr-0">
            <div className="relative">
              <button
                type="button"
                className="z-10 absolute right-0 p-1 bg-white/50 rounded-full"
                onClick={() => handleDeleteImage(image.url)}
              >
                <XMarkIcon className="h-4 w-4"></XMarkIcon>
              </button>
            <div style={{ width: '100%', paddingTop: height}} className='relative overflow-hidden'>
              <Image src={image.url} alt={`Preview ${index}`} layout="fill" objectFit="cover"/>
            </div>
            <p className="break-words text-sm">{image.file.name}</p>
            </div>
          </div>
        ))}
      </div>
      <label
        htmlFor={id}
        className="inline-block mt-3 py-2 px-6 cursor-pointer border border-accent2 rounded-full"
      >
        <div className="flex items-center gap-2">
          <DocumentArrowUpIcon className="w-4 h-4"></DocumentArrowUpIcon>
          <span className="text-sm font-bold">画像をアップロード</span>
        </div>
      </label>
      <input
        className="hidden"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        multiple={multiple}
        id={id}
      />
    </>
  )
}