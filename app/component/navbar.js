"use client";

import NavLink from '../component/nav_link.js'
import React from 'react'
import Image from 'next/image';

import {motion} from "framer-motion";
import useNavbarScroll from '../hooks/useNavbarScroll.js';

const navbar = () => {
  const { hidden, solid } = useNavbarScroll();

  return (
    // bg-(--deep-blue)
    // shadow-md
    <motion.nav
      animate={{
        y: hidden ? "-100%" : "0%",
        backgroundColor: solid
          ? "rgba(30, 58, 138, 1)"
          : "rgba(0,0,0,0)",
        backdropFilter: solid ? "blur(12px)" : "blur(0px)",
      }}
      transition={{duration: 0.35, ease: "easeOut"}}
      className={`
      
        ${solid ? 'sticky' : 'fixed'} top-0 left-0 right-0 z-50 px-8 py-4

        hidden
        md:flex
        flex-wrap
        md:flex-nowrap
        items-center
        justify-center
        md:justify-evenly 
        w-full
        
      
        p-4
        pt-12 
        font-medium
        
      `}
    >
  

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
        {/* bg-(--bright-blue) */}
        <div className='border border-white p-2 pl-4 pr-4 rounded-md'>
          {/* TODO - make this dynamic later */}
          <p>
            Progress: 3/6 ✨
          </p>
        </div>

  
   
    </motion.nav>
    
  )
}

export default navbar
