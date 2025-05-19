import React from 'react'
import Image from 'next/image'
import workOne from "@/app/Assets/workOne.png";
import cheffest from "@/app/Assets/Por_left.jpg";
import workTwo from "@/app/Assets/workTwo.png";
import workThree from "@/app/Assets/workThree.png";
import workFour from "@/app/Assets/work4.png";
import workFive from '@/app/Assets/work5.png';
import Por_right from "@/app/Assets/Por_right.jpg";
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link';

const Project = () => {
  return (
    <section>
      <div className='container '>
        <div className='pt-[160px] pb-[120px]'>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <p className='leading-[1.4] text-[17px] md:text-[20px] text-[#FF9330] font-bold font-syne '>Portfolio</p>
              <h2 className='leading-[72px] text-[33px] md:text-[64px] font-bold font-syne pt-2 pb-10 relative  after:absolute after:rounded-full after:size-[35px] md:after:size-[62px] after:top-[28px] md:after:top-[13px] after:right-[57px] md:after:right-[116px] z-[1] after:bg-[#FF9330] after:z-[-1]'> <span>My recent work</span></h2>
            </div>
            {/* 1st layer */}
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_2fr] gap-[24px]  pb-[28px]'>
              <div className='relative z-[-2]'>
                <Image src={workOne} alt='project1' />
                <Link href={"/project"} className='flex items-center gap-[10px] sm:gap-[60px] absolute bottom-[10px] lg:bottom-[15px] left-[25px]  z-[2] cursor-pointer'>
                  <p className='font-syne font-bold text-[20px] sm:text-[17px] lg:text-[29px] leading-[1.2] text-white '>Oxilex Dashboard design</p>
                  <span><MdArrowOutward className='w-[27px] h-[27px] lg:w-[40px] lg:h-[40px] text-white' /></span>
                </Link>
              </div>
              <Image className='rounded-2xl  md:min-h-[257px] lg:min-h-[380px]' src={cheffest} alt='project2' />
              
            </div>

            {/* 2nd layer */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] pb-[28px] max-w-full'>
              <Image src={workTwo} alt='projectImg' />
              <Image src={workThree} alt='projectImg' />
              <Image src={workFour} alt='projectImgprojectImg' />
            </div>

            {/* 3rd layer */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_1fr] gap-[24px]'>
              <Image className='rounded-2xl lg:min-w-[257px] lg:min-h-[380px]' src={Por_right} alt='projectImg' />
              <Image src={workFive} alt='projectImg' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
