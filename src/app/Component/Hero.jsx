"use client"
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Man from '@/app/Assets/man.png';
import Link from 'next/link';
import hero from "@/app/Assets/final_img.svg"


const Hero = () => {
    useGSAP(() => {
        gsap.from('.left', {
            x: -50,
            duration: 2,
            autoAlpha: 0,

        })
    })
    return (
        <section className='bg-[#FFE9D9] py-20 md:pt-[140px] md:pb-[126px] '>
            <div className='flex items-center container' >
                
                {/* left */}

                <div className=' pt-[60px] left pl-[20px] lg:pl-[0px]'>
                    <h3 className=' text-[25px] lg:text-[32px] font-semibold flex items-center gap-3 md:gap-6'> <hr className='w-[55px] md:w-[60px] lg:w-[65px] text-[#080808]' /> Hello, I’m✌</h3>
                    <h1 className='relative font-syne leading-[1.2] font-bold text-[60px] md:text-[70px] lg:text-[93px]  pt-2 after:size-[50px] after:top-[18px] after:-left-[2px]  md:after:size-[57px]  lg:after:size-[80px] after:rounded-full after:bg-yellow-400 after:absolute md:after:top-[20px] lg:after:top-[25px]  md:after:-left-[0px] lg:after:-left-[5px] after:z-[-1] max-w-[498px]'> <span className='bg-amber-300 w-[70px] h-[70px]'></span> <span>Ehsanul</span> Haque</h1>
                    <p className='pt-6 md:text-[20px] lg:text-[24px] font-semibold font-syne'>Product Designer | Based in Bangladesh</p>
                    <div className='flex gap-[13px] sm:gap-[17px] pt-[30px] '>
                        <Link href={"/contacts"} className='flex gap-2 font-bold bg-black py-5 px-5 sm:py-5 sm:px-8 rounded-lg  text-white cursor-pointer hover:bg-transparent hover:text-black  border ' >Let’s Talk <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </Link>

                        <Link href={"/project"} className='flex gap-2 font-bold bg-black py-5 px-5 sm:py-5 sm:px-8 rounded-lg  text-white cursor-pointer hover:bg-transparent hover:text-black border '>My Work <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </Link>
                    </div>
                    <div className='flex flex-wrap gap-6 pt-[80px] lg:pt-[120px] items-center'>
                        <div className=' flex'>
                            <span className='text-[44px] font-bold leading-[54px]  font-syne '>1.2k+</span>
                            <h5 className='text-[18px] pt-[13px] leading-[28px] pl-[12px] font-DM_Sans '>Worldwide client</h5>
                            <span className=' flex items-center pl-[12px]'>|</span>
                        </div>
                        <div className='flex gap-4 md:pl-[32px] '>
                            <a href="https://www.facebook.com/profile.php?id=100008485058668">
                                <FaFacebook className='w-[24px] h-[24px] hover:text-[#FFB646]' />
                            </a>
                            
                            <a href='https://www.linkedin.com/in/mohd-ehsanul-haque/'>
                            <FaLinkedinIn className='w-[24px] h-[24px] hover:text-[#FFB646]' />
                            </a>

                             <a href='https://www.instagram.com/r_o_u_d_r_a_a_a?igsh=OGYwNGpzaWx2Z294'>
                            <FaInstagram className='w-[24px] h-[24px] hover:text-[#FFB646]' />
                            </a>

                            <a href='https://github.com/Ehsanul-haque71'>
                             <FaGithub className='w-[24px] h-[24px] hover:text-[#FFB646]' />
                            </a>
                           
                        </div>
                    </div>
                </div>


                {/* right */}
                <div className='hidden md:block md:w-[435px] lg:w-[600px] absolute top-0 right-0 z-10'>
                    <Image className='w-full' src={hero} alt='Hero_item' />
                </div>
            </div>
        </section>

    )
}

export default Hero





// "use client";
// import React from "react";
// import { MdArrowOutward } from "react-icons/md";
// import { FaFacebook, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import Image from "next/image";
// import Man from "@/app/Assets/man.png";
// import Link from "next/link";

// const Hero = () => {
//   useGSAP(() => {
//     gsap.from(".left", {
//       x: -50,
//       duration: 2,
//       autoAlpha: 0,
//     });
//   });

