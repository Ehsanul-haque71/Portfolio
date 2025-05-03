import React from 'react'
import Image from 'next/image'
import year from "@/app/Assets/Year.svg"
import { MdArrowOutward } from "react-icons/md";

const Vision = () => {
    return (
        <div className='bg-white'>
            <div className='container py-[120px]'>
                <div className=' grid grid-cols-2 items-center gap-[134px]'>
                    <div className='max-w-[526px]'>
                        <h2 className='font-bold font-syne text-[65px] leading-[72px] pb-6'>My vision is to create happy my clients</h2>
                        <p className='font-DM_Sans font-normal text-[18px] leading-[28px] text-[#08080899]'>That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making
                            them want more.</p>
                        <div className='grid grid-cols-3 gap-[41px]'>
                            <div>
                                <span className='font-bold font-syne text-[32px] leading-[40px]'>08</span>
                                <p>Award winner</p>
                            </div>
                            <div>
                                <span className='font-bold font-syne text-[32px] leading-[40px]'>1.2k</span>
                                <p>Worldwide client</p>
                            </div>
                            <div>
                                <span className='font-bold font-syne text-[32px] leading-[40px]'>3.5k</span>
                                <p className=''>Job done successfully</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-bold font-syne text-[88px] leading-[80px] pb-1 relative after:absolute after:rounded-full after:size-[100px] after:bg-amber-400 z-[1] after:z-[-1] after:-top-[-4px] after:right-[484px]'>12+</h2>
                        {/* <h3 className='font-bold font-syne text-[64px] leading-[72px] 
                         '>Years of experience</h3> */}
                        <Image src={year} alt='year of experience' />
                        <div className="bg-black rounded-2xl text-white w-full mt-[48px]">
                            <div className="px-[24px] py-[24px] flex items-end justify-between">
                                <div className=" flex flex-col">
                                    <p className="text-[#FFB646] text-[18px] leading-7 font-DM_Sans">SAY HELLO!</p>
                                    <h3 className="font-bold text-[32px] leading-10 font-syne pt-[8px]">hello@ehsanul.com</h3>

                                </div>
                                <div>
                                    <span className=" ">
                                        <MdArrowOutward className='w-10 h-10 text-[#FFB646] ' />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Vision
