import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";
import Blog1 from '@/app/Assets/Blog1.png'
import Blog2 from '@/app/Assets/Blog2.png'
import Blog3 from '@/app/Assets/Blog3.png'
import Blog4 from '@/app/Assets/Blog4.png'

const Blog = () => {
    return (
        <section className='container '>
            <div className='pt-[90px] pb-[70px] lg:pt-[120px] lg:pb-[108px]'>
                <div className='flex flex-col items-center justify-center '>
                    <p className='leading-[1.4] text-[17px] lg:text-[20px] text-[#FF9330] font-bold font-syne'>Blog</p>
                    <h2 className='leading-[1.1] text-[35px] md:text-[50px] lg:text-[64px] font-bold font-syne pt-[10px] relative after:absolute after:size-[36px] md:after:size-[45px] lg:after:size-[50px] after:bg-[#FF9330] z-[7] after:z-[-7] after:top-[15px] md:after:top-[23px] lg:after:top-[25px] after:right-[35px] md:after:right-[44px] lg:after:right-[65px] after:rounded-full'>My blog post</h2>
                </div>
                <div className='grid items-center justify-center sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-[36px]'>
                    {/* blog_1 */}
                    <div className='sm:pt-[48px]'>
                        <div className='max-w-[306px]'>
                            <Image src={Blog1} alt='logo' />
                            <div className='flex gap-3 pt-6 pb-3'>
                                <div className='flex items-center gap-[15px]'>
                                    <span className='flex'><hr className='rounded-full w-[10px] h-[10px] bg-black' /></span>
                                    <p className='text-[14px] text-black leading-[20px]'>UI Design</p>
                                </div>
                                <div className='flex items-center gap-[15px]'>
                                    <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FF9330] border-[#FF9330]' /></span>
                                    <p className='text-[14px] text-[#FF9330] leading-[20px]'>03 May 2019</p>
                                </div>
                            </div>

                            <Link href={"/blogdetails"} className='flex items-end justify-between cursor-pointer hover:text-[#FF9330] '>
                                <div >
                                    <h3 className='font-syne text-[24px] lg:text-[24px] leading-[1.3] font-bold  '>Right-lo-left behind development in mobile web design</h3>
                                </div>
                                <span ><MdArrowOutward className='w-6 h-6' /></span>
                            </Link>
                        </div>


                    </div>

                    {/* blog_2 */}
                    <div className='pt-[50px] sm:pt-[88px]'>
                        <div className='max-w-[306px]'>
                            <Image src={Blog2} alt='logo' />

                            <div className='flex gap-3 pt-6 pb-3'>
                                <div className='flex items-center gap-[15px]'>
                                    <span className='flex'><hr className='rounded-full w-[10px] h-[10px] bg-black' /></span>
                                    <p className='text-[14px] text-black leading-[20px]'>UI Design</p>
                                </div>
                                <div className='flex items-center gap-[15px]'>
                                    <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FF9330] border-[#FF9330]' /></span>
                                    <p className='text-[14px] text-[#FF9330] leading-[20px]'>03 May 2019</p>
                                </div>
                            </div>

                            <Link href={"/blogdetails"} className='flex items-end justify-between cursor-pointer hover:text-[#FF9330]'>
                                <div >
                                    <h3 className='font-syne text-2xl leading-8 font-bold  '>Connect craft: Reading the smart experience</h3>
                                </div>
                                <span ><MdArrowOutward className='w-6 h-6' /></span>
                            </Link>
                        </div>
                    </div>


                    {/* blog_3 */}
                    <div className='pt-[50px] sm:pt-[48px]'>
                        <div className='max-w-[306px]'>
                            <Image src={Blog3} alt='logo' />

                            <div className='flex gap-3 pt-6 pb-3'>
                                <div className='flex items-center gap-[15px]'>
                                    <span className='flex'><hr className='rounded-full w-[10px] h-[10px] bg-black' /></span>
                                    <p className='text-[14px] text-black leading-[20px]'>UI Design</p>
                                </div>
                                <div className='flex items-center gap-[15px]'>
                                    <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FF9330] border-[#FF9330]' /></span>
                                    <p className='text-[14px] text-[#FF9330] leading-[20px]'>03 May 2019</p>
                                </div>
                            </div>

                            <Link href={"/blogdetails"} className='flex items-end justify-between cursor-pointer hover:text-[#FF9330] '>
                                <div>
                                    <h3 className='font-syne text-2xl leading-8 font-bold  '>Ecoglow: Sustainable skincare a brighter tomorrow</h3>
                                </div>
                                <span ><MdArrowOutward className='w-6 h-6' /></span>
                            </Link>
                        </div>
                    </div>


                    {/* blog_4 */}
                    <div className='pt-[50px] sm:pt-[88px]'>
                        <div className='max-w-[306px]'>
                            <Image src={Blog4} alt='logo' />

                            <div className='flex gap-3 pt-6 pb-3'>
                                <div className='flex items-center gap-[15px]'>
                                    <span className='flex'><hr className='rounded-full w-[10px] h-[10px] bg-black' /></span>
                                    <p className='text-[14px] text-black leading-[20px]'>UI Design</p>
                                </div>
                                <div className='flex items-center gap-[15px]'>
                                    <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FF9330] border-[#FF9330]' /></span>
                                    <p className='text-[14px] text-[#FF9330] leading-[20px]'>03 May 2019</p>
                                </div>
                            </div>

                            <Link href={"/blogdetails"} className='flex items-end justify-between cursor-pointer hover:text-[#FF9330] '>
                                <div>
                                    <h3 className='font-syne text-2xl leading-8 font-bold  '>Right-lo-left behind development in mobile web design</h3>
                                </div>
                                <span ><MdArrowOutward className='w-6 h-6' /></span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Blog
