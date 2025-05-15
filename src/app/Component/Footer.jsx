import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiArrowSmUp } from "react-icons/hi";
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-black'>
            <div className='container pt-[119px] pb-[59px]'>
                <div className=' gap-6'>
                    {/* left */}

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-6 items-center'>
                        <div className=''>
                            <h2 className='font-bold font-syne text-[32px] md:text-[40px] lg:text-[58px] leading-[72px] pb-10 text-[#FFFFFF] min-w-[416px] relative after:absolute after:size-[62px] after:rounded-full after:top-[53px] after:left-[2px] z-[1] after:z-[-1] after:bg-[#FFB646]  pt-[48px]'>Let’s work together</h2>
                            <div className='flex items-center'>
                                <div className='text-white'>
                                    <p className=' text-[15px] leading-[1.4] font-semibold font-syne'> Based in Bangladesh |</p>
                                </div>
                                <div className='flex gap-4 pl-[11px] text-white '>
                                    <FaBehance className='w-[20px] h-[20px] hover:text-[#FF9330] ' />
                                    <FaLinkedinIn className='w-[20px] h-[20px] hover:text-[#FF9330]' />
                                    <FaDribbble className='w-[20px] h-[20px] hover:text-[#FF9330] ' />
                                    <FaGithub className='w-[20px] h-[20px] hover:text-[#FF9330] ' />
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <Link href={"/contacts"} className='bg-[#0808080A] rounded-xl px-6 py-6 sm:px-8 sm:py-7 flex flex-col justify-between max-w-fit min-h-[180px] sm:min-h-[200px] lg:min-h-[260px] border border-[#FFFFFF33] group hover:cursor-pointer'>
                                <div>
                                    <h3 className='font-syne font-bold text-[18px] sm:text-[20px] leading-[1.4] text-white'>
                                        Looking for a hectic designer?
                                    </h3>
                                </div>
                                <div className='flex items-end justify-between'>
                                    <h4 className='font-syne text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.3] text-[#FFB646]'>
                                        hello@ehsanul.com
                                    </h4>
                                    <span>
                                        <MdArrowOutward className='w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#FF9330]' />
                                    </span>
                                </div>
                            </Link>
                        </div>

                        <div className=''>
                            <Link href={"/contacts"} className='bg-[#0808080A] rounded-xl px-6 py-6 sm:px-8 sm:py-7 flex flex-col justify-between max-w-fit min-h-[180px] sm:min-h-[200px] lg:min-h-[260px] border border-[#FFFFFF33] group hover:cursor-pointer'>
                                <div>
                                    <h3 className='font-syne font-bold text-[13px] sm:text-[20px] leading-[1.4] text-white'>
                                        Want a more in-depth look at my history?
                                    </h3>
                                </div>
                                <div className='flex items-end justify-between'>
                                    <h4 className='font-syne text-lg sm:text-xl lg:text-2xl leading-8 text-[#FFB646]'>
                                        +8801674087681
                                    </h4>
                                    <span>
                                        <MdArrowOutward className='w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#FF9330]' />
                                    </span>
                                </div>
                            </Link>
                        </div>

                    </div>

                </div>



                <div >
                    <div className="py-[72px] flex justify-center">
                        <h1 className="font-montserrat font-bold text-[clamp(2rem,10vw,10rem)] text-[#FFE9D9] whitespace-nowrap text-center">
                            EHSANUL HAQUE
                        </h1>
                    </div>
                </div>

                {/* max-w-[1280px]  */}
                <hr className='max-w-full text-[#FFFFFF33]' />

                <div className='flex items-center justify-between pt-6'>
                    <div>
                        <p className='font-DM_Sans text-[18px] leading-7 text-white'>©2023 Ehsanul Haque, All Rights Reserved</p>
                    </div>
                    <Link href={"/"} className='flex'>
                        <p className='font-DM_Sans text-[18px] leading-7 text-white'>Back to Top</p>
                        <span><HiArrowSmUp className='w-6 h-6 text-[#FFB646]'/></span>
                    </Link>
                </div>

            </div>
        </footer>
    )
}

export default Footer




// import React from 'react';
// import { MdArrowOutward } from "react-icons/md";
// import { FaBehance } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaDribbble } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import Link from 'next/link';