//   return (
//     <section className="bg-[#FFE9D9] py-20 md:pt-[140px] md:pb-[126px]">
//       <div className="container flex flex-col md:flex-row items-center justify-between">
//         {/* Left Section */}
//         <div className="left pl-[20px] lg:pl-0 md:w-1/2">
//           <h3 className="text-[25px] lg:text-[32px] font-semibold flex items-center gap-3 md:gap-6">
//             <hr className="w-[55px] md:w-[60px] lg:w-[65px] text-[#080808]" /> Hello, I’m✌
//           </h3>
//           <h1 className="relative font-syne leading-[1.2] font-bold text-[60px] md:text-[70px] lg:text-[113px] pt-2 max-w-[498px]">
//             <span className="absolute w-[70px] h-[70px] rounded-full bg-yellow-400 -z-10 top-[18px] md:top-[20px] lg:top-[25px] -left-[2px] md:-left-[0px] lg:-left-[5px]"></span>
//             Ehsanul Haque
//           </h1>
//           <p className="pt-6 md:text-[20px] lg:text-[24px] font-semibold font-syne">
//             Product Designer | Based in Bangladesh
//           </p>
//           <div className="flex gap-[13px] sm:gap-[17px] pt-[30px]">
//             <Link
//               href={"/contacts"}
//               className="flex gap-2 font-bold bg-black py-5 px-5 sm:py-5 sm:px-8 rounded-lg text-white cursor-pointer hover:bg-transparent hover:text-black border"
//             >
//               Let’s Talk <MdArrowOutward className="w-6 h-6" />
//             </Link>
//             <Link
//               href={"/project"}
//               className="flex gap-2 font-bold bg-black py-5 px-5 sm:py-5 sm:px-8 rounded-lg text-white cursor-pointer hover:bg-transparent hover:text-black border"
//             >
//               My Work <MdArrowOutward className="w-6 h-6" />
//             </Link>
//           </div>
//           <div className="flex flex-wrap gap-6 pt-[80px] lg:pt-[120px] items-center">
//             <div className="flex">
//               <span className="text-[44px] font-bold leading-[54px] font-syne">1.2k+</span>
//               <h5 className="text-[18px] pt-[13px] leading-[28px] pl-[12px] font-DM_Sans">
//                 Worldwide client
//               </h5>
//               <span className="flex items-center pl-[12px]">|</span>
//             </div>
//             <div className="flex gap-4 md:pl-[32px]">
//               <a href="https://www.facebook.com/profile.php?id=100008485058668">
//                 <FaFacebook className="w-[24px] h-[24px] hover:text-[#FFB646]" />
//               </a>
//               <a href="https://www.linkedin.com/in/mohd-ehsanul-haque/">
//                 <FaLinkedinIn className="w-[24px] h-[24px] hover:text-[#FFB646]" />
//               </a>
//               <a href="https://www.instagram.com/r_o_u_d_r_a_a_a?igsh=OGYwNGpzaWx2Z294">
//                 <FaInstagram className="w-[24px] h-[24px] hover:text-[#FFB646]" />
//               </a>
//               <a href="https://github.com/Ehsanul-haque71">
//                 <FaGithub className="w-[24px] h-[24px] hover:text-[#FFB646]" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="hidden md:block md:w-1/2 relative">
//           <div className="relative">
//             <Image
//               src={Man}
//               alt="Hero_item"
//               className="w-full h-auto object-contain"
//               style={{ maxHeight: "600px" }} // Adjust max height as needed
//             />
//             {/* Optional: Add a background shape like in the design */}
//             <div className="absolute inset-0 bg-yellow-400 rounded-tl-[100px] z-[-1]"></div>
//           </div>
//           {/* Contact Me Button */}
//           <div className="absolute bottom-0 right-0 bg-yellow-400 rounded-full p-4 flex items-center gap-2">
//             <span className="font-bold">Contact Me</span>
//             <MdArrowOutward className="w-6 h-6" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// "use client";
// import React from "react";
// import { MdArrowOutward } from "react-icons/md";
// import { FaFacebook, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import Image from "next/image";
// import Man from "@/app/Assets/man.png";
// import Link from "next/link";

