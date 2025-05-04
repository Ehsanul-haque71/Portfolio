import React from 'react';
import Image from 'next/image';
import Por_left from "@/app/Assets/Por_left.jpg";
import Por_right from "@/app/Assets/Por_right.jpg";
import { MdArrowOutward } from "react-icons/md";

const Recent = () => {
    return (
        // 
        <div className='bg-[#FFE9D9] '>
            <div className='container  py-[100px] '>
                <div className='flex flex-col items-center justify-center'>
                    <p className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne '>Portfolio</p>
                    <h2 className='leading-[72px] text-[64px] font-bold font-syne pt-2 pb-10 relative  after:absolute after:rounded-full after:size-[62px] after:top-[13px] after:right-[116px] z-[1] after:bg-[#FF9330] after:z-[-1]'> <span>My recent work</span></h2>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div className=''>
                        <Image src={Por_left} className='w-[636px] h-[320px] rounded-2xl' alt='logo' />
                        <div className='flex gap-2 pt-[24px]'>
                            <button className="bg-transparent text-[#080808] w-[56px] h-[28px] px-[16px] py-[6px] rounded-full flex items-center justify-center font-DM_Sans cursor-pointer hover:text-white hover:bg-black border border-[#080808] ">APP </button>
                            <button className=' bg-transparent text-[#080808] w-[56px] h-[28px] px-[122px] py-[6px] rounded-full flex items-center justify-center font-DM_Sans cursor-pointer hover:text-white hover:bg-black border border-[#080808]'>DEVELOPMENT</button>
                        </div>
                        <div className='flex justify-between items-center pt-[12px]'>
                            <h4 className='text-[32px] font-semibold flex items-center gap-6 font-syne'>Basinik Finance App</h4>
                            <span > <MdArrowOutward className='w-6 h-6 ' /> </span>
                        </div>
                    </div>
                    <div>
                        <Image src={Por_right} className='w-[636px] h-[320px] rounded-2xl' alt='logo' />
                        <div className='flex gap-2 pt-[24px]'>
                            <button className="bg-transparent text-[#080808] w-[56px] h-[28px] px-[16px] py-[6px] rounded-full flex items-center justify-center font-DM_Sans cursor-pointer hover:text-white hover:bg-black border border-[#080808] ">APP </button>
                            <button className=' bg-transparent text-[#080808] w-[56px] h-[28px] px-[122px] py-[6px] rounded-full flex items-center justify-center font-DM_Sans cursor-pointer hover:text-white hover:bg-black border border-[#080808]'>DEVELOPMENT</button>
                        </div>
                        <div className='flex justify-between items-center pt-[12px]'>
                            <h4 className='text-[32px] font-semibold flex items-center gap-6 font-syne'>Oxilex Dashboard design</h4>
                            <span > <MdArrowOutward className='w-6 h-6 ' /> </span>
                        </div>
                    </div>
                </div>
                <button className="mt-[48px] gap-2 bg-black text-white w-full h-[56px] py-[16px] rounded-lg flex items-center justify-center font-DM_Sans cursor-pointer hover:text-black hover:bg-transparent border ">View All Project <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>
            </div>
        </div>
    )
}

export default Recent
