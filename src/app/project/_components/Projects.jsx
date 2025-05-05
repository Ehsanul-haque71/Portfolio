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

const Project = () => {
  return (
    <div className=''>
      <div className='container pt-[160px] pb-[120px]'>
        <div>
          <div className='flex flex-col items-center justify-center'>
            <p className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne '>Portfolio</p>
            <h2 className='leading-[72px] text-[64px] font-bold font-syne pt-2 pb-10 relative  after:absolute after:rounded-full after:size-[62px] after:top-[13px] after:right-[116px] z-[1] after:bg-[#FF9330] after:z-[-1]'> <span>My recent work</span></h2>
          </div>
          <div className=' grid grid-cols-[auto_1fr] gap-[24px] pb-[28px]'>
            <div className='relative z-[-2]'>
              <Image src={workOne} alt='project1' />
              <div className='flex items-center absolute top-[300px] left-[150px]  z-[2] '>
                <p>Oxilex Dashboard design</p>
                <span><MdArrowOutward /></span>
              </div>
            </div>
            <Image className='rounded-2xl h-[380px]' src={cheffest} alt='project2' />
          </div>
          <div className='grid grid-cols-3 gap-[24px] pb-[28px]'>
            <Image src={workTwo} alt='projectImg' />
            <Image src={workThree} alt='projectImg' />
            <Image src={workFour} alt='projectImgprojectImg' />
          </div>
          <div className='grid grid-cols-[auto_1fr] gap-[24px]'>
            <Image className='rounded-2xl max-w-[746px] h-[380px]' src={Por_right} alt='projectImg' />
            <Image src={workFive} alt='projectImg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
