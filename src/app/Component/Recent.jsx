import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Por_left from "@/app/Assets/Por_left.jpg";
import Por_right from "@/app/Assets/Por_right.jpg";
import { MdArrowOutward } from "react-icons/md";

const Recent = ({ button = true, className, sectionTitle }) => {
    return (
        // 
        <div className={className}>
            <div className='container '>
                <div className='py-[25px] md:py-[65px] lg:py-[100px] '>
                    <div className='flex flex-col items-center justify-center '>
                        <p className='leading-[1.6] text-[17px] lg:text-[20px] text-[#FF9330] font-bold font-syne '>Portfolio</p>
                        <h2 className='leading-[1.1] text-[35px] lg:text-[64px] font-bold font-syne pt-2 pb-10 relative  after:absolute after:rounded-full after:size-[33px] lg:after:size-[62px] after:top-[13px] after:right-[65px] lg:after:right-[116px] z-[1] after:bg-[#FF9330] after:z-[-1]'> <span>{sectionTitle}</span></h2>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-6'>
                        <div className='pb-[10px]'>
                            <Image src={Por_left} className=' md:h-[250px] rounded-2xl' alt='logo' />
                            <div className='flex gap-2 pt-[24px]'>
                                <Link href={"/project"} className="bg-transparent text-[#080808] w-[56px] h-[28px] px-[16px] py-[6px] rounded-full flex items-center justify-center font-DM_Sans cursor-pointer hover:text-white hover:bg-black border border-[#080808] ">APP </Link>
                                <Link href={"/project"} className=' bg-transparent text-[#080808] w-[56px] h-[28px] px-[122px] py-[6px] rounded-full flex items-center justify-center font-DM_Sans cursor-pointer hover:text-white hover:bg-black border border-[#080808]'>DEVELOPMENT</Link>
                            </div>
                            <Link href={"/details"} className='flex justify-between items-center pt-[12px] hover:text-[#FF9330]'>
                                <h4 className='text-[20px] md:text-[24px] lg:text-[32px] font-semibold flex items-center gap-6 font-syne'>Basinik Finance App</h4>
                                <span > <MdArrowOutward className='w-6 h-6 ' /> </span>
                            </Link>
                        </div>
                        <div>
                            <Image src={Por_right} className=' md:h-[250px] rounded-2xl' alt='logo' />
                            <div className='flex gap-2 pt-[24px]'>
                                <Link href={"/project"} className="bg-transparent text-[#080808] w-[56px] h-[28px] px-[16px] py-[6px] rounded-full flex items-center justify-center font-DM_Sans cursor-pointer hover:text-white hover:bg-black border border-[#080808] ">APP </Link>
                                <Link href={"/project"} className=' bg-transparent text-[#080808] w-[56px] h-[28px] px-[122px] py-[6px] rounded-full flex items-center justify-center font-DM_Sans cursor-pointer hover:text-white hover:bg-black border border-[#080808]'>DEVELOPMENT</Link>
                            </div>
                            <Link href={"/details"} className='flex justify-between items-center pt-[12px] hover:text-[#FF9330]'>
                                <h4 className='text-[20px] md:text-[24px] lg:text-[32px] font-semibold flex items-center gap-6 font-syne'>Oxilex Dashboard design</h4>
                                <span > <MdArrowOutward className='w-6 h-6 ' /> </span>
                            </Link>
                        </div>
                    </div>
                    {button && <Link href={"/project"} className="mt-[38px] lg:mt-[48px] gap-2 bg-black text-white w-full h-[56px] py-[16px] rounded-lg flex items-center justify-center font-DM_Sans cursor-pointer hover:text-black hover:bg-transparent border ">View All Project <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </Link>}
                </div>
            </div>
        </div>
    )
}

export default Recent
