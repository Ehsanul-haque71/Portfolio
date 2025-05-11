import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiArrowSmUp } from "react-icons/hi";
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-black'>
            <div className='container pt-[119px] pb-[59px]'>
                <div className='flex gap-6'>
                    {/* left */}
                    <div>
                        <h2 className='font-bold font-syne text-[64px] leading-[72px] pb-10 text-[#FFFFFF] w-[416px] relative after:absolute after:size-[62px] after:rounded-full after:top-[53px] after:left-[2px] z-[1] after:z-[-1] after:bg-[#FFB646]  pt-[48px]'>Let’s work together</h2>
                        <div className='flex items-center'>
                            <div className='text-white'>
                                <p className=' text-xl leading-7 font-semibold font-syne'> Based in Bangladesh |</p>
                            </div>
                            <div className='flex gap-4 pl-[11px] text-white '>
                                <FaBehance className='w-[24px] h-[24px] hover:text-[#FF9330]  hover:text-[#FF9330]' />
                                <FaLinkedinIn className='w-[24px] h-[24px] hover:text-[#FF9330]' />
                                <FaDribbble className='w-[24px] h-[24px] hover:text-[#FF9330] ' />
                                <FaGithub className='w-[24px] h-[24px] hover:text-[#FF9330] ' />
                            </div>
                        </div>



                    </div>
                    {/* right */}
                    <div className='flex gap-6'>
                        <Link href={"/contacts"}  className='bg-[#0808080A] rounded-xl px-[36px] py-[28px] flex flex-col justify-between w-[416px] h-[260px] border-1 border-[#FFFFFF33] group hover:cursor-pointer'>
                            <div className='flex justify-between'>
                                <h3 className='font-syne font-bold text-[20px] leading-7 text-white w-[230px]'>Looking for a hectic designer?</h3>
                            </div>
                            <div className='flex items-end justify-between '>
                                <h4 className='font-syne text-[24px] leading-8 text-[#FFB646] flex flex-col'>
                                    hello@ehsanul.com</h4>
                                <span> <MdArrowOutward className='w-6 h-6  text-white group-hover:text-[#FF9330]' /> </span>
                            </div>
                        </Link>

                        <Link href={"/contacts"}  className='bg-[#0808080A] rounded-xl px-[36px] py-[28px] flex flex-col justify-between w-[416px] h-[260px] border-1 border-[#FFFFFF33] group hover:cursor-pointer'>
                            <div className='flex justify-between'>
                                <h3 className='font-syne font-bold text-[20px] leading-7 text-white'>Want a more in-depth look at my history?</h3>
                            </div>
                            <div className='flex items-end justify-between '>
                                <h4 className='font-syne text-[24px] leading-8 text-[#FFB646] flex flex-col'>
                                    +8801674087681</h4>
                                <span> <MdArrowOutward className='w-6 h-6 text-[#08080899] text-white group-hover:text-[#FF9330]' /> </span>
                            </div>
                        </Link>
                    </div>

                </div>



                <div>
                    <div className='font-montserrat font-bold text-[138px] text-[#FFE9D9] py-[72px] '>
                        <h1 className='w-[1280px] '>EHSANUL HAQUE</h1>
                    </div>
                </div>

                <hr className='w-[1296px] text-[#FFFFFF33]' />
                
                <div className='flex items-center justify-between pt-6'>
                    <div>
                        <p className='font-DM_Sans text-[18px] leading-7 text-white'>©2023 Ehsanul Haque, All Rights Reserved</p>
                    </div>
                    <Link href={"/"} className='flex'>
                        <p className='font-DM_Sans text-[18px] leading-7 text-white'>Back to Top</p>
                        <span><HiArrowSmUp className='w-6 h-6 text-[#FFB646]'/></span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
