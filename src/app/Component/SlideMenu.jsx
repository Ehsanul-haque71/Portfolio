"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { MdArrowOutward } from 'react-icons/md';
import { VscClose } from "react-icons/vsc";
import { PiAlignRightBold } from "react-icons/pi";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const SlideMenu = ({ onMenuToggle,sideMenu, setSideMenu }) => {
    const slideBar = useRef(null);

    // const isSidebar = slideBar.current.contains(event.target)


//     if(isSidebar) {
//         console.log(isSidebar)
// }else {
//     console.log('====================================');
//     console.log(isSidebar);
//     console.log('====================================');
// }

useEffect(() => {
    const handleOutsideClick = (event) => {
        if (slideBar.current && !slideBar.current.contains(event.target)) {
            setSideMenu(false); // Close the sidebar
        }
    };

    if (sideMenu) {
        window.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
        window.removeEventListener("mousedown", handleOutsideClick);
    };
}, [sideMenu]);

    


    return (
        <div ref={slideBar} className='pl-8 h-screen bg-black w-[95vw] max-w-[458px] md:w-[458px] fixed top-0 right-0 z-[1001] '>
            <div className='mb-[80px]'>
                <div className='flex justify-between gap-2 items-center border-b border-b-white/50'>
                    <span className='flex items-center justify-center font-syne font-bold text-[24px] gap-2'>
                        <span className='text-white'><PiAlignRightBold /></span>
                        <p className='text-white'>EHSANUL</p>
                    </span>
                    <button className='flex items-center justify-center bg-amber-400 p-2 w-[100px] h-[80px]' onClick={onMenuToggle}>
                        <span className=' text-white'><VscClose className='w-[35px] h-[35px]' /></span>
                        {/* <span className='w-1 h-5 bg-white rotate-[-45deg]'></span> */}
                    </button>
                </div>
                <div className='pr-8 pb-10 pt-20'>
                    <ul className='flex flex-col gap-2 text-white '>
                        <li className='border-b border-b-white/50 group hover:cursor-pointer'>
                            <Link onClick={onMenuToggle} href={"/"} className='flex justify-between gap-1.5 items-center py-4 font-syne font-bold text-[20px] leading-7 group-hover:text-[#FF9330]'>
                                Home
                                <span>
                                    <MdArrowOutward />
                                </span>
                            </Link>
                        </li>
                        <li className='border-b border-b-white/50 group hover:cursor-pointer '>
                            <Link onClick={onMenuToggle} href={"about"} className='flex justify-between gap-1.5 items-center py-4 font-syne font-bold text-[20px] leading-7 group-hover:text-[#FF9330]'>
                                About
                                <span>
                                    <MdArrowOutward />
                                </span>
                            </Link>
                        </li>
                        <li className='border-b border-b-white/50 group hover:cursor-pointer'>
                            <Link onClick={onMenuToggle} href={"project"} className='flex justify-between gap-1.5 items-center py-4 font-syne font-bold text-[20px] leading-7 group-hover:text-[#FF9330]'>
                                Project
                                <span>
                                    <MdArrowOutward />
                                </span>
                            </Link>
                        </li>
                        <li className='border-b border-b-white/50 group hover:cursor-pointer'>
                            <Link onClick={onMenuToggle} href={"details"} className='flex justify-between gap-1.5 items-center py-4 font-syne font-bold text-[20px] leading-7 group-hover:text-[#FF9330]'>
                                Project details
                                <span>
                                    <MdArrowOutward />
                                </span>
                            </Link>
                        </li>


                        <li className='border-b border-b-white/50  group hover:cursor-pointer'>
                            <Link onClick={onMenuToggle} href={"Blogs"} className='flex justify-between gap-1.5 items-center py-4 font-syne font-bold text-[20px] leading-7 group-hover:text-[#FF9330]'>
                                Blog
                                <span>
                                    <MdArrowOutward />
                                </span>
                            </Link>
                        </li>

                        <li className='border-b border-b-white/50  group hover:cursor-pointer'>
                            <Link onClick={onMenuToggle} href={"blogdetails"} className='flex justify-between gap-1.5 items-center py-4 font-syne font-bold text-[20px] leading-7 group-hover:text-[#FF9330]'>
                                Blog Details
                                <span>
                                    <MdArrowOutward />
                                </span>
                            </Link>
                        </li>

                        <li className='border-b border-b-white/50 group hover:cursor-pointer hover:text-[#FF9330] transition duration-300'>
                            <Link onClick={onMenuToggle} href={"contacts"} className='flex justify-between gap-1.5 items-center py-4 font-syne font-bold text-[20px] leading-7  group-hover:animate-arrow-move-up'>
                                Contact
                                <span>
                                    <MdArrowOutward />
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex gap-4 text-white '>
                <FaBehance className='w-[24px] h-[24px] ' />
                <FaLinkedinIn className='w-[24px] h-[24px]' />
                <FaDribbble className='w-[24px] h-[24px] ' />
                <FaGithub className='w-[24px] h-[24px] ' />
            </div>
        </div>
    )
}

export default SlideMenu