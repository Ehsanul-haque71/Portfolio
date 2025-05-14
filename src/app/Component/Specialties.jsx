import Image from "next/image";
import React from 'react'
import Link from "next/link";
import twelve from '@/app/Assets/twelve_plus.svg'
import { MdArrowOutward } from "react-icons/md";
import ServiceCard from "./ServiceCard";
import sticker from "@/app/Assets/resume_sticker.svg"
import service_icon_1 from '@/app/Assets/android.svg'
import service_icon_2 from '@/app/Assets/Ui_Ux.svg'
import service_icon_3 from '@/app/Assets/cart.svg'
import service_icon_4 from '@/app/Assets/web.svg'
import service_icon_5 from '@/app/Assets/brand.svg'
import service_icon_6 from '@/app/Assets/touch.svg'



const serviceData = [
    {
        id: 1,
        icon: service_icon_1,
        title: "Mobile Apps Design"
    },
    {
        id: 2,
        icon: service_icon_2,
        title: "UI/UX design"
    },
    {
        id: 3,
        icon: service_icon_3,
        title: "Website design"
    },
    {
        id: 4,
        icon: service_icon_4,
        title: "Webflow development"
    },
    {
        id: 5,
        icon: service_icon_5,
        title: "Brand identity"
    },
    {
        id: 6,
        icon: service_icon_6,
        title: "Interaction design"
    },
]

