import {useState, ChangeEvent} from 'react'

import NewsImage from '@/components/news-image'

interface Element {
  type: string
  content: any
}

export default function AddTextImage() {
  const [elements, setElements] = useState<Element[]>([])

  const addTextarea = () => {
    setElements([...elements, {type: 'textarea', content: ''}])
  }

  const addImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files == null) return
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setElements([...elements, {type: 'image', content: reader.result}])
      }
      reader.readAsDataURL(file)
    }
  }

  const handleTextareaChange = (index: number, event: ChangeEvent<HTMLTextAreaElement>) => {
    const newElements = [...elements]
    newElements[index].content = event.target.value
    setElements(newElements)
  }

  const handleDeleteImage = (index: number) => {
    const newElements = elements.filter((_, i) => i !== index)
    setElements(newElements)
  }

  return (
    <>
      {elements.map((element, index) => {
        if (element.type == 'textarea') {
          return (
            <textarea
              key={index}
              value={element.content}
              onChange={(e) => handleTextareaChange(index, e)}
              className="mt-3 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
              name="content"
              id="content"
              rows={5}
            />
          )
        } else if (element.type == 'image') {
          return <NewsImage key={index} src={element.content} index={index} onDelete={handleDeleteImage} />
        }
        return null
      })}
      <div className="mt-4 flex items-center justify-center gap-8">
        {/* Add text button  */}
        <button
          type="button"
          className="py-2 px-6 bg-bg text-sm font-bold text-textbk border border-accent2 rounded-full"
          onClick={addTextarea}
        >
          テキストを追加
        </button>
        {/* Add image button */}
        <label
          htmlFor="add-image"
          className="py-2 px-6 bg-bg cursor-pointer text-sm font-bold text-textbk border border-accent2 rounded-full"
        >
          画像を追加
        </label>
        <input id="add-image" type="file" accept="image/*" className="hidden" onChange={addImage}></input>
      </div>
    </>
  )
}
