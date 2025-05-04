import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import resumeImg from "@/app/Assets/resumeImg.svg"
import { MdArrowOutward } from "react-icons/md";

const ResumeAll = () => {
    return (
        <section className=' bg-[#0808080A]'>
            <div className='container py-[100px]'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne items-center'>Resume</p>
                    <h1 className='leading-[72px] text-[64px] font-bold font-syne pt-[10px] relative after:size-[65px] after:rounded-full after:bg-[#FF9330] after:absolute after:top-[12px] after:right-[37px] after:z-[-2] z-[13]'>All over my details find here...</h1>
                </div>

                <div className='pt-[32px] pb-[56px] flex gap-[16px] items-center justify-center'>
                    <Link href={'/about'} className="bg-[#0808080A] text-black w-[152px] h-[56px] px-6 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black mb-2">About me <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </Link>

                    <Link href={"/"} className="bg-[#0808080A] text-black w-[152px] h-[56px] px-6 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black mb-2">Experience <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </Link>

                    <Link href={"/"} className="bg-[#0808080A] text-black w-[152px] h-[56px] px-6 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black mb-2">Education <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </Link>

                    <Link href={"/"} className="bg-[#0808080A] text-black w-[152px] h-[56px] px-6 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black mb-2">Skills <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </Link>

                    <Link href={"/"} className="bg-[#0808080A] text-black w-[152px] h-[56px] px-6 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black ">Awards <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </Link>

                </div>

                <div className='flex justify-between'>
                    <div>
                        <Image src={resumeImg} alt='img' />
                    </div>
                    <div>
                        <div >
                            <h3 className=' text-[32px] font-semibold flex items-center gap-6 font-syne'> Product Designer</h3>
                            <p className='text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[636px] pt-[24px]'>
                                Ehsanul Haque, <span className='text-black'>Product Designer</span>, based in Bangladesh. That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for,<br></br> <br></br>
                                but words that truly land with those that read them, calling your audience in and making them want more.
                            </p>
                            <div className='pt-[56px]'>
                                <div className='flex pb-[16px]'>
                                    <p className='text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[110px] pr-[40px]'>Name</p>
                                    <span className='text-[24px] font-syne leading-[32px] font-bold'> Ehsanul Haque</span>
                                </div>
                                <div className='flex pb-[16px]'>
                                    <p className='text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[110px] pr-[40px]'>Nationality</p>
                                    <span className='text-[24px] font-syne leading-[32px] font-bold'>Bangladeshi</span>
                                </div>
                                <div className='flex pb-[16px]'>
                                    <p className='text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[110px] pr-[40px]'>phone</p>
                                    <span className='text-[24px] font-syne leading-[32px] font-bold'>+(2) 870 174 302</span>
                                </div>
                                <div className='flex pb-[16px]'>
                                    <p className='text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[110px] pr-[40px]'>email</p>
                                    <span className='text-[24px] font-syne leading-[32px] font-bold'>hello@eshanul.com</span>
                                </div>
                                <div className='flex pb-[16px]'>
                                    <p className='text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[110px] pr-[40px]'>experience</p>
                                    <span className='text-[24px] font-syne leading-[32px] font-bold'>12+ years</span>
                                </div>
                                <div className='flex pb-[16px]'>
                                    <p className='text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[110px] pr-[40px]'>Freelance</p>
                                    <span className='text-[24px] font-syne leading-[32px] font-bold'>Available</span>
                                </div>
                                <div className='flex pb-[16px]'>
                                    <p className='text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[110px] pr-[40px]'>Linkedin</p>
                                    <span className='text-[24px] font-syne leading-[32px] font-bold '>Mohd. Ehsanul Haque
                                    </span>
                                </div>
                                <div className='flex pb-[16px]'>
                                    <p className='text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[110px] pr-[40px] '>Language</p>
                                    <span className='text-[24px] font-syne leading-[32px] font-bold'>English,Bangla</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResumeAll
