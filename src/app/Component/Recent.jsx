import React from 'react'
import Image from 'next/image'
import Por_left from "@/app/Assets/Por_left.jpg"
import Por_right from "@/app/Assets/Por_right.jpg"
import { MdArrowOutward } from "react-icons/md";

const Recent = () => {
    return (
        <div className='container px-[152px] py-[100px]'>
            <div>
                <p>Portfolio</p>
                <h2>My recent work</h2>
                <div className='grid grid-cols-2 gap-6'>
                    <div>
                        <Image src={Por_left} className='w-[636px] h-[320px] rounded-2xl' alt='logo' />
                        <button className="mt-[48px] bg-black text-white w-[56px] h-[28px] px-[16px] py-[6px] rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black border ">APP <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>
                        <button></button>
                    </div>
                    <div>
                        <Image src={Por_right} className='w-[636px] h-[320px] rounded-2xl' alt='logo' />
                    </div>
                </div>
                <button className="mt-[48px] bg-black text-white w-full h-[56px] px-[575.5] py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black border ">Awards <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>
            </div>
        </div>
    )
}

export default Recent
