import {useState, ChangeEvent} from 'react'
import {v4 as uuidv4} from 'uuid'

import NewsText from '@/components/news-text'
import NewsImage from '@/components/news-image'

interface Element {
  id: string
  type: string
  content: any
}

export default function AddTextImage() {
  const [elements, setElements] = useState<Element[]>([])
  const [textContent, setTextContent] = useState('')

  const addTextarea = () => {
    setElements([...elements, {id: uuidv4(), type: 'textarea', content: ''}])
  }

  const addImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files == null) return
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setElements([...elements, {id: uuidv4(), type: 'image', content: reader.result}])
      }
      reader.readAsDataURL(file)
    }
  }

  const handleTextareaChange = (id: string) => {
    const newElements = elements.map((element) =>
      element.id === id ? {...element, content: textContent} : element
    )
    setElements(newElements)
  }

  const handleDeleteElement = (id: string) => {
    const newElements = elements.filter((element) => element.id !== id)
    setElements(newElements)
  }

  return (
    <>
      {elements.map((element) => {
        if (element.type == 'textarea') {
          return (
            <NewsText
              key={element.id}
              id={element.id}
              content={element.content}
              setContent={setTextContent}
              onChange={handleTextareaChange}
              onDelete={handleDeleteElement}
            />
          )
        } else if (element.type == 'image') {
          return <NewsImage key={element.id} id={element.id} src={element.content} onDelete={handleDeleteElement} />
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
