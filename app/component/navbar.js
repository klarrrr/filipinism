import NavLink from '../component/nav_link.js'
import React from 'react'
import Image from 'next/image';

const navbar = () => {
  return (
    <div className='
      hidden
      md:flex
      flex-wrap
      md:flex-nowrap
      items-center
      justify-center
      md:justify-evenly 
      w-full
      
      sticky
      top-0 
      p-4 
      bg-(--deep-blue) 
      font-medium
      shadow-md
      z-10
    '>
      
      <div className='flex items-center space-x-2'>
        <Image src="/puzzle.svg" height={32} width={32} alt='logo' />
        <h2 className='font-bold text-xl'>FILIPINISM</h2>
      </div>

      <div className='
        flex 
        flex-wrap 
        w-full 
        md:w-fit 
        lg:flex-nowrap 
        justify-center
        items-center 
        lg:justify-evenly
      '>
        <NavLink location={'/'} title={'Dashboard'}/>
        <NavLink location={'/lessons'} title={'Lessons'}/>
        <NavLink location={'/activities'} title={'Activities'}/>
        <NavLink location={'/about'} title={'About'}/>
      </div>
      <div className='bg-(--bright-blue) p-2 pl-4 pr-4 rounded-md'>
        {/* TODO - make this dynamic later */}
        <p>
          Progress: 3/6 ✨
        </p>
      </div>
    </div>
  )
}

export default navbar