// const FooterSection = () => {
//     return (
//         <div className='bg-black'>
//             <div className='container'>
//                 <div className='flex'>
//                     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-6  '>
//                         {/* Left Section (Heading and Social Links) */}
//                     <div >
//                       <div className='max-w-[416px]'>
//                           <h2 className='font-bold font-syne text-[32px] md:text-[40px] lg:text-[64px] leading-[1.1] pb-6 md:pb-8 lg:pb-10 text-[#FFFFFF] relative after:absolute after:size-[40px] md:after:size-[50px] lg:after:size-[62px] after:rounded-full after:top-[20px] md:after:top-[30px] lg:after:top-[53px] after:left-[2px] z-[1] after:z-[-1] after:bg-[#FFB646] pt-6 md:pt-8 lg:pt-[48px]'>
//                             Let’s work together
//                         </h2>
//                       </div>
//                         {/* <h2 className='font-bold font-syne text-[32px] text-amber-50 pt-[48px] pb-[40px]'>let's work together</h2> */}
//                         <div className='flex items-center'>
//                             <div className='text-white'>
//                                 <p className='text-xl leading-7 font-semibold font-syne'>Based in Bangladesh |</p>
//                             </div>
//                             <div className='flex gap-3 md:gap-4 pl-2 md:pl-[11px] text-white'>
//                                 <FaBehance className='w-[20px] md:w-[24px] h-[20px] md:h-[24px] hover:text-[#FF9330]' />
//                                 <FaLinkedinIn className='w-[20px] md:w-[24px] h-[20px] md:h-[24px] hover:text-[#FF9330]' />
//                                 <FaDribbble className='w-[20px] md:w-[24px] h-[20px] md:h-[24px] hover:text-[#FF9330]' />
//                                 <FaGithub className='w-[20px] md:w-[24px] h-[20px] md:h-[24px] hover:text-[#FF9330]' />
//                             </div>
//                         </div>
//                     </div>

//                         {/* Button 1 */}
//                         <div className=''>
//                             <Link href={"/contacts"} className='bg-[#1A1A1A] rounded-xl px-4 py-4 sm:px-6 sm:py-6 md:px-6 md:py-6 lg:px-6 lg:py-6 flex flex-col justify-between w-full max-w-[416px] min-h-[180px] sm:min-h-[200px] lg:min-h-[260px] border border-[#FFFFFF33] group hover:cursor-pointer'>
//                                 <div>
//                                     <h3 className='font-syne font-bold text-[16px] sm:text-[18px] md:text-[18px] lg:text-[20px] leading-[1.4] text-white'>
//                                         Looking for a hectic designer?
//                                     </h3>
//                                 </div>
//                                 <div className='flex items-end justify-between'>
//                                     <h4 className='font-syne text-[16px] sm:text-[18px] md:text-[18px] lg:text-[24px] leading-[1.3] text-[#FFB646]'>
//                                         hello@ehsanul.com
//                                     </h4>
//                                     <span>
//                                         <MdArrowOutward className='w-4 sm:w-5 md:w-5 lg:w-6 h-4 sm:h-5 md:h-5 lg:h-6 text-white group-hover:text-[#FF9330]' />
//                                     </span>
//                                 </div>
//                             </Link>
//                         </div>

//                         {/* Button 2 */}
//                         <div className=''>
//                             <Link href={"/contacts"} className='bg-[#1A1A1A] rounded-xl px-4 py-4 sm:px-6 sm:py-6 md:px-6 md:py-6 lg:px-6 lg:py-6 flex flex-col justify-between w-full max-w-[416px] min-h-[180px] sm:min-h-[200px] lg:min-h-[260px] border border-[#FFFFFF33] group hover:cursor-pointer'>
//                                 <div>
//                                     <h3 className='font-syne font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] leading-[1.4] text-white'>
//                                         Want a more in-depth look at my history?
//                                     </h3>
//                                 </div>
//                                 <div className='flex items-end justify-between'>
//                                     <h4 className='font-syne text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[1.3] text-[#FFB646]'>
//                                         +8801674087681
//                                     </h4>
//                                     <span>
//                                         <MdArrowOutward className='w-4 sm:w-5 md:w-5 lg:w-6 h-4 sm:h-5 md:h-5 lg:h-6 text-white group-hover:text-[#FF9330]' />
//                                     </span>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FooterSection;







