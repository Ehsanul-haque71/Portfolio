import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Pricing = () => {
    return (
        <section className='container pb-[120px]'>
            <div className='flex items-center justify-between'>
                <div className='w-[527px]'>
                    <p className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne'>Pricing</p>
                    <h2 className='leading-[72px] text-[64px] font-bold font-syne pt-[10px]'>Stay chill and pick your plan</h2>
                </div>
                <button className='flex gap-2 font-bold bg-black py-4 px-8 rounded-lg  text-white cursor-pointer hover:bg-transparent hover:text-black hover:border mt-[126px]'>Contact for Custom Project <span > <MdArrowOutward className='w-6 h-6 ' /> </span> </button>
            </div>
            <div className='grid grid-cols-3 pt-[64px]'>
                <div className='bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition w-[416px] h-[208px] group hover:cursor-pointer'>
                    <div className='flex justify-between'>
                        <p className='font-DM_Sans text-[18px] leading-7 text-[#08080899]'>Basic</p>
                        <h3 className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne'>$48/h</h3>
                    </div>
                    <div className='flex items-end justify-between '>
                        <h4 className='font-DM_Sans text-[18px] leading-7 text-[rgba(8,8,8,0.6)] flex flex-col'><span className='font-syne text-[32px] leading-7 font-bold text-[#080808]'>20 hrs</span>
                        10 hours per week</h4>
                        <span> <MdArrowOutward className='w-6 h-6 text-[#08080899] group-hover:text-[#FF9330]' /> </span>
                    </div> 
                </div>
                
                <div className='bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition w-[416px] h-[208px] group hover:cursor-pointer'>
                    <div className='flex justify-between'>
                        <p className='font-DM_Sans text-[18px] leading-7 text-[#08080899]'>Premium
                        </p>
                        <h3 className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne'>$60/h</h3>
                    </div>
                    <div className='flex items-end justify-between '>
                        <h4 className='font-DM_Sans text-[18px] leading-7 text-[rgba(8,8,8,0.6)] flex flex-col '><span className='font-syne text-[32px] leading-7 font-bold text-[#080808]'>30 hrs</span>
                        15 hours per week</h4>
                        <span> <MdArrowOutward className='w-6 h-6 text-[#08080899] group-hover:text-[#FF9330]' /> </span>
                    </div> 
                </div>

                <div className='bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition w-[416px] h-[208px] group hover:cursor-pointer'>
                    <div className='flex justify-between'>
                        <p className='font-DM_Sans text-[18px] leading-7 text-[#08080899]'>Platinum</p>
                        <h3 className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne'>$80/h</h3>
                    </div>
                    <div className='flex items-end justify-between '>
                        <h4 className='font-DM_Sans text-[18px] leading-7 text-[rgba(8,8,8,0.6)] flex flex-col'><span className='font-syne text-[32px] leading-7 font-bold text-[#080808]'>40 hrs</span>
                        20 hours per week</h4>
                        <span> <MdArrowOutward className='w-6 h-6 text-[#08080899] group-hover:text-[#FF9330]' /> </span>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Pricing
