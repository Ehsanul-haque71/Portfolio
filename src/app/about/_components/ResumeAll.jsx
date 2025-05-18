"use client"

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link'
import resumeImg from "@/app/Assets/resumeImg.svg"
import { MdArrowOutward } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import webby from "@/app/Assets/webbyAward.svg";
// import {Exp} from "@/app/Component/Resume/Experience"

const ResumeAll = () => {
    const [Component, setComponent] = useState("AboutMee")
    return (
        <section className=' bg-[#0808080A]'>
            <div className='container '>
                <div className='pt-[80px] pb-[60px] md:py-[100px]'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='leading-[1.6] text-[17px] lg:text-[20px] text-[#FF9330] font-bold font-syne items-center'>Resume</p>
                        <h1 className='leading-[1.1] text-[26px] lg:text-[63px] font-bold font-syne pt-[10px] relative after:size-[35px] lg:after:size-[65px] after:rounded-full after:bg-[#FF9330] after:absolute after:top-[7px] sm:after:top-[9px] lg:after:top-[12px] after:left-[0px] lg:after:right-[37px] after:z-[-2] z-[13]'>All over my details find here...</h1>
                    </div>

                    <div className='pt-[32px] pb-[56px] flex flex-wrap gap-[10px] md:gap-[16px] items-center justify-center'>
                        <button onClick={() => setComponent("AboutMee")} className="bg-[#0808080A] text-black min-w-[135px] md:max-w-[152px] min-h-[50px] md:max-h-[56px] px-6 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black mb-2">About me <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>

                        <button onClick={() => setComponent("EXperiences")} className="bg-[#0808080A] text-black min-w-[135px] md:max-w-[152px] min-h-[50px] md:max-h-[56px] px-6 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black mb-2">Experience <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>

                        <button onClick={() => setComponent("EDucation")} className="bg-[#0808080A] text-black min-w-[135px] md:max-w-[152px] min-h-[50px] md:max-h-[56px] px-6 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black mb-2">Education <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>

                        <button onClick={() => setComponent("SKills")} className="bg-[#0808080A]  text-black min-w-[135px] md:max-w-[152px] min-h-[50px] md:max-h-[56px] px-6 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black mb-2">Skills <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>

                        <button onClick={() => setComponent("AWards")} className="bg-[#0808080A]  text-black min-w-[135px] md:max-w-[152px] min-h-[50px] md:max-h-[56px] px-6 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black ">Awards <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>

                    </div>

                    {
                        Component === "AboutMee" && <AboutMee />
                    }

                    {
                        Component === "EXperiences" && <EXperiences />
                    }

                    {
                        Component === "EDucation" && <EDucation />
                    }

                    {
                        Component === "SKills" && <SKills />
                    }

                    {
                        Component === "AWards" && <AWards />
                    }

                </div>
            </div>
        </section>

        // <Resume/>
    )
}

export default ResumeAll

