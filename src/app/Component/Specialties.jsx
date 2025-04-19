import Image from "next/image";
import React from 'react'
import android from '@/app/Assets/android.svg'
import { MdArrowOutward } from "react-icons/md";

const Specialties = () => {
    return (
        <div>
            <div className='container pl-[152px] pt-[120px] '>
                <div className='grid grid-cols-2'>
                    <div className=''>
                        <span className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne'>Services</span>
                        <h1 className='leading-[72px] text-[64px] font-bold font-syne pt-2'>My specialties</h1>
                    </div>
                    <div className='text-[18px] leading-[28px] font-normal font-DM_Sans items-center w-[636px] pt-[30px] text-[#08080899]'>
                        Synergistically seize front-end methods of empowerment without extensive core competencies. Progressively repurpose alternative platforms
                    </div>
                </div>
                <div className='pt-[48px] gap-6 grid grid-cols-1 sm:grid-cols-[auto_1fr] '>
                    {/* left */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className='bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition w-[270px] h-[192px]'>
                            <div className="w-12 h-12 bg-white hover:bg-[#0808080A] rounded-full items-center justify-center flex">
                                <Image src={android} className=' ' alt='mobile_logo' />
                            </div>
                            <div className="flex">
                                <p className="font-syne text-[20px] leading-[28px] font-bold  mt-5">Mobile Apps design</p>
                                <span className="mt-13" > <MdArrowOutward className=' w-6 h-6' /> </span>
                            </div>
                        </div>
                        <div className='bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition w-[270px] h-[192px]'>
                            <div className="w-12 h-12 bg-white hover:bg-[#0808080A] rounded-full items-center justify-center flex">
                                <Image src={android} className=' ' alt='mobile_logo' />
                            </div>
                            <div className="flex">
                                <p className="font-syne text-[20px] leading-[28px] font-bold  mt-5">Mobile Apps design</p>
                                <span className="mt-13" > <MdArrowOutward className=' w-6 h-6' /> </span>
                            </div>
                        </div>
                        <div className='bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition w-[270px] h-[192px]'>
                            <div className="w-12 h-12 bg-white hover:bg-[#0808080A] rounded-full items-center justify-center flex">
                                <Image src={android} className=' ' alt='mobile_logo' />
                            </div>
                            <div className="flex">
                                <p className="font-syne text-[20px] leading-[28px] font-bold  mt-5">Mobile Apps design</p>
                                <span className="mt-13" > <MdArrowOutward className=' w-6 h-6' /> </span>
                            </div>
                        </div>
                        <div className='bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition w-[270px] h-[192px]'>
                            <div className="w-12 h-12 bg-white hover:bg-[#0808080A] rounded-full items-center justify-center flex">
                                <Image src={android} className=' ' alt='mobile_logo' />
                            </div>
                            <div className="flex">
                                <p className="font-syne text-[20px] leading-[28px] font-bold  mt-5">Mobile Apps design</p>
                                <span className="mt-13" > <MdArrowOutward className=' w-6 h-6' /> </span>
                            </div>
                        </div>
                        <div className='bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition w-[270px] h-[192px]'>
                            <div className="w-12 h-12 bg-white hover:bg-[#0808080A] rounded-full items-center justify-center flex">
                                <Image src={android} className=' ' alt='mobile_logo' />
                            </div>
                            <div className="flex">
                                <p className="font-syne text-[20px] leading-[28px] font-bold  mt-5">Mobile Apps design</p>
                                <span className="mt-13" > <MdArrowOutward className=' w-6 h-6' /> </span>
                            </div>
                        </div>
                        <div className='bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition w-[270px] h-[192px]'>
                            <div className="w-12 h-12 bg-white hover:bg-[#0808080A] rounded-full items-center justify-center flex">
                                <Image src={android} className=' ' alt='mobile_logo' />
                            </div>
                            <div className="flex">
                                <p className="font-syne text-[20px] leading-[28px] font-bold  mt-5">Mobile Apps design</p>
                                <span className="mt-13" > <MdArrowOutward className=' w-6 h-6' /> </span>
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="bg-black rounded-2xl text-white">
                        <span>

                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialties
