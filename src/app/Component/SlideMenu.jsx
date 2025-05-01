import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import offcanvas_logo from '@/app/Assets/offcanvas-logo.png'


const SlideMenu = ({onMenuToggle}) => {


    return (
        <div className='pl-8 h-screen bg-black w-[458px] fixed top-0 right-0 z-[1001]'>
            <div className='flex justify-between gap-2 items-center border-b border-b-white/50'>
                <span>
                    <Image src={offcanvas_logo} alt="logo" />
                </span>
                <button className='flex items-center justify-center bg-amber-400 p-2 w-[100px] h-[80px]' onClick={onMenuToggle}>
                    <span className='w-1 h-5 bg-white rotate-[45deg]'></span>
                    <span className='w-1 h-5 bg-white rotate-[-45deg]'></span>
                </button>
            </div>
            <div className='pr-8 pb-10 pt-20'>
                <ul className='flex flex-col gap-2 text-white'>
                    <li className='border-b border-b-white/50'>
                        <Link href={"/"} className='flex justify-between gap-1.5 items-center py-4'>
                            Home
                            <span>
                                <MdArrowOutward />
                            </span>
                        </Link>
                    </li>
                    <li className='border-b border-b-white/50'>
                        <Link href={"/"} className='flex justify-between gap-1.5 items-center py-4'>
                            Home
                            <span>
                                <MdArrowOutward />
                            </span>
                        </Link>
                    </li>
                    <li className='border-b border-b-white/50'>
                        <Link href={"/"} className='flex justify-between gap-1.5 items-center py-4'>
                            Home
                            <span>
                                <MdArrowOutward />
                            </span>
                        </Link>
                    </li>
                    <li className=''>
                        <Link href={"/"} className='flex justify-between gap-1.5 items-center py-4'>
                            Home
                            <span>
                                <MdArrowOutward />
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SlideMenu