const AboutMee = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[35px] md:gap-[120px] lg:gap-[134px]'>
            <div>
                <Image src={resumeImg} alt='img' />
            </div>
            <div>
                <div >
                    <div className='flex pb-[16px]'>
                        <p className='text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[110px] pr-[40px]'>Name</p>
                        <span className='md:text-[16px] lg:text-[24px] font-syne leading-[32px] font-bold'> Ehsanul Haque</span>
                    </div>
                    <div className='flex pb-[16px]'>
                        <p className='text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[110px] pr-[40px]'>Nationality</p>
                        <span className='md:text-[16px] lg:text-[24px] font-syne leading-[32px] font-bold'>Bangladeshi</span>
                    </div>
                    <div className='flex pb-[16px]'>
                        <p className='text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[110px] pr-[40px]'>phone</p>
                        <span className='md:text-[16px] lg:text-[24px] font-syne leading-[32px] font-bold'>+8801674087681</span>
                    </div>
                    <div className='flex pb-[16px]'>
                        <p className='text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[110px] pr-[40px]'>email</p>
                        <span className='md:text-[16px] lg:text-[24px] font-syne leading-[32px] font-bold'>hello@ehsanul.com</span>
                    </div>
                    <div className='flex pb-[16px]'>
                        <p className='text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[110px] pr-[40px]'>experience</p>
                        <span className='md:text-[16px] lg:text-[24px] font-syne leading-[32px] font-bold'>12+ years</span>
                    </div>
                    <div className='flex pb-[16px]'>
                        <p className='text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[110px] pr-[40px]'>Freelance</p>
                        <span className='md:text-[16px] lg:text-[24px] font-syne leading-[32px] font-bold'>Available</span>
                    </div>
                    <div className='flex pb-[16px]'>
                        <p className='text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[110px] pr-[40px]'>Linkedin</p>
                        <span className='md:text-[16px] lg:text-[24px] font-syne leading-[32px] font-bold '>Mohd. Ehsanul Haque
                        </span>
                    </div>
                    <div className='flex pb-[16px]'>
                        <p className='text-[18px] leading-[28px] font-normal font-DM_Sans text-[#08080899] w-[110px] pr-[40px] '>Language</p>
                        <span className='md:text-[16px] lg:text-[24px] font-syne leading-[32px] font-bold'>English,Bangla</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const EXperiences = () => {
    return (
        <div className=''>
            <p className='font-bold font-syne text-[32px] leading-8 pb-[24px]'>Experience</p>
            <div className='grid grid-cols-2 items-center justify-between gap-4'>
                <div className='bg-[#0808080A] rounded-2xl hover:bg-white px-[24px] pb-[24px] pt-[30px] '>
                    <div>
                        <p className='text-[14px] leading-5 text-[#080808]'>03/216 – Running</p>
                    </div>
                    <div className='pt-[32px]'>
                        <div className='flex items-center gap-[8px]'>
                            <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FFB646] border-[#FFB646]' /></span>
                            <h3 className='text-[14px] leading-7 font-DM_Sans'>Axtra Inco.</h3>
                        </div>
                        <h2 className='font-bold font-syne text-[24px] leading-8'>Lead digital marketer</h2>
                    </div>
                </div>
                <div className='bg-[#0808080A] rounded-2xl hover:bg-white px-[24px] pb-[24px] pt-[30px] '>
                    <div>
                        <p className='text-[14px] leading-5 text-[#080808]'>03/216 – Running</p>
                    </div>
                    <div className='pt-[32px]'>
                        <div className='flex items-center gap-[8px]'>
                            <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FFB646] border-[#FFB646]' /></span>
                            <h3 className='text-[14px] leading-7 font-DM_Sans'>Axtra Inco.</h3>
                        </div>
                        <h2 className='font-bold font-syne text-[24px] leading-8'>Lead digital marketer</h2>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 items-center justify-between gap-4 pt-[20px]'>
                <div className='bg-[#0808080A] rounded-2xl hover:bg-white px-[24px] pb-[24px] pt-[30px] '>
                    <div>
                        <p className='text-[14px] leading-5 text-[#080808]'>03/216 – Running</p>
                    </div>
                    <div className='pt-[32px]'>
                        <div className='flex items-center gap-[8px]'>
                            <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FFB646] border-[#FFB646]' /></span>
                            <h3 className='text-[14px] leading-7 font-DM_Sans'>Axtra Inco.</h3>
                        </div>
                        <h2 className='font-bold font-syne text-[24px] leading-8'>Lead digital marketer</h2>
                    </div>
                </div>
                <div className='bg-[#0808080A] rounded-2xl hover:bg-white px-[24px] pb-[24px] pt-[30px] '>
                    <div>
                        <p className='text-[14px] leading-5 text-[#080808]'>03/216 – Running</p>
                    </div>
                    <div className='pt-[32px]'>
                        <div className='flex items-center gap-[8px]'>
                            <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FFB646] border-[#FFB646]' /></span>
                            <h3 className='text-[14px] leading-7 font-DM_Sans'>Axtra Inco.</h3>
                        </div>
                        <h2 className='font-bold font-syne text-[24px] leading-8'>Lead digital marketer</h2>
                    </div>
                </div>
            </div>
        </div>
        // <Exp/>
    )
}