// const Hero = () => {
//   useGSAP(() => {
//     gsap.from(".left", {
//       x: -50,
//       duration: 2,
//       autoAlpha: 0,
//     });
//   });

//   return (
//     <section className="bg-[#FFE9D9] py-20 md:pt-[140px] md:pb-[126px] relative">
//       <div className="container flex flex-col md:flex-row items-center justify-between">
//         {/* Left Section */}
//         <div className="left pl-[20px] lg:pl-0 md:w-1/2 z-10">
//           <h3 className="text-[25px] lg:text-[32px] font-semibold flex items-center gap-3 md:gap-6">
//             <hr className="w-[55px] md:w-[60px] lg:w-[65px] text-[#080808]" /> Hello, I’m✌
//           </h3>
//           <h1 className="relative font-syne leading-[1.2] font-bold text-[60px] md:text-[70px] lg:text-[113px] pt-2 max-w-[498px]">
//             <span className="absolute w-[70px] h-[70px] rounded-full bg-yellow-400 -z-10 top-[18px] md:top-[20px] lg:top-[25px] -left-[2px] md:-left-[0px] lg:-left-[5px]"></span>
//             Ehsanul Haque
//           </h1>
//           <p className="pt-6 md:text-[20px] lg:text-[24px] font-semibold font-syne">
//             Product Designer | Based in Bangladesh
//           </p>
//           <div className="flex gap-[13px] sm:gap-[17px] pt-[30px]">
//             <Link
//               href={"/contacts"}
//               className="flex gap-2 font-bold bg-black py-5 px-5 sm:py-5 sm:px-8 rounded-lg text-white cursor-pointer hover:bg-transparent hover:text-black border"
//             >
//               Let’s Talk <MdArrowOutward className="w-6 h-6" />
//             </Link>
//             <Link
//               href={"/project"}
//               className="flex gap-2 font-bold bg-black py-5 px-5 sm:py-5 sm:px-8 rounded-lg text-white cursor-pointer hover:bg-transparent hover:text-black border"
//             >
//               My Work <MdArrowOutward className="w-6 h-6" />
//             </Link>
//           </div>
//           <div className="flex flex-wrap gap-6 pt-[80px] lg:pt-[120px] items-center">
//             <div className="flex">
//               <span className="text-[44px] font-bold leading-[54px] font-syne">1.2k+</span>
//               <h5 className="text-[18px] pt-[13px] leading-[28px] pl-[12px] font-DM_Sans">
//                 Worldwide client
//               </h5>
//               <span className="flex items-center pl-[12px]">|</span>
//             </div>
//             <div className="flex gap-4 md:pl-[32px]">
//               <a href="https://www.facebook.com/profile.php?id=100008485058668">
//                 <FaFacebook className="w-[24px] h-[24px] hover:text-[#FFB646]" />
//               </a>
//               <a href="https://www.linkedin.com/in/mohd-ehsanul-haque/">
//                 <FaLinkedinIn className="w-[24px] h-[24px] hover:text-[#FFB646]" />
//               </a>
//               <a href="https://www.instagram.com/r_o_u_d_r_a_a_a?igsh=OGYwNGpzaWx2Z294">
//                 <FaInstagram className="w-[24px] h-[24px] hover:text-[#FFB646]" />
//               </a>
//               <a href="https://github.com/Ehsanul-haque71">
//                 <FaGithub className="w-[24px] h-[24px] hover:text-[#FFB646]" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="hidden md:block md:w-1/2 relative">
//           <div className="relative w-full h-[600px]">
//             <Image
//               src={Man}
//               alt="Hero_item"
//               fill
//               className="object-cover rounded-tl-[100px]"
//               style={{ zIndex: 0 }}
//             />
//             {/* Yellow background shape */}
//             <div className="absolute inset-0 bg-yellow-400 rounded-tl-[100px] -z-10 transform translate-x-[-20%] translate-y-[-10%] w-[120%] h-[120%]"></div>
//           </div>
//           <div className="absolute bottom-0 right-0 bg-yellow-400 rounded-full p-4 flex items-center gap-2">
//             <span className="font-bold">Contact Me</span>
//             <MdArrowOutward className="w-6 h-6" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;