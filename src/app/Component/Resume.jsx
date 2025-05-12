"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import star from "@/app/Assets/Star.svg";
import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import webby from "@/app/Assets/webbyAward.svg";


const Resume = () => {
    const [Component, setComponent] = useState("AboutMe")


    return (
        <div className=' bg-[#0808080A] pt-[100px] pb-[100px] '>
            <div className='container relative z-[1]'>
                <div className=' absolute z-[10] top-[580px] right-[-20px]'>
                    <Image className='block' src={star} alt='star_logo' />
                </div>
                <div className=' flex gap-[134px]'>
                    {/* left */}
                    <div>
                        <p className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne'>Resume</p>
                        <h2 className='leading-[72px] text-[64px] w-[416px] font-bold font-syne pt-2 relative after:size-[65px] after:rounded-full after:bg-[#FF9330] after:absolute after:top-[12px] after:left-[5px] after:z-[-2]' > <span className='absolute z-[13]'></span> <span>All </span>over my details find here...</h2>
                        <div className='pt-[18px]'>
                            <button onClick={() => setComponent("AboutMe")} className="bg-white text-black w-[416px] h-[56px] px-8 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black border mb-2">About me <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>

                            <button onClick={() => setComponent("Experience")} className="bg-white text-black w-[416px] h-[56px] px-8 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black border mb-2">Experience <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>

                            <button onClick={() => setComponent("Education")} className="bg-white text-black w-[416px] h-[56px] px-8 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black border mb-2">Education <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>

                            <button onClick={() => setComponent("Skills")} className="bg-white text-black w-[416px] h-[56px] px-8 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black border mb-2">Skills <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>

                            <button onClick={() => setComponent("Awards")} className="bg-white text-black w-[416px] h-[56px] px-8 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black border ">Awards <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>
                        </div>
                    </div>

                    {/* right */}
                    {
                        Component === "AboutMe" && <AboutMe />
                    }

                    {
                        Component === "Experience" && <Experience />
                    }

                    {
                        Component === "Education" && <Education />
                    }

                    {
                        Component === "Skills" && <Skills />
                    }

                    {
                        Component === "Awards" && <Awards />
                    }
                </div>
            </div>
        </div>
    )
}

export default Resume


const AboutMe = () => {
    return (
        <div className=''>
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
    )
}


const Experience = () => {
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
    )
}

const Education = () => {
    return (
        <div>
            <p className='font-bold font-syne text-[32px] leading-8 pb-[24px]'>Education</p>
            <div className='gap-[25px] flex flex-col'>
                <div className='bg-[#0808080A] rounded-2xl hover:bg-white px-[24px] pb-[24px] pt-[30px] w-[746px]'>
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

                <div className='bg-[#0808080A] rounded-2xl hover:bg-white px-[24px] pb-[24px] pt-[30px] w-[746px]'>
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

                <div className='bg-[#0808080A] rounded-2xl hover:bg-white px-[24px] pb-[24px] pt-[30px] w-[746px]'>
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
    )
}

const Skills = () => {
    return (
        <div>
            <div>
                <h2 className='font-bold font-syne text-[32px] leading-8 pb-[24px]'>Skills</h2>
                <div className='grid grid-cols-3 gap-[16px] mb-[20px]'>
                    <div className='bg-[#0808080A] rounded-2xl hover:bg-white py-[24px] pl-[20px] pr-[70px] '>
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

                    <div className='bg-[#0808080A] rounded-2xl hover:bg-white py-[24px] pl-[20px] pr-[70px] '>
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

                    <div className='bg-[#0808080A] rounded-2xl hover:bg-white py-[24px] pl-[20px] pr-[70px]'>
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
                    <div className='bg-[#0808080A] rounded-2xl hover:bg-white py-[24px] pl-[20px] pr-[70px] '>
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

                    <div className='bg-[#0808080A] rounded-2xl hover:bg-white py-[24px] pl-[20px] pr-[70px] '>
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

                    <div className='bg-[#0808080A] rounded-2xl hover:bg-white py-[24px] pl-[20px] pr-[70px]'>
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

const Awards = () => {
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