const EDucation = () => {
    return (
        <div>
            <p className='font-bold font-syne text-[32px] leading-8 pb-[24px]'>Education</p>
            <div className='gap-[25px] flex flex-col'>
                <div className='bg-[#0808080A] rounded-2xl hover:bg-white px-[24px] pb-[24px] pt-[30px] '>
                    <div className='flex gap-[104px]'>
                        <div>
                            <p>01/2020 – 07/2025</p>
                        </div>
                        <div >
                            <div className='flex items-center gap-[8px]'>
                                <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FFB646] border-[#FFB646]' /></span>
                                <h3 className='text-[14px] leading-7 font-DM_Sans'>Dhaka Commerce College</h3>
                            </div>
                            <h2 className='font-bold font-syne text-[24px] leading-8'>BBA in Accounting</h2>
                        </div>
                    </div>

                </div>

                <div className='bg-[#0808080A] rounded-2xl hover:bg-white px-[24px] pb-[24px] pt-[30px]'>
                    <div className='flex gap-[104px]'>
                        <div>
                            <p>06/2017 – 04/2019</p>
                        </div>
                        <div >
                            <div className='flex items-center gap-[8px]'>
                                <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FFB646] border-[#FFB646]' /></span>
                                <h3 className='text-[14px] leading-7 font-DM_Sans'>Madaripur Govt. College</h3>
                            </div>
                            <h2 className='font-bold font-syne text-[24px] leading-8'>Business Studies</h2>
                        </div>
                    </div>

                </div>

                <div className='bg-[#0808080A] rounded-2xl hover:bg-white px-[24px] pb-[24px] pt-[30px]'>
                    <div className='flex gap-[104px]'>
                        <div>
                            <p>01/2009 – 03/2017</p>
                        </div>
                        <div >
                            <div className='flex items-center gap-[8px]'>
                                <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FFB646] border-[#FFB646]' /></span>
                                <h3 className='text-[14px] leading-7 font-DM_Sans'>United Islamia Govt. High School</h3>
                            </div>
                            <h2 className='font-bold font-syne text-[24px] leading-8'>Business Studies</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        // <Exp/>
    )
}

