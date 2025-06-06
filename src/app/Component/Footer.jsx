'use client';

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
        <footer className='bg-black overflow-x-hidden'>
            <div className='container '>
                <div className='pt-[119px] pb-[59px]'>
                    <div className=' gap-6'>
                        {/* left */}

                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-6 items-center'>
                            <div className=''>
                                <h2 className='font-bold font-syne text-[32px] md:text-[40px] lg:text-[58px] leading-[72px] pb-10 text-[#FFFFFF] min-w-[416px] relative after:absolute after:size-[62px] after:rounded-full after:top-[53px] after:left-[2px] z-[1] after:z-[-1] after:bg-[#FFB646]  pt-[48px]'>Let’s work together</h2>
                                <div className='flex items-center'>
                                    <div className='text-white'>
                                        <p className=' text-[15px] leading-[1.4] font-semibold font-syne'> Based in Bangladesh |</p>
                                    </div>
                                    <div className='flex gap-4 pl-[11px] text-white '>
                                        <FaBehance className='w-[20px] h-[20px] hover:text-[#FF9330] ' />
                                        <FaLinkedinIn className='w-[20px] h-[20px] hover:text-[#FF9330]' />
                                        <FaDribbble className='w-[20px] h-[20px] hover:text-[#FF9330] ' />
                                        <FaGithub className='w-[20px] h-[20px] hover:text-[#FF9330] ' />
                                    </div>
                                </div>
                            </div>

                            <div className=''>
                                <Link href={"/contacts"} className='bg-[#0808080A] rounded-xl px-6 py-6 sm:px-8 sm:py-7 flex flex-col justify-between max-w-fit min-h-[180px] sm:min-h-[200px] lg:min-h-[260px] border border-[#FFFFFF33] group hover:cursor-pointer'>
                                    <div>
                                        <h3 className='font-syne font-bold text-[18px] sm:text-[20px] leading-[1.4] text-white'>
                                            Looking for a hectic designer?
                                        </h3>
                                    </div>
                                    <div className='flex items-end justify-between'>
                                        <h4 className='font-syne text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.3] text-[#FFB646]'>
                                            hello@ehsanul.com
                                        </h4>
                                        <span>
                                            <MdArrowOutward className='w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#FF9330]' />
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            <div className=''>
                                <Link href={"/contacts"} className='bg-[#0808080A] rounded-xl px-6 py-6 sm:px-8 sm:py-7 flex flex-col justify-between max-w-fit min-h-[180px] sm:min-h-[200px] lg:min-h-[260px] border border-[#FFFFFF33] group hover:cursor-pointer'>
                                    <div>
                                        <h3 className='font-syne font-bold text-[13px] sm:text-[20px] leading-[1.4] text-white'>
                                            Want a more in-depth look at my history?
                                        </h3>
                                    </div>
                                    <div className='flex items-end justify-between'>
                                        <h4 className='font-syne text-lg sm:text-xl lg:text-2xl leading-8 text-[#FFB646]'>
                                            +8801674087681
                                        </h4>
                                        <span>
                                            <MdArrowOutward className='w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#FF9330]' />
                                        </span>
                                    </div>
                                </Link>
                            </div>

                        </div>

                    </div>



                    <div >
                        <div className="py-[72px] flex justify-center overflow-hidden">
                            <h1 className="font-montserrat font-bold text-[clamp(2rem,10vw,10rem)] text-[#FFE9D9] whitespace-nowrap text-center">
                                EHSANUL HAQUE
                            </h1>
                        </div>
                    </div>

                    {/* max-w-[1280px]  */}
                    <hr className='max-w-full text-[#FFFFFF33]' />

                    <div className='flex items-center justify-between pt-6'>
                        <div>
                            <p className='font-DM_Sans text-[12px] sm:text-[18px] leading-7 text-white'>©2023 Ehsanul Haque, All Rights Reserved</p>
                        </div>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className='flex items-center'
                        >
                            <p className='font-DM_Sans text-[12px] sm:text-[18px] leading-7 text-white'>Back to Top</p>
                            <span><HiArrowSmUp className='w-5 h-5 sm:w-6 sm:h-6 text-[#FFB646]' /></span>
                        </button>

                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer








