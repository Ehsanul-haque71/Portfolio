"use client"

import Image from 'next/image';
import React, { useState } from 'react';

import logo from '@/app/Assets/logo.png';
import { HiMenuAlt4 } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";
import SlideMenu from './SlideMenu';



const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false);

  const handleMenu = () => {
    setSideMenu(!sideMenu)
  }

  return (
    <>
      <nav className='bg-transparent absolute w-full z-[1000]'>
        <div className='flex justify-between items-center border-b-[1px] border-[#00000033] '>
          <div className='flex gap-2 pt-6 pb-6 pl-6'>
            <Image src={logo} className='w-8 h-8 gap-2' alt='logo' />
            <h2 className='text-[24px] font-bold'>Roudra</h2>
          </div>
          <div className='flex gap-[20px] items-center'>
            <button className='flex gap-2 font-bold'>
              Let’s Talk <span > <MdArrowOutward className='w-6 h-6 ' /> </span>
            </button>
            <button className='w-[100px] h-[80px] bg-black flex items-center justify-center text-white cursor-pointer' onClick={handleMenu}><HiMenuAlt4 />
            </button>
          </div>
        </div>
      </nav>

      {sideMenu && <SlideMenu onMenuToggle={handleMenu} />}
    </>

  )
}

export default Navbar
