import React from 'react'
import Image from 'next/image'
import { MdArrowOutward } from "react-icons/md";
import Blog1 from '@/app/Assets/Blog1.png'
import Blog2 from '@/app/Assets/Blog2.png'
import Blog3 from '@/app/Assets/Blog3.png'
import Blog4 from '@/app/Assets/Blog4.png'

const BlogsMe = () => {
    return (
        <section className='container pt-[160px] pb-[120px]'>
            <div className='flex flex-col items-center justify-center'>
                <p className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne'>Blog</p>
                <h2 className='leading-[72px] text-[64px] font-bold font-syne pt-[10px] relative after:absolute after:size-[65px] after:bg-[#FF9330] z-[7] after:z-[-7] after:top-[17px] after:right-[65px] after:rounded-full'>My blog post</h2>
            </div>
            <div className='grid grid-cols-4 gap-6 pb-[36px]'>
                {/* blog_1 */}
                <div className='pt-[48px]'>
                    <div>
                        <Image src={Blog1} alt='logo' />
                    </div>
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

                    <div className='flex items-end justify-between cursor-pointer hover:text-[#FF9330] '>
                        <div >
                            <h3 className='font-syne text-2xl leading-8 font-bold  '>Right-lo-left behind development in mobile web design</h3>
                        </div>
                        <span ><MdArrowOutward className='w-6 h-6' /></span>
                    </div>
                </div>

                {/* blog_2 */}
                <div className='pt-[88px]'>
                    <div>
                        <Image src={Blog2} alt='logo' />
                    </div>
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

                    <div className='flex items-end justify-between cursor-pointer hover:text-[#FF9330]'>
                        <div >
                            <h3 className='font-syne text-2xl leading-8 font-bold  '>Connect craft: Reading the smart experience</h3>
                        </div>
                        <span ><MdArrowOutward className='w-6 h-6' /></span>
                    </div>
                </div>


                {/* blog_3 */}
                <div className='pt-[48px]'>
                    <div>
                        <Image src={Blog3} alt='logo' />
                    </div>
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
                    <div className='flex items-end justify-between cursor-pointer hover:text-[#FF9330] '>
                        <div>
                            <h3 className='font-syne text-2xl leading-8 font-bold  '>Ecoglow: Sustainable skincare a brighter tomorrow</h3>
                        </div>
                        <span ><MdArrowOutward className='w-6 h-6' /></span>
                    </div>
                </div>


                {/* blog_4 */}
                <div className='pt-[88px]'>
                    <div>
                        <Image src={Blog4} alt='logo' />
                    </div>
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

                    <div className='flex items-end justify-between cursor-pointer hover:text-[#FF9330] '>
                        <div>
                            <h3 className='font-syne text-2xl leading-8 font-bold  '>Right-lo-left behind development in mobile web design</h3>
                        </div>
                        <span ><MdArrowOutward className='w-6 h-6' /></span>
                    </div>
                </div>
            </div>


            <div className='grid grid-cols-4 gap-6'>
                {/* blog_5 */}
                <div className='pt-[48px]'>
                    <div>
                        <Image src={Blog1} alt='logo' />
                    </div>
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

                    <div className='flex items-end justify-between cursor-pointer hover:text-[#FF9330] '>
                        <div>
                            <h3 className='font-syne text-2xl leading-8 font-bold  '>Right-lo-left behind development in mobile web design</h3>
                        </div>
                        <span ><MdArrowOutward className='w-6 h-6' /></span>
                    </div>
                </div>

                {/* blog_6 */}
                <div className='pt-[88px]'>
                    <div>
                        <Image src={Blog2} alt='logo' />
                    </div>
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

                    <div className='flex items-end justify-between cursor-pointer hover:text-[#FF9330]'>
                        <div>
                            <h3 className='font-syne text-2xl leading-8 font-bold  '>Connect craft: Reading the smart experience</h3>
                        </div>
                        <span ><MdArrowOutward className='w-6 h-6' /></span>
                    </div>
                </div>


                {/* blog_7 */}
                <div className='pt-[48px]'>
                    <div>
                        <Image src={Blog3} alt='logo' />
                    </div>
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

                    <div className='flex items-end justify-between cursor-pointer hover:text-[#FF9330] '>
                        <div>
                            <h3 className='font-syne text-2xl leading-8 font-bold  '>Ecoglow: Sustainable skincare a brighter tomorrow</h3>
                        </div>
                        <span ><MdArrowOutward className='w-6 h-6' /></span>
                    </div>
                </div>


                {/* blog_8 */}
                <div className='pt-[88px]'>
                    <div>
                        <Image src={Blog4} alt='logo' />
                    </div>
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

                    <div className='flex items-end justify-between cursor-pointer hover:text-[#FF9330] '>
                        <div>
                            <h3 className='font-syne text-2xl leading-8 font-bold  '>Right-lo-left behind development in mobile web design</h3>
                        </div>
                        <span ><MdArrowOutward className='w-6 h-6' /></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogsMe
