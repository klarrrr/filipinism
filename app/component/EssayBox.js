import React from 'react'

const EssayBox = ({content, num}) => {
  return (
    <div className='bg-linear-50  from-(--deep-blue)  to-(--bright-blue) p-8 pr-12 pl-12 rounded-2xl flex justify-center items-center shadow-lg'>
        <p>{content}</p>
        <p className='font-semibold text-8xl absolute opacity-15'>{num}</p>
    </div>
  )
}

export default EssayBox