const Specialties = () => {
    return (
        <div className='container '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3px]  md:gap-[134px]  pl-[20px] lg:pl-[0px] pt-[100px] md:pt-[120px]'>
                <div className=' '>
                    <span className='leading-[28px] text-[17px] lg:text-[20px] text-[#FF9330] font-bold font-syne'>Services</span>
                    <h1 className='leading-[72px] text-[37px] lg:text-[54px] font-bold font-syne pt-2 relative after:size-[40px] lg:after:size-[62px] after:rounded-full after:bg-[#FF9330] after:absolute after:top-[23px] lg:after:top-[15px] after:left-[0px] lg:after:left-[-1px] after:z-[-1]'><span className="absolute z-[100] "></span> <span>My</span> specialties</h1>
                </div>
                <div className='text-[11px] md:text-[15px] lg:text-[12px] leading-[28px] font-semibold lg:font-normal font-DM_Sans items-center pt-[0px]  lg:pt-[30px] text-[#08080899]'>
                    Synergistically seize front-end methods of empowerment without extensive core competencies. Progressively repurpose alternative platforms
                </div>
            </div>



            <div className=" grid grid-cols-1 lg:grid-cols-[auto_1fr] pt-[48px] gap-6 ">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {serviceData?.map((item) => {
                        return item.id === 1 ? <ServiceCard key={item.id} item={item} width="w-[140px]" /> : <ServiceCard key={item.id} item={item} />
                    })}
                </div>

                {/* <div className="grid grid-cols-3 gap-6">
                    <div className="bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition  group hover:cursor-pointer">
                        <div className="w-12 h-12 bg-white group-hover:bg-[#0808080A] rounded-full items-center justify-center flex ">
                            <Image src={android} alt="logo" />
                        </div>
                        <div className=" flex items-end justify-between group-hover:text-[#FF9330]">
                            <p className="w-[139px] font-syne text-[20px] leading-[28px] font-bold  ">Mobile Apps design</p>
                            <span><MdArrowOutward className=' w-6 h-6' /> </span>
                        </div>
                    </div>

                    <div className="bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition  group hover:cursor-pointer">
                        <div className="w-12 h-12 bg-white group-hover:bg-[#0808080A] rounded-full items-center justify-center flex ">
                            <Image src={android} alt="logo" />
                        </div>
                        <div className=" flex items-end justify-between group-hover:text-[#FF9330]">
                            <p className="w-[139px] font-syne text-[20px] leading-[28px] font-bold  ">UI/UX
                                design
                            </p>
                            <span><MdArrowOutward className=' w-6 h-6' /> </span>
                        </div>
                    </div>

                    <div className="bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition  group hover:cursor-pointer">
                        <div className="w-12 h-12 bg-white group-hover:bg-[#0808080A] rounded-full items-center justify-center flex ">
                            <Image src={android} alt="logo" />
                        </div>
                        <div className=" flex items-end justify-between group-hover:text-[#FF9330]">
                            <p className="w-[139px] font-syne text-[20px] leading-[28px] font-bold  ">Mobile Apps design</p>
                            <span><MdArrowOutward className=' w-6 h-6' /> </span>
                        </div>
                    </div>

                    <div className="bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition  group hover:cursor-pointer">
                        <div className="w-12 h-12 bg-white group-hover:bg-[#0808080A] rounded-full items-center justify-center flex ">
                            <Image src={android} alt="logo" />
                        </div>
                        <div className=" flex items-end justify-between group-hover:text-[#FF9330]">
                            <p className="w-[139px] font-syne text-[20px] leading-[28px] font-bold  ">Mobile Apps design</p>
                            <span><MdArrowOutward className=' w-6 h-6' /> </span>
                        </div>
                    </div>

                    <div className="bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition  group hover:cursor-pointer">
                        <div className="w-12 h-12 bg-white group-hover:bg-[#0808080A] rounded-full items-center justify-center flex ">
                            <Image src={android} alt="logo" />
                        </div>
                        <div className=" flex items-end justify-between group-hover:text-[#FF9330]">
                            <p className="w-[139px] font-syne text-[20px] leading-[28px] font-bold  ">Mobile Apps design</p>
                            <span><MdArrowOutward className=' w-6 h-6' /> </span>
                        </div>
                    </div>

                    <div className="bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px] flex flex-col justify-between hover:shadow-lg transition  group hover:cursor-pointer">
                        <div className="w-12 h-12 bg-white group-hover:bg-[#0808080A] rounded-full items-center justify-center flex ">
                            <Image src={android} alt="logo" />
                        </div>
                        <div className=" flex items-end justify-between group-hover:text-[#FF9330]">
                            <p className="w-[139px] font-syne text-[20px] leading-[28px] font-bold  ">Mobile Apps design</p>
                            <span><MdArrowOutward className=' w-6 h-6' /> </span>
                        </div>
                    </div>
                </div> */}



                <div className=" sm:mx-[115px] md:mx-[130px] lg:mx-[0px]">
                    <div className="bg-black rounded-2xl text-white ">
                        <div className="px-[24px] py-[36px]">
                            <Link href={"/contacts"} className=" flex justify-end">
                                <MdArrowOutward className='w-12 h-12 text-[#FFB646] ' />
                            </Link>
                            <div className="mt-[15px]  lg:mt-[292px]">
                                <p className="text-[#FFB646] text-[18px] leading-7 font-DM_Sans">SAY HELLO!</p>
                                <h3 className="font-bold text-8 leading-10 font-syne pt-">hello@ehsanul.com</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




            <div className="grid grid-cols-1 lg:grid-cols-2 mt-[50px] lg:mt-[120px] gap-[95px] lg:gap-[134px]">
                {/* left */}
                <div>
                    <Image src={sticker} alt="img" />
                </div>


                {/* right */}
                <div>
                    <div>
                        <p className="leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne pb-[10px]">Hello I’m</p>
                        <h3 className="leading-[1.1] text-[36px] lg:text-[64px] font-bold font-syne pt-2 relative after:absolute after:rounded-full after:size-[30px] lg:after:size-[55px] after:bg-[#FF9330] after:top-[13px] lg:after:top-[15px] after:left-[0px] md:after:left-[-0px] lg:after:right-[378px] after:z-[-3]">
                            Ehsanul Haque, Product Designer
                        </h3>
                        <h4 className="leading-[1.2] text-[23px]  lg:text-[37px] font-bold font-syne pt-3">Based in Bangladesh
                        </h4>
                        <p className="text-[18px] leading-[1.5] font-normal font-DM_Sans text-[#08080899] max-w-[526px] pt-4">That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them .</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-[15px] lg:gap-[41px] pt-6">
                        <div>
                            <h5 className="leading-[1.2] text-[32px] font-bold font-syne">08</h5>
                            <p className="leading-[1.5] text-[15px] text-[#08080899]">Award winner</p>
                        </div>
                        <div>
                            <h6 className="leading-[1.2] text-[32px] font-bold font-syne">1.2k</h6>
                            <p className="leading-[1.5] text-[15px] text-[#08080899]">Worldwide client</p>
                        </div>
                        <div>
                            <h3 className="leading-[1.2] text-[32px] font-bold font-syne">3.5k</h3>
                            <p className="leading-[1.5] text-[15px]  text-[#08080899]">Job done successfully</p>
                        </div>

                    </div>
                    <div className="pt-[36px]  w-[253px] h-[56px] mb-[120px]">
                        <a href="/Ehsanul-Haque.pdf">
                            <button className="bg-black text-white w-[256px] h-[56px] px-8 py-5 rounded-lg flex items-center justify-between font-DM_Sans cursor-pointer hover:text-[#FF9330] ">   Download my resume
                                <span > <MdArrowOutward className='w-6 h-6 ' /> </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialties
