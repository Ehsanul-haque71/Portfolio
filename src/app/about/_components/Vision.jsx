"use client"
import { useEffect } from 'react'
import React from 'react'
import Image from 'next/image'
import year from "@/app/Assets/Year.svg"
import video from "@/app/Assets/videoforpic.jpg"
import { IoPlay } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import AOS from 'aos';



const Vision = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: true, // only animate once
        });
    }, []);

    return (
        <div className='bg-white'>
            <div className='container '>
                <div className='py-[90px] md:py-[110px] lg:py-[120px]'>
                    <div className=' grid grid-cols-1 md:grid-cols-2 items-end gap-[5px] md:gap-[100px] lg:gap-[134px]'>
                        <div data-aos="fade-right">

                            <div className=' lg:max-w-[526px]'>
                                <h2 className='font-bold font-syne text-[23px] md:text-[39px] lg:text-[65px] leading-[1.1] pb-6'>My vision is to create happy my clients</h2>
                                <p className='font-DM_Sans font-normal text-[13px] lg:text-[18px] leading-[1.5] text-[#08080899] mr-8'>That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them want more.</p>
                                <div className='flex flex-wrap pt-[30px] lg:pt-[43px] gap-[30px]'>
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

                        </div>

                        <div data-aos="fade-left">

                            <div className='flex flex-col '>
                                <h2 className='font-bold font-syne text-[88px] leading-[80px]  relative after:absolute after:rounded-full after:size-[57px] md:after:size-[100px] after:bg-amber-400 z-[1] after:z-[-1] after:top-[73px] md:after:-top-[-50px] after:left-[10px] md:after:right-[207px] lg:after:right-[333px] pt-[54px]'>12+</h2>
                                {/* <h3 className='font-bold font-syne text-[64px] leading-[72px] 
                         '>Years of experience</h3> */}
                                <div className='mt-[20px]'>
                                    <Image src={year} alt='year of experience' />
                                </div>
                                <div className="bg-black rounded-2xl text-white w-full mt-[38px]">
                                    <div className="px-[24px] py-[24px] flex items-end justify-between">
                                        <div className=" flex flex-col">
                                            <p className="text-[#FFB646] text-[13px] lg:text-[18px] leading-7 font-DM_Sans">SAY HELLO!</p>
                                            <h3 className="font-bold text-[20px] lg:text-[32px] leading-10 font-syne pt-[8px]">hello@ehsanul.com</h3>

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


                    <div data-aos="zoom-in-up">

                        <div className=' mt-[108px] relative z-[1]'>
                            <Image className='rounded-2xl min-h-[215px] lg:max-h-[668px]' src={video} alt='video' />
                            <div className=' absolute z-[10] top-[50%] left-[50%] min-w-[60px] min-h-[60px] lg:max-w-[80px] lg:max-h-[80px] bg-amber-500 rounded-full flex items-center justify-center translate-x-[-50%] translate-y-[-50%]'>
                                <IoPlay />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Vision
