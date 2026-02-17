import React from 'react'
import Image from 'next/image'

const lesson_card = ({iconLoc, iconAlt, title, desc, tags, count, loc}) => {
  return (
    <a className='
      bg-linear-135 
      from-(--bright-blue) 
      to-(--deep-blue) 
      
      rounded-3xl
      flex
      flex-col
      md:flex-row
      justify-around
      gap-8
      transform
      transition
      ease-in-out
      hover:-translate-y-1.5
      duration-300
      hover:shadow-2xl
      hover:cursor-pointer
      overflow-hidden 

      border
      border-(--deep-blue)

      shadow-md
      
    ' href={loc}>
      <div className='flex bg-white p-4 md:p-8 lg:p-2 z-0 justify-center md:flex-2/6 lg:flex-4/12'>
        <h1 className='text-4xl md:text-6xl lg:text-9xl self-center opacity-30 z-0 text-black w-20 text-center'>
          {count}
        </h1>
      </div>
      <div className='
        flex
        md:flex-4/6
        lg:flex-8/12
        flex-wrap
        gap-4
        md:gap-8
        text-center
        items-center
        justify-center
        md:justify-normal
        md:text-left
        pt-0
        pl-4
        pr-4
        pb-8
        md:p-4
        lg:p-8
      '>
        <div className='flex flex-col sm:flex-row md:flex-col items-center lg:items-start gap-8 lg:w-full'>
          <Image src={iconLoc} width={48} height={48} alt={iconAlt} />
          <h2 className='text-xl md:text-2xl font-bold text-center md:text-left'>{title}</h2>
        </div>
        <p className='sm:text-sm md:text-md font-light'>{desc}</p>
        <div className='flex gap-4 flex-wrap'>
        {
            tags.map((tag, index) => (
              <p key={index} className='text-xs md:text-sm'>{tag}</p>
            ))
          }
        </div>
      </div>
    </a>
  )
}

export default lesson_card
