import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='' >
            <div className=' container pt-[60px] pl-[152px]'>
                <h3 className=' text-[32px] font-semibold flex items-center gap-6'> <hr className='w-[65px] text-[#080808]' /> Hello, I’m✌</h3>
                <h1 className='relative font-syne leading-[110px] font-bold w-[463px]  text-[140px] pt-2  after:content-[""] after:size-[120px] after:rounded-full after:bg-yellow-400 after:absolute after:top-[6px] after:-left-[10px] after:z-[-1] w-[498px]'> <span className='bg-amber-300 w-[70px] h-[70px]'></span> <span>Ehsanul</span> Haque</h1>
                <p className='pt-6 text-6 font-semibold font-syne'>Product Designer | Based in Bangladesh</p>
                <div className='flex gap-[17px] pt-[30px] '>
                    <button className='flex gap-2 font-bold bg-black py-4 px-8 rounded-lg  text-white cursor-pointer hover:bg-transparent hover:text-black  hover:border ' >Let’s Talk <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>
                    <button className='flex gap-2 font-bold bg-black py-4 px-8 rounded-lg  text-white cursor-pointer hover:bg-transparent hover:text-black hover:border '>My Work <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>
                </div>
                <div className='flex pt-[120px] items-center'>
                    {/* <div>
                        <h2 className='text-[44px] font-bold w-[112px] h-[54px] font-syne'>1.2k+</h2>
                        <p className='text-[18px] w-[140px] pt-[13px] gap-3 '>Worldwide client</p>
                        <span className=' '>|</span>
                    </div> */}
                    <div className=' flex'>
                    <span className='text-[44px] font-bold leading-[54px]  font-syne '>1.2k+</span>
                        <h5 className='text-[18px] pt-[13px] leading-[28px] pl-[12px] font-DM_Sans '>Worldwide client</h5>
                        <span className=' flex items-center pl-[12px]'>|</span>
                    </div>
                    <div className='flex gap-4 pl-[32px]'>
                        <FaBehance className='w-[24px] h-[24px] ' />
                        <FaLinkedinIn className='w-[24px] h-[24px]' />
                        <FaDribbble className='w-[24px] h-[24px] ' />
                        <FaGithub className='w-[24px] h-[24px] ' />
                    </div>
                </div>
            </div>
            <div>right</div>
        </div>
    )
}

export default Hero
