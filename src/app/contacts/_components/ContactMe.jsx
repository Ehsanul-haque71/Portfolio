import React from 'react'
import { MdOutlineMarkunread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdArrowOutward } from 'react-icons/md';
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContactMe = () => {
    return (
        <section className='bg-white'>
            <div className='container pt-[160px] pb-[120px]'>
                <div className='grid grid-cols-2'>
                    <div>
                        <p className='font-bold font-syne text-[20px] leading-7 text-[#FF9330]'>Contact</p>
                        <h2 className='font-bold font-syne text-[64px] leading-[72px] mr-[176px] relative after:absolute after:size-[69px] after:top-[1px] after:left-[-5px] z-[1] after:z-[-1] after:bg-[#FF9330] after:rounded-full'>Let’s connect</h2>

                        <div className='flex gap-[24px] pt-[48px] pb-[16px]'>
                            <div >
                                <MdOutlineMarkunread className='w-[32px] h-[32px]' />
                            </div>
                            <div>
                                <p className='font-DM_Sans text-[20px] leading-7 text-[#08080899]'>Email us</p>
                                <p className='font-bold font-syne text-[20px] leading-7'>hello@ehsanul.com</p>
                            </div>
                        </div>

                        <hr className=' text-[#08080866] max-w-[436px]' />

                        <div className='flex gap-[24px] pt-[28px] pb-[16px]'>
                            <div >
                                <FiPhoneCall className='w-[32px] h-[32px]' />
                            </div>
                            <div>
                                <p className='font-DM_Sans text-[20px] leading-7 text-[#08080899]'>Call us</p>
                                <p className='font-bold font-syne text-[20px] leading-7'>+8801674087681  |  +8801720057845</p>
                            </div>
                        </div>

                        <hr className=' text-[#08080866] max-w-[436px]' />

                        <div className='flex gap-[24px] pt-[28px] pb-[16px]'>
                            <div >
                                <CiLocationOn className='w-[32px] h-[32px]' />
                            </div>
                            <div>
                                <p className='font-DM_Sans text-[20px] leading-7 text-[#08080899]'>Office address</p>
                                <p className='font-bold font-syne text-[20px] leading-7'>South Monipur, Mirpur, Dhaka-1216</p>
                            </div>
                        </div>

                        <hr className=' text-[#08080866] max-w-[436px]' />
                    </div>

                    <div>
                        <form>
                            <div className='grid grid-cols-2 gap-[16px]'>
                                <div className='cursor-pointer'>
                                    <p className='pb-[12px] text-[14px] leading-5'>Name</p>
                                    <input type="text" placeholder="Your name*" className="w-full border border-[#08080866] rounded-md p-[16px]" />
                                </div>
                                <div className='cursor-pointer'>
                                    <p className='pb-[12px] text-[14px] leading-5'>Email</p>
                                    <input type="text" placeholder="Your email*" className="w-full border border-[#08080866] rounded-md p-[16px]" />
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-[16px] py-[18px] '>
                                <div className='cursor-pointer'>
                                    <p className='pb-[12px] text-[14px] leading-5'>Phone</p>
                                    <input type="text" placeholder="Your number" className="w-full border border-[#08080866] rounded-md p-[16px]" />
                                </div>
                                <div className='cursor-pointer'>
                                    <p className='pb-[12px] text-[14px] leading-5'>Subject</p>
                                    <input type="text" placeholder="Your subject*" className="w-full border border-[#08080866] rounded-md p-[16px]" />
                                </div>
                            </div>

                            <div>
                                <div>
                                    <p className='pb-[12px] text-[14px] leading-5'>Message</p>
                                    <textarea placeholder="Type your message" className="w-full border border-[#08080866] rounded-md px-[16px] pt-[16px] pb-[56px] "
                                    ></textarea>
                                </div>
                            </div>
                            <div className='pt-[20px] pb-[74px] '>
                                <button className='flex gap-2 font-bold bg-black py-4 px-8 rounded-lg  text-white cursor-pointer hover:bg-transparent hover:text-black border ' >Submit <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>
                            </div>

                            <div className=' flex  items-center'>
                                <div className=' flex items-center gap-5'>
                                    <hr className='text-[#0808081A] w-[110px]' />
                                    <p className='text-[20px] leading-7 font-bold font-syne'>Follow me</p>
                                </div>

                                <div className='flex items-center gap-[32px]'>
                                    <div>
                                        
                                    </div>
                                    <div className=' flex gap-[20px] '>
                                        < FaBehance className='w-[28px] h-[28px]'/>
                                        < FaLinkedinIn className='w-[28px] h-[28px]'/>
                                        < FaDribbble className='w-[28px] h-[28px]'/>
                                        < FaGithub className='w-[28px] h-[28px]'/>
                                    </div>
                                </div>

                            </div>




                        </form>

                        {/* <div className=' pt-[74px] items-center'>

                            <div className=''>
                                <div className='flex'>
                                    <hr className=' text-[#08080866] max-w-[416px]' />
                                    <p>Follow me</p>
                                </div>
                                <div className=''>
                                    < FaBehance />
                                    < FaLinkedinIn />
                                    < FaDribbble />
                                    < FaGithub />
                                </div>
                            </div>
                        </div> */}




                    </div>




                </div>
            </div>
        </section>
    )
}

export default ContactMe
