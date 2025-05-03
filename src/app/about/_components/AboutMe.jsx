
import React from 'react'
import Image from 'next/image';
import About_img from '@/app/Assets/about_img.svg';
import Signature from "@/app/Assets/signature.png";


const AboutMe = () => {

    return (
        <div className='bg-[#FFE9D9]'>
            <div className='container '>
                <div className='max-w-[1186px] grid grid-cols-2 items-center gap-[134px] pt-[166px] pb-[120px]'>
                    <div>
                        <Image src={About_img} alt="img" />
                    </div>
                    <div >
                        <p className='font-bold font-syne text-xl leading-7 pb-[10px] text-[#FF9330]'>About me</p>
                        <h1 className='font-bold font-syne text-[52px] leading-[78px] pb-[8px]'>EHSANUL HAQUE</h1>
                        <h3 className='font-bold font-syne  text-2xl leading-8 pb-6'>Product Designer</h3>
                        <h4 className='font-bold font-syne  text-xl leading-7 pb-[30px] '>A Product Designer & Developer and I am in the game for over 7+ years. I am proud of my works and ready to face the next challenge</h4>
                        <p className='font-DM_Sans text-[18px] leading-7 text-[#08080899] pb-[48px]'>That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them .</p>
                        <span>
                            <Image src={Signature} alt='signature' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AboutMe
