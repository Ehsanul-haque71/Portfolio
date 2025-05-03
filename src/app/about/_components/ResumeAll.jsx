import React from 'react'
import Link from 'next/link'
import { MdArrowOutward } from "react-icons/md";

const ResumeAll = () => {
    return (
        <section className='container'>
            <div className='flex flex-col items-center justify-center'>
                <p className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne items-center'>Resume</p>
                <h1 className='leading-[72px] text-[64px] font-bold font-syne pt-[10px] relative after:size-[65px] after:rounded-full after:bg-[#FF9330] after:absolute after:top-[12px] after:right-[37px] after:z-[-2] z-[13]'>All over my details find here...</h1>
            </div>

            <div className='pt-[32px] pb-[56px] flex gap-[16px] items-center justify-center'>
                <Link href={'/about'} className="bg-[#0808080A] text-black w-[152px] h-[56px] px-6 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black mb-2">About me <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </Link>

                <Link href={"/"} className="bg-[#0808080A] text-black w-[152px] h-[56px] px-6 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black mb-2">Experience <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </Link>

                <Link href={"/"} className="bg-[#0808080A] text-black w-[152px] h-[56px] px-6 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black mb-2">Education <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </Link>

                <Link href={"/"} className="bg-[#0808080A] text-black w-[152px] h-[56px] px-6 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black mb-2">Skills <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </Link>

                <Link href={"/"} className="bg-[#0808080A] text-black w-[152px] h-[56px] px-6 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black ">Awards <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </Link>

            </div>
        </section>
    )
}

export default ResumeAll