const SKills = () => {
    return (
        <div>
            <div>
                <h2 className='font-bold font-syne text-[32px] leading-8 pb-[24px]'>Skills</h2>
                <div className='grid grid-cols-3 gap-[16px] mb-[20px]'>
                    <div className='bg-[#0808080A] rounded-2xl hover:bg-white py-[50px] pl-[20px] pr-[70px] '>
                        <div className='flex gap-[16px]'>
                            <div>
                                <VscVscode className='w-[32px] h-[32px]' />
                            </div>
                            <div>
                                <p className='font-bold text-[20px] leading-7 font-syne'>React JS</p>
                                <p className='text-[14px] leading-5 text-[#080808CC]'>(90%)</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#0808080A] rounded-2xl hover:bg-white py-[50px] pl-[20px] pr-[70px] '>
                        <div className='flex gap-[16px]'>
                            <div>
                                <VscVscode className='w-[32px] h-[32px]' />
                            </div>
                            <div>
                                <p className='font-bold text-[20px] leading-7 font-syne'>React JS</p>
                                <p className='text-[14px] leading-5 text-[#080808CC]'>(90%)</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#0808080A] rounded-2xl hover:bg-white py-[50px] pl-[20px] pr-[70px]'>
                        <div className='flex gap-[16px]'>
                            <div>
                                <VscVscode className='w-[32px] h-[32px]' />
                            </div>
                            <div>
                                <p className='font-bold text-[20px] leading-7 font-syne'>React JS</p>
                                <p className='text-[14px] leading-5 text-[#080808CC]'>(90%)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-[16px]'>
                    <div className='bg-[#0808080A] rounded-2xl hover:bg-white py-[50px] pl-[20px] pr-[70px] '>
                        <div className='flex gap-[16px]'>
                            <div>
                                <VscVscode className='w-[32px] h-[32px]' />
                            </div>
                            <div>
                                <p className='font-bold text-[20px] leading-7 font-syne'>React JS</p>
                                <p className='text-[14px] leading-5 text-[#080808CC]'>(90%)</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#0808080A] rounded-2xl hover:bg-white py-[50px] pl-[20px] pr-[70px] '>
                        <div className='flex gap-[16px]'>
                            <div>
                                <VscVscode className='w-[32px] h-[32px]' />
                            </div>
                            <div>
                                <p className='font-bold text-[20px] leading-7 font-syne'>React JS</p>
                                <p className='text-[14px] leading-5 text-[#080808CC]'>(90%)</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#0808080A] rounded-2xl hover:bg-white py-[50px] pl-[20px] pr-[70px]'>
                        <div className='flex gap-[16px]'>
                            <div>
                                <VscVscode className='w-[32px] h-[32px]' />
                            </div>
                            <div>
                                <p className='font-bold text-[20px] leading-7 font-syne'>React JS</p>
                                <p className='text-[14px] leading-5 text-[#080808CC]'>(90%)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AWards = () => {
    return (
        <div>
            <div>
                <h2 className='font-bold font-syne text-[32px] leading-8 pb-[24px]'>Awards</h2>
                <div className='flex flex-col gap-[20px]'>
                    <div className='grid grid-cols-2 items-center justify-between gap-4'>
                        <div className='bg-[#0808080A] rounded-2xl hover:bg-white px-[24px] pb-[24px] pt-[30px] '>
                            <div className='flex justify-between'>
                                <div>
                                    <Image src={webby} alt='award' />
                                </div>

                                <p className='text-[14px] leading-5 text-[#080808]'>2018</p>
                            </div>
                            <div className='pt-[32px]'>
                                <div className='flex items-center gap-[8px]'>
                                    <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FFB646] border-[#FFB646]' /></span>
                                    <h3 className='text-[14px] leading-7 font-DM_Sans pb-[4px]'>Winner</h3>
                                </div>
                                <h2 className='font-bold font-syne text-[24px] leading-8'>01X  Developer Award</h2>
                            </div>
                        </div>

                        <div className='bg-[#0808080A] rounded-2xl hover:bg-white px-[24px] pb-[24px] pt-[30px] '>
                            <div className='flex justify-between'>
                                <div>
                                    <Image src={webby} alt='award' />
                                </div>

                                <p className='text-[14px] leading-5 text-[#080808]'>2018</p>
                            </div>
                            <div className='pt-[32px]'>
                                <div className='flex items-center gap-[8px]'>
                                    <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FFB646] border-[#FFB646]' /></span>
                                    <h3 className='text-[14px] leading-7 font-DM_Sans pb-[4px]'>Winner</h3>
                                </div>
                                <h2 className='font-bold font-syne text-[24px] leading-8'>01X  Developer Award</h2>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 items-center justify-between gap-4'>
                        <div className='bg-[#0808080A] rounded-2xl hover:bg-white px-[24px] pb-[24px] pt-[30px] '>
                            <div className='flex justify-between'>
                                <div>
                                    <Image src={webby} alt='award' />
                                </div>

                                <p className='text-[14px] leading-5 text-[#080808]'>2018</p>
                            </div>
                            <div className='pt-[32px]'>
                                <div className='flex items-center gap-[8px]'>
                                    <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FFB646] border-[#FFB646]' /></span>
                                    <h3 className='text-[14px] leading-7 font-DM_Sans pb-[4px]'>Winner</h3>
                                </div>
                                <h2 className='font-bold font-syne text-[24px] leading-8'>01X  Developer Award</h2>
                            </div>
                        </div>

                        <div className='bg-[#0808080A] rounded-2xl hover:bg-white px-[24px] pb-[24px] pt-[30px] '>
                            <div className='flex justify-between'>
                                <div>
                                    <Image src={webby} alt='award' />
                                </div>

                                <p className='text-[14px] leading-5 text-[#080808]'>2018</p>
                            </div>
                            <div className='pt-[32px]'>
                                <div className='flex items-center gap-[8px]'>
                                    <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FFB646] border-[#FFB646]' /></span>
                                    <h3 className='text-[14px] leading-7 font-DM_Sans pb-[4px]'>Winner</h3>
                                </div>
                                <h2 className='font-bold font-syne text-[24px] leading-8'>01X  Developer Award</h2>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}