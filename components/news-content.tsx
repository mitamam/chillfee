import Image from 'next/image'

export default function NewsContent({element}) {
  if (element.type === 'text') {
    return (
      <p key={element.id} className="mt-10 text-base">
        {element.content}
      </p>
    )
  } else if (element.type === 'image') {
    if (element.size === 'small') {
      return (
        <div key={element.id} className="mt-4 md:mt-6 mx-auto relative w-1/3 pt-[33.333%] overflow-hidden">
          <Image src={element.content} alt="" layout="fill" objectFit="cover"></Image>
        </div>
      )
    } else if (element.size === 'medium') {
      return (
        <div key={element.id} className="mt-4 md:mt-6 mx-auto relative w-1/2 pt-[40%] overflow-hidden">
          <Image src={element.content} alt="" layout="fill" objectFit="cover"></Image>
        </div>
      )
    } else if (element.size === 'large') {
      return (
        <div key={element.id} className="mt-4 md:mt-6 mx-auto relative w-full pt-[50%] overflow-hidden">
          <Image src={element.content} alt="" layout="fill" objectFit="cover"></Image>
        </div>
      )
    }
  }
}
