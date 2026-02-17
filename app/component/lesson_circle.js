import React from 'react'

const lesson_circle = ({isComplete, number, title, location}) => {
    // if lesson is complete, then add check
    return (
        <a className={`
            hover:cursor-pointer
            transition
            ease-in-out
            duration-300
            hover:scale-105
            flex
            flex-wrap
            w-full
            h-36
            md:w-42
            justify-center
            space-y-4
            m-0
            mb-4
        `} href={`${location}`}>
            {/* Circle */}
            <div className={`
                bg-(--sky-blue) 
                w-20 
                h-20 
                rounded-full 
                flex 
                items-center 
                text-center 
                justify-center
                relative
                shadow-md
                ml-8
                mr-8
                
                ${isComplete ? 
                    'after:content-["✓"] after:top-0 after:right-0 after:absolute after:z-2 after:bg-(--success-green) after:text-md after:w-8 after:h-8 after:font-bold after:rounded-full after:transform after:translate-x-2 after:-translate-y-2 after:border-4 after:border-white' 
                    : 
                    ''}
            `}>
                <h2 className='text-4xl text-white font-medium'>{number}</h2>
            </div>
            <p className='text-md font-bold text-(--dark-text) line-clamp-2 w-32 text-center'>
                    {title}
            </p>
        </a>
    )
}

export default lesson_circle
