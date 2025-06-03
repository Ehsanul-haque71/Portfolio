// "use client"
// import { useEffect } from 'react';

// import React from 'react'
// import Image from 'next/image';
// import hbk from '@/app/Assets/hbk.svg';
// import Signature from "@/app/Assets/signature.png";


// import AOS from 'aos';



// const AboutMe = () => {

//     useEffect(() => {
//         AOS.init({
//             duration: 1000, // animation duration
//             once: true, // only animate once
//         });
//     }, []);


//     return (
//         <div className='bg-[#FFE9D9]'>
//             <div className='container '>
//                 <div className='max-w-[1186px] grid grid-cols-1 md:grid-cols-2 items-center gap-[25px] md:gap-[134px] pt-[166px] pb-[120px]'>
//                     <div data-aos="zoom-in">

//                         <div>
//                             <Image src={hbk} alt="img" />
//                         </div>
                        
//                     </div>

//                     <div data-aos="fade-left">

//                         <div >
//                             <p className='font-bold font-syne text-[17px] lg:text-[20px] leading-[1.4] pb-[10px] text-[#FF9330]'>About me</p>
//                             <h1 className='font-bold font-syne text-[40px] md:text-[47px] lg:text-[52px] leading-[1.5] pb-[8px]'>EHSANUL HAQUE</h1>
//                             <h3 className='font-bold font-syne text-[20px] lg:text-[24px] leading-[1.3] pb-6'>Product Designer</h3>
//                             <h4 className='font-bold font-syne text-[15px] md:text-[17px] lg:text-[20px] leading-[1.4] pb-[30px] '>A Product Designer & Developer and I am in the game for over 7+ years. I am proud of my works and ready to face the next challenge</h4>
//                             <p className='font-DM_Sans text-[18px] leading-7 text-[#08080899] pb-[48px]'>That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them .</p>
//                             <span>
//                                 <Image src={Signature} alt='signature' />
//                             </span>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default AboutMe

"use client"
import { useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import hbk from '@/app/Assets/hbk.svg';
import Signature from "@/app/Assets/signature.png";
import AOS from 'aos';

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: true, // only animate once
        });
    }, []);

    return (
        <div className='bg-[#FFE9D9] overflow-x-hidden'>
            <div className='container max-w-[1186px] mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-[25px] md:gap-[50px] pt-[166px] pb-[120px]'>
                    <div data-aos="zoom-in">
                        <div>
                            <Image src={hbk} alt="img" className="w-full max-w-full" />
                        </div>
                    </div>
                    <div data-aos="fade-left">
                        <div>
                            <p className='font-bold font-syne text-[17px] lg:text-[20px] leading-[1.4] pb-[10px] text-[#FF9330]'>About me</p>
                            <h1 className='font-bold font-syne text-[40px] md:text-[47px] lg:text-[52px] leading-[1.5] pb-[8px]'>EHSANUL HAQUE</h1>
                            <h3 className='font-bold font-syne text-[20px] lg:text-[24px] leading-[1.3] pb-6'>Product Designer</h3>
                            <h4 className='font-bold font-syne text-[15px] md:text-[17px] lg:text-[20px] leading-[1.4] pb-[30px]'>A Product Designer & Developer and I am in the game for over 7+ years. I am proud of my works and ready to face the next challenge</h4>
                            <p className='font-DM_Sans text-[18px] leading-7 text-[#08080899] pb-[48px]'>That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them.</p>
                            <span>
                                <Image src={Signature} alt='signature' className="w-full max-w-full" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
