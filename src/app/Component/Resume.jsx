import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Resume = () => {
    return (
        <div className=' bg-[#0808080A] pt-[120px] pb-[120px]'>
            <div className='container  grid grid-cols-2'>
                {/* left */}
                <div>
                    <p className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne'>Resume</p>
                    <h2 className='leading-[72px] text-[64px] font-bold font-syne pt-2 relative after:size-[65px] after:rounded-full after:bg-[#FF9330] after:absolute after:top-[12px] after:left-[5px] after:z-[-2]' > <span className='absolute z-[13]'></span> <span>All </span>over my details find here...</h2>
                    <div className='pt-[18px]'>
                        <button className="bg-white text-black w-[416px] h-[56px] px-8 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black border mb-2">About me <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>
                        <button className="bg-white text-black w-[416px] h-[56px] px-8 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black border mb-2">Experience <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>
                        <button className="bg-white text-black w-[416px] h-[56px] px-8 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black border mb-2">Education <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>
                        <button className="bg-white text-black w-[416px] h-[56px] px-8 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black border mb-2">Skills <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>
                        <button className="bg-white text-black w-[416px] h-[56px] px-8 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-white hover:bg-black border ">Awards <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>
                    </div>
                </div>
                {/* right */}
                <div>
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
                            <span className='text-[24px] font-syne leading-[32px] font-bold'>hello@henry.com</span>
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
                            <span className='text-[24px] font-syne leading-[32px] font-bold'>Mohd. Ehsanul Haque
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
    )
}

export default Resume
