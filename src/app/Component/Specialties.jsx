import Image from "next/image";
import React from 'react'
import android from '@/app/Assets/android.svg'
import twelve from '@/app/Assets/twelve_plus.svg'
import { MdArrowOutward } from "react-icons/md";

const Specialties = () => {
    return (
        <div className='container pt-[120px] '>
            <div className='grid grid-cols-2'>
                <div className=''>
                    <span className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne'>Services</span>
                    <h1 className='leading-[72px] text-[64px] font-bold font-syne pt-2 relative after:size-[62px] after:rounded-full after:bg-[#FF9330] after:absolute after:top-[15px] after:left-[-2px] after:z-[-1]'><span className="absolute z-[100] "></span> <span>My</span> specialties</h1>
                </div>
                <div className='text-[18px] leading-[28px] font-normal font-DM_Sans items-center w-[636px] pt-[30px] text-[#08080899]'>
                    Synergistically seize front-end methods of empowerment without extensive core competencies. Progressively repurpose alternative platforms
                </div>
            </div>



            <div className=" grid grid-cols-1 lg:grid-cols-[auto_1fr]  gap-6 ">
                <div className="grid grid-cols-3 gap-6">
                    <div className="bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition  group hover:cursor-pointer">
                        <div className="w-12 h-12 bg-white group-hover:bg-[#0808080A] rounded-full items-center justify-center flex ">
                            <Image src={android} alt="logo" />
                        </div>
                        <div className=" flex items-end justify-between group-hover:text-[#FF9330]">
                            <p className="w-[139px] font-syne text-[20px] leading-[28px] font-bold  ">Mobile Apps design</p>
                            <span><MdArrowOutward className=' w-6 h-6' /> </span>
                        </div>
                    </div>

                    <div className="bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition  group hover:cursor-pointer">
                        <div className="w-12 h-12 bg-white group-hover:bg-[#0808080A] rounded-full items-center justify-center flex ">
                            <Image src={android} alt="logo" />
                        </div>
                        <div className=" flex items-end justify-between group-hover:text-[#FF9330]">
                            <p className="w-[139px] font-syne text-[20px] leading-[28px] font-bold  ">UI/UX
                                design
                            </p>
                            <span><MdArrowOutward className=' w-6 h-6' /> </span>
                        </div>
                    </div>

                    <div className="bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition  group hover:cursor-pointer">
                        <div className="w-12 h-12 bg-white group-hover:bg-[#0808080A] rounded-full items-center justify-center flex ">
                            <Image src={android} alt="logo" />
                        </div>
                        <div className=" flex items-end justify-between group-hover:text-[#FF9330]">
                            <p className="w-[139px] font-syne text-[20px] leading-[28px] font-bold  ">Mobile Apps design</p>
                            <span><MdArrowOutward className=' w-6 h-6' /> </span>
                        </div>
                    </div>

                    <div className="bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition  group hover:cursor-pointer">
                        <div className="w-12 h-12 bg-white group-hover:bg-[#0808080A] rounded-full items-center justify-center flex ">
                            <Image src={android} alt="logo" />
                        </div>
                        <div className=" flex items-end justify-between group-hover:text-[#FF9330]">
                            <p className="w-[139px] font-syne text-[20px] leading-[28px] font-bold  ">Mobile Apps design</p>
                            <span><MdArrowOutward className=' w-6 h-6' /> </span>
                        </div>
                    </div>

                    <div className="bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition  group hover:cursor-pointer">
                        <div className="w-12 h-12 bg-white group-hover:bg-[#0808080A] rounded-full items-center justify-center flex ">
                            <Image src={android} alt="logo" />
                        </div>
                        <div className=" flex items-end justify-between group-hover:text-[#FF9330]">
                            <p className="w-[139px] font-syne text-[20px] leading-[28px] font-bold  ">Mobile Apps design</p>
                            <span><MdArrowOutward className=' w-6 h-6' /> </span>
                        </div>
                    </div>

                    <div className="bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition  group hover:cursor-pointer">
                        <div className="w-12 h-12 bg-white group-hover:bg-[#0808080A] rounded-full items-center justify-center flex ">
                            <Image src={android} alt="logo" />
                        </div>
                        <div className=" flex items-end justify-between group-hover:text-[#FF9330]">
                            <p className="w-[139px] font-syne text-[20px] leading-[28px] font-bold  ">Mobile Apps design</p>
                            <span><MdArrowOutward className=' w-6 h-6' /> </span>
                        </div>
                    </div>
                </div>



                <div>
                    <div className="bg-black rounded-2xl text-white">
                        <div className="px-[24px] py-[36px]">
                            <span className=" flex justify-end">
                                <MdArrowOutward className='w-12 h-12 text-[#FFB646] ' />
                            </span>
                            <div className="mt-[292px]">
                                <p className="text-[#FFB646] text-[18px] leading-7 font-DM_Sans">SAY HELLO!</p>
                                <h3 className="font-bold text-8 leading-10 font-syne pt-">hello@roudra.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="grid grid-cols-2 mt-[120px] gap-[134px]">
                {/* left */}
                <div>
                    <Image src={twelve} alt="img" />
                </div>
                {/* right */}
                <div>
                    <div>
                        <p className="leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne pb-[10px]">Hello I’m</p>
                        <h3 className="leading-[72px] text-[64px] font-bold font-syne pt-2 relative after:absolute after:rounded-full after:size-[62px] after:bg-[#FF9330] after:top-[10px] after:right-[545px] after:z-[-3]">
                            Ehsanul Haque, Product Designer
                        </h3>
                        <h4 className="leading-[54px] text-[44px] font-bold font-syne pt-3">Based in Bangladesh
                        </h4>
                        <p className="text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[526px] pt-4">That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them .</p>
                    </div>
                    <div className="grid grid-cols-3 pt-6">
                        <div>
                            <h5 className="leading-[40px] text-[32px] font-bold font-syne">08</h5>
                            <p className="leading-[28px] text-[18px] text-[#08080899]">Award winner</p>
                        </div>
                        <div>
                            <h6 className="leading-[40px] text-[32px] font-bold font-syne">1.2k</h6>
                            <p className="leading-[28px] text-[18px] text-[#08080899]">Worldwide client</p>
                        </div>
                        <div>
                            <h3 className="leading-[40px] text-[32px] font-bold font-syne">3.5k</h3>
                            <p className="leading-[28px] text-[18px] text-[#08080899]">Job done successfully</p>
                        </div>
                        <div className="pt-[36px]  w-[253px] h-[56px] mb-[120px]">
                            <button className="bg-black text-white w-[256px] h-[56px] px-8 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-[#FF9330] ">   Download my resume
                                <span > <MdArrowOutward className='w-6 h-6 ' /> </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialties
