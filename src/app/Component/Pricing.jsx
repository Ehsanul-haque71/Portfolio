import React from 'react'
import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";

const Pricing = () => {
    return (

        <section className='container '>
            <div className='pb-[120px]'>
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-[10px] justify-between'>
                    <div className='max-w-[339px] lg:min-w-[527px]'>
                        <p className='leading-[1.4] text-[17px] lg:text-[20px] text-[#FF9330] font-bold font-syne'>Pricing</p>
                        <h2 className=' leading-[1.1] text-[40px] lg:text-[64px] font-bold font-syne pt-[10px] relative after:absolute after:rounded-full after:top-[64px] lg:after:top-[85px] after:left-[215px]  lg:after:left-[325px] z-[1] after:z-[-1] after:bg-[#FF9330] after:size-[30px] lg:after:size-[65px]'>Stay chill and pick your plan</h2>
                    </div>
                    <div className='flex md:justify-end'>
                        <Link href={"/contacts"} className='inline-flex items-center justify-center md:justify-center font-DM_Sans text-[14px] md:text-[18px] lg:text-[13px] leading-[1] gap-2 font-bold bg-black py-3 px-4 md:py-3 md:px-2 lg:py-4 lg:px-5 rounded-lg text-white cursor-pointer hover:bg-transparent hover:text-black border border-transparent hover:border-black mt-[30px] md:mt-[70px] lg:mt-[110px]'>Contact for Custom Project<span > <MdArrowOutward className='w-6 h-6 ' /> </span> </Link>
                    </div>



                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-[64px] gap-[18px] lg:gap-[24px]'>
                    <div className='bg-[#0808080A]  hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition max-w-[416px] max-h-[208px] group hover:cursor-pointer'>
                        <div className='flex justify-between pb-12'>
                            <p className='font-DM_Sans text-[15px] lg:text-[18px] leading-7 text-[#08080899]'>Basic</p>
                            <h3 className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne'>$48/h</h3>
                        </div>
                        <div className='flex items-end justify-between '>
                            <h4 className='font-DM_Sans text-[18px] leading-7 text-[rgba(8,8,8,0.6)] flex flex-col'><span className='font-syne text-[25px] lg:text-[32px] leading-7 font-bold text-[#080808]'>20 hrs</span>
                                10 hours per week</h4>
                            <span> <MdArrowOutward className='w-6 h-6 text-[#08080899] group-hover:text-[#FF9330]' /> </span>
                        </div>
                    </div>

                    <div className='bg-[#0808080A]  hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition max-w-[416px] max-h-[208px] group hover:cursor-pointer'>
                        <div className='flex justify-between pb-12'>
                            <p className='font-DM_Sans text-[15px] lg:text-[18px] leading-7 text-[#08080899]'>Premium
                            </p>
                            <h3 className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne'>$60/h</h3>
                        </div>
                        <div className='flex items-end justify-between '>
                            <h4 className='font-DM_Sans text-[18px] leading-7 text-[rgba(8,8,8,0.6)] flex flex-col '><span className='font-syne text-[25px] lg:text-[32px]  leading-7 font-bold text-[#080808]'>30 hrs</span>
                                15 hours per week</h4>
                            <span> <MdArrowOutward className='w-6 h-6 text-[#08080899] group-hover:text-[#FF9330]' /> </span>
                        </div>
                    </div>

                    <div className='bg-[#0808080A]  hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition max-w-[416px] max-h-[208px] group hover:cursor-pointer'>
                        <div className='flex justify-between pb-12'>
                            <p className='font-DM_Sans text-[15px] lg:text-[18px] leading-7 text-[#08080899]'>Platinum</p>
                            <h3 className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne'>$80/h</h3>
                        </div>
                        <div className='flex items-end justify-between '>
                            <h4 className='font-DM_Sans text-[18px] leading-7 text-[rgba(8,8,8,0.6)] flex flex-col'><span className='font-syne text-[25px] lg:text-[32px]  leading-7 font-bold text-[#080808]'>40 hrs</span>
                                20 hours per week</h4>
                            <span> <MdArrowOutward className='w-6 h-6 text-[#08080899] group-hover:text-[#FF9330]' /> </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
