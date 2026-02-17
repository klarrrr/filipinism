import React from 'react'
import Image from 'next/image';
import NavLink from '../component/nav_link.js'

const mobile_navbar = ({open, setOpen}) => {
  return (
    <div className={`
        flex
        md:hidden
        flex-wrap
        md:flex-nowrap
        items-center
        justify-center
        md:justify-evenly 
        h-full

        fixed
        top-0 right-0
        transition-transform duration-300 ease-in-out
        translate-x-0 
        p-4 
       
        drop-shadow-lg 
        font-medium
        z-20

        backdrop-blur-3xl
        bg-(--frosted-deep-blue)
        ${open ? 'translate-x-0' : 'translate-x-full'}
    `}>
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
        <NavLink location={'/'} title={'Dashboard'} onClick={() => setOpen(!open)}/>
        <NavLink location={'/lessons'} title={'Lessons'} onClick={() => setOpen(!open)}/>
        <NavLink location={'/activities'} title={'Activities'} onClick={() => setOpen(!open)}/>
        <NavLink location={'/about'} title={'About'} onClick={() => setOpen(!open)}/>
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

export default mobile_navbar
