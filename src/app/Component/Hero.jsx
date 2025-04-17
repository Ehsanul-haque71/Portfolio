import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='' >
            <div className=' container items-center pt-[60px]'>
                <h3 className=' text-[32px] font-semibold pl-[241px] flex items-center gap-6'> <hr className='w-[65px] text-[#080808]' /> Hello, I’m✌</h3>
                <h1 className='font-bold w-[463px]  text-[140px] pt-2 pl-[152px] '> <span className='bg-amber-300 w-[50px] h-[50px]'></span> <span>Ehsanul</span> Haque</h1>
                <p className='pt-6 pl-[152px] text-6 font-semibold'>Product Designer | Based in Bangladesh</p>
                <div className='flex gap-[17px] pt-[30px] pl-[152px]'>
                    <button className='flex gap-2 font-bold bg-black py-4 px-8 rounded-lg  text-white cursor-pointer hover:bg-transparent hover:text-black ' >Let’s Talk <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>
                    <button className='flex gap-2 font-bold bg-black py-4 px-8 rounded-lg  text-white cursor-pointer hover:bg-transparent hover:text-black '>My Work <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>
                </div>
                <div className='flex pl-[152px] pt-[120px] items-center'>
                    <h2 className='text-[44px] font-bold w-[112px] h-[54px] '>1.2k+</h2>
                    <p className='text-[18px] w-[140px] pt-[13px] gap-3 '>Worldwide client </p>
                    <span><hr className='w-[14px]' /></span>
                    <div className='flex w-[144px] '>        
                        <FaBehance className='w-[24px] h-[24px] gap-[16px] '/>
                        <FaLinkedinIn className='w-[24px] h-[24px] gap-[16px] ' />
                        <FaDribbble className='w-[24px] h-[24px] gap-[16px] ' />
                        <FaGithub className='w-[24px] h-[24px]' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
