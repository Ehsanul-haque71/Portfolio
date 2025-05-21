import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import client from "@/app/Assets/client.svg";
import Bdetails from "@/app/Assets/blog.png";
import leftImg from "@/app/Assets/Bdetails_left.png"
import rightImg from "@/app/Assets/Bdetails_right.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Blog1 from '@/app/Assets/Blog1.png';
import Blog2 from '@/app/Assets/Blog2.png';
import Blog3 from '@/app/Assets/Blog3.png';
import Blog4 from '@/app/Assets/Blog4.png';
import DetailsMe from '@/app/details/_components/Details';

const BlogDetails = () => {
    return (
        <>
            <section className='bg-[#FFE9D9]'>
                <div className='container  '>
                    <div className='max-w-[1075px] mx-auto pb-[185px] md:pb-[250px] lg:pb-[382px] relative'>
                        <div className='font-bold font-syne text-[15px] sm:text-[23px] md:text-[44px] leading-[1.2] pt-[135px] md:pt-[160px]'>
                            <h1 className='mr-[100px]'>Designing the perfect feature
                                comparison table</h1>
                        </div>

                        {/* image */}
                        <div className='absolute bottom-0 left-0 translate-y-[50%]'>
                            <Image src={Bdetails} alt='img' />
                        </div>
                    </div>
                </div>
            </section>



            <section className='bg-white pt-[195px] sm:pt-[250px] lg:pt-[340px]'>
                <div className='container'>
                    <div className='max-w-[1075px] mx-auto'>
                        <div className='flex gap-[24px] pb-[32px]'>
                            <div className='flex gap-[12px]' >
                                <div className='flex '>
                                    <Image src={client} alt='client' />
                                </div>
                                <div >
                                    <p className='pb-[8px] text-[14px] text-black leading-[20px]'>Written by</p>
                                    <p className='font-DM_Sans font-bold text-[15px] leading-4'>Ehsanul Haque</p>
                                </div>
                            </div>

                            <div >
                                <p className='pb-[8px] text-[14px] text-black leading-[20px]'>Category</p>
                                <p className='font-DM_Sans font-bold text-[15px] leading-4'>User Experience</p>
                            </div>

                            <div >
                                <p className='pb-[8px] text-[14px] text-black leading-[20px]'>Date</p>
                                <p className='font-DM_Sans font-bold text-[15px] leading-4'>02/08/2023</p>
                            </div>
                        </div>
                        <hr className='text-[#0808081A] ' />

                        <div>
                            {/* About the position */}
                            <div className='py-[48px]'>
                                <h2 className=' font-bold font-syne text-[19px] md:text-[24px] leading-[1.3]'>About the position</h2>
                                <p className='pt-[24px] font-DM_Sans text-[18px] leading-[28px] text-[#08080899]'>
                                    Everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.
                                </p>

                                <p className='pt-[35px] font-DM_Sans text-[13px] md:text-[18px] leading-[1.2] text-[#08080899]'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself</p>

                                <p className='pt-[40px] font-DM_Sans text-[13px] md:text-[18px] leading-[1.2] text-[#08080899]'>
                                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.
                                </p>
                            </div>

                            {/* Image */}
                            <div className='grid grid-cols-2 gap-[10px] md:gap-[20px] pb-[48px]'>
                                <Image src={leftImg} alt='left' />
                                <Image src={rightImg} alt='left' />
                            </div>

                            {/* Learning the basics */}
                            <div>
                                <h2 className=' font-bold font-syne  text-[19px] md:text-[24px] leading-[1.3]'>1. Learning the basics</h2>
                                <p className='pt-[24px] font-DM_Sans text-[13px] md:text-[18px] leading-[1.2] text-[#08080899]'>Everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.</p>
                                <p className='pt-[40px] font-DM_Sans text-[13px] md:text-[18px] leading-[1.2] text-[#08080899]'>
                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure 
                                </p>
                            </div>

                            <div className='pt-[48px]'>
                                <h2 className=' font-bold font-syne text-[19px] md:text-[24px] leading-[1.3]'>2. Learning the basics</h2>
                                <p className='pt-[24px] font-DM_Sans text-[13px] md:text-[18px] leading-[1.2] text-[#08080899]'>Everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.</p>
                                <p className='pt-[40px] font-DM_Sans text-[13px] md:text-[18px] leading-[1.2] text-[#08080899]'>
                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself 
                                </p>
                            </div>

                            {/* icons */}
                            <div className='pt-[48px] '>
                                <div className='flex items-center justify-between '>
                                    <div className='flex gap-[24px]'>
                                        <p className='font-DM_Sans text-[18px] leading-7 text-[#080808CC]'>share:</p>
                                        <div className='flex items-center gap-4 cursor-pointer'>
                                            <span className='hover:text-[#FF9330]'><FaFacebookF /></span>
                                            <span className='hover:text-[#FF9330]'><FaTwitter /></span>
                                            <span className='hover:text-[#FF9330]'><IoLogoWhatsapp /></span>
                                            <span className='hover:text-[#FF9330]'><FaLinkedinIn /></span>
                                            <span className='hover:text-[#FF9330]'><FaLink /></span>
                                            <span className='hover:text-[#FF9330]'><FaRegHeart /></span>
                                        </div>
                                    </div>

                                    <div className='flex gap-2 '>
                                        <Link href={"/project"} className="bg-transparent text-[#080808] w-[56px] h-[28px] px-[16px] py-[6px] rounded-full flex items-center justify-center font-DM_Sans cursor-pointer hover:text-white hover:bg-black border border-[#080808] ">App</Link>

                                        <Link href={"/project"} className=' bg-transparent text-[#080808] w-[56px] h-[28px] px-[122px] py-[6px] rounded-full flex items-center justify-center font-DM_Sans cursor-pointer hover:text-white hover:bg-black border border-[#080808]'>DEVELOPMENT</Link>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>




                <div className='container py-[120px]'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne'>Blog</p>
                        <h2 className='leading-[72px] text-[64px] font-bold font-syne pt-[10px] relative after:absolute after:size-[65px] after:bg-[#FF9330] z-[7] after:z-[-7] after:top-[17px] after:right-[65px] after:rounded-full'>Related post</h2>
                    </div>
                    <div className='grid grid-cols-4 gap-6'>
                        {/* blog_1 */}
                        <div className='pt-[48px]'>
                            <div>
                                <Image src={Blog1} alt='logo' />
                            </div>
                            <div className='flex gap-3 pt-6 pb-3'>
                                <div className='flex items-center gap-[15px]'>
                                    <span className='flex'><hr className='rounded-full w-[10px] h-[10px] bg-black' /></span>
                                    <p className='text-[14px] text-black leading-[20px]'>UI Design</p>
                                </div>
                                <div className='flex items-center gap-[15px]'>
                                    <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FF9330] border-[#FF9330]' /></span>
                                    <p className='text-[14px] text-[#FF9330] leading-[20px]'>03 May 2019</p>
                                </div>
                            </div>

                            <Link href={"/project"} className='flex items-end justify-between cursor-pointer hover:text-[#FF9330] '>
                                <div >
                                    <h3 className='font-syne text-2xl leading-8 font-bold  '>Right-lo-left behind development in mobile web design</h3>
                                </div>
                                <span ><MdArrowOutward className='w-6 h-6' /></span>
                            </Link>
                        </div>

                        {/* blog_2 */}
                        <div className='pt-[88px]'>
                            <div>
                                <Image src={Blog2} alt='logo' />
                            </div>
                            <div className='flex gap-3 pt-6 pb-3'>
                                <div className='flex items-center gap-[15px]'>
                                    <span className='flex'><hr className='rounded-full w-[10px] h-[10px] bg-black' /></span>
                                    <p className='text-[14px] text-black leading-[20px]'>UI Design</p>
                                </div>
                                <div className='flex items-center gap-[15px]'>
                                    <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FF9330] border-[#FF9330]' /></span>
                                    <p className='text-[14px] text-[#FF9330] leading-[20px]'>03 May 2019</p>
                                </div>
                            </div>

                            <Link href={"/blogdetails"} className='flex items-end justify-between cursor-pointer hover:text-[#FF9330]'>
                                <div>
                                    <h3 className='font-syne text-2xl leading-8 font-bold  '>Connect craft: Reading the smart experience</h3>
                                </div>
                                <span ><MdArrowOutward className='w-6 h-6' /></span>
                            </Link>
                        </div>


                        {/* blog_3 */}
                        <div className='pt-[48px]'>
                            <div>
                                <Image src={Blog3} alt='logo' />
                            </div>
                            <div className='flex gap-3 pt-6 pb-3'>
                                <div className='flex items-center gap-[15px]'>
                                    <span className='flex'><hr className='rounded-full w-[10px] h-[10px] bg-black' /></span>
                                    <p className='text-[14px] text-black leading-[20px]'>UI Design</p>
                                </div>
                                <div className='flex items-center gap-[15px]'>
                                    <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FF9330] border-[#FF9330]' /></span>
                                    <p className='text-[14px] text-[#FF9330] leading-[20px]'>03 May 2019</p>
                                </div>
                            </div>

                            <Link href={"/blogdetails"} className='flex items-end justify-between cursor-pointer hover:text-[#FF9330] '>
                                <div>
                                    <h3 className='font-syne text-2xl leading-8 font-bold  '>Ecoglow: Sustainable skincare a brighter tomorrow</h3>
                                </div>
                                <span ><MdArrowOutward className='w-6 h-6' /></span>
                            </Link>
                        </div>


                        {/* blog_4 */}
                        <div className='pt-[88px]'>
                            <div>
                                <Image src={Blog4} alt='logo' />
                            </div>
                            <div className='flex gap-3 pt-6 pb-3'>
                                <div className='flex items-center gap-[15px]'>
                                    <span className='flex'><hr className='rounded-full w-[10px] h-[10px] bg-black' /></span>
                                    <p className='text-[14px] text-black leading-[20px]'>UI Design</p>
                                </div>
                                <div className='flex items-center gap-[15px]'>
                                    <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FF9330] border-[#FF9330]' /></span>
                                    <p className='text-[14px] text-[#FF9330] leading-[20px]'>03 May 2019</p>
                                </div>
                            </div>

                            <Link href={"/blogdetails"} className='flex items-end justify-between cursor-pointer hover:text-[#FF9330] '>
                                <div>
                                    <h3 className='font-syne text-2xl leading-8 font-bold  '>Right-lo-left behind development in mobile web design</h3>
                                </div>
                                <span ><MdArrowOutward className='w-6 h-6' /></span>
                            </Link>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default BlogDetails
