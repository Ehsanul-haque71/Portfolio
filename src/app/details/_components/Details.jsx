import React from 'react'
import Image from 'next/image'
import Por_right from "@/app/Assets/Por_right.jpg";
import Por_left from "@/app/Assets/Por_left.jpg";
import post1 from "@/app/Assets/post1.png";
import post2 from "@/app/Assets/post2.png";
import { MdArrowOutward } from "react-icons/md";
import Recent from '@/app/Component/Recent';

const DetailsMe = () => {
    return (
        <>
            <section className='pt-[180px] bg-[#FFE9D9]'>
                {/* upper side */}
                <div className='container'>
                    <div className='max-w-[1075px] pb-[145px] sm:pb-[195px] md:pb-[240px] lg:pb-[354px] mx-auto relative'>
                        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-[20px] '>

                            <div>
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
                                <div className='font-bold font-syne text-[25px] sm:text-[27px] md:text-[44px] leading-[54px]'>
                                    <h1>Mendero fintech dashboard design </h1>
                                </div>
                            </div>

                            {/* right */}
                            <div className='mb-7'>
                                <div className='grid grid-cols-2 md:grid-cols-3 pb-[15px] md:pb-[20px]'>
                                    <div>
                                        <p className='text-[14px] leading-5'>client</p>
                                        <p className='font-bold font-DM_Sans text-[11px] lg:text-[15px] leading-[16px] pt-[8px]'>Mashorom</p>
                                    </div>

                                    <div>
                                        <p className='text-[14px] leading-5'>Category</p>
                                        <p className='font-bold font-DM_Sans text-[11px] lg:text-[15px] leading-[16px] pt-[8px]'>User Experience</p>
                                    </div>

                                    <div>
                                        <p className='text-[14px] leading-5'>Tools</p>
                                        <p className='font-bold font-DM_Sans text-[11px] lg:text-[15px] leading-[16px] pt-[8px]'>Figma, Webflow</p>
                                    </div>

                                </div>

                                <div className='grid grid-cols-2 md:grid-cols-3'>

                                    <div>
                                        <p className='text-[14px] leading-5'>Start date</p>
                                        <p className='font-bold font-DM_Sans text-[11px] lg:text-[15px] leading-[16px] pt-[8px]'>09/01/ 2020</p>
                                    </div>

                                    <div>
                                        <p className='text-[14px] leading-5'>End date</p>
                                        <p className='font-bold font-DM_Sans text-[11px] lg:text-[15px] leading-[16px] pt-[8px]'>09/01/ 2020</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* image */}
                        <div className='absolute bottom-0 left-0 translate-y-[50%]'>
                            <Image className='rounded-2xl' src={Por_right} alt='portfolio' />
                        </div>
                    </div>
                </div>
            </section>


            <section className='bg-white pt-[185px] sm:pt-[190px] md:pt-[235px] lg:pt-[340px]'>
                <div className="container">
                    <div className='max-w-[1075px] mx-auto'>
                        {/* Overview */}
                        <div>
                            <h3 className='font-bold font-syne text-[21px]  md:text-[32px] leading-[1.2]'>Overview</h3>
                            <p className='pt-[16px] font-DM_Sans text-[18px] leading-[28px] text-[#08080899]'>
                                Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.
                            </p>

                            <p className='pt-[40px] font-DM_Sans text-[18px] leading-[28px] text-[#08080899]'>
                                That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them want more.
                            </p>

                            <div className='pt-[40px]'>
                                <ul className='font-bold font-syne text-[20px] leading-7 custom_square list-inside pl-[4px]'>
                                    <li>Advantage</li>
                                    <li>Accomplished</li>
                                    <li>Marketplace startups</li>
                                    <li> SaaS startups</li>
                                </ul>
                            </div>
                        </div>

                        {/* Typography */}
                        <div className='pt-[48px] pb-[48px]'>
                            <h2 className='font-bold font-syne text-[32px] leading-[40px]'>Typography</h2>
                            <p className='pt-[16px] font-DM_Sans text-[18px] leading-[28px] text-[#08080899]'>
                                The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe. We use Chaney for general display and when we want to drive attention to the content, and the technical and geometric Sora font for the body copy and paste overall hierachy.
                            </p>
                        </div>

                        <div className='grid grid-cols-[auto_1fr] gap-[24px]'>
                            <Image src={post1} alt='left' />
                            <Image src={post2} alt='right' />
                        </div>

                        {/* Conclusion  */}
                        <div className='pt-[48px]'>
                            <h2 className='font-bold font-syne text-[32px] leading-[40px]'>Conclusion </h2>

                            <div className='flex'>
                                <p className='pt-[16px] font-DM_Sans text-[18px] leading-[28px] text-[#08080899]'>The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe. We use Chaney for general display and when we want to drive attention to the content, and the technical and geometric Sora font for the body copy and paste overall hierachy.</p>

                                <p className='pt-[16px] font-DM_Sans text-[18px] leading-[28px] text-[#08080899]'>
                                    The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe.
                                </p>
                            </div>
                            {/* <div className='container  py-[100px] '>
                                <div className='flex flex-col items-center justify-center'>
                                    <p className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne '>Portfolio</p>
                                    <h2 className='leading-[72px] text-[64px] font-bold font-syne pt-2 pb-10 relative  after:absolute after:rounded-full after:size-[62px] after:top-[13px] after:right-[116px] z-[1] after:bg-[#FF9330] after:z-[-1]'> <span>My recent work</span></h2>
                                </div>
                                <div className='grid grid-cols-2 gap-6'>
                                    <div className=''>
                                        <Image src={Por_left} className='w-[636px] h-[320px] rounded-2xl' alt='logo' />
                                        <div className='flex gap-2 pt-[24px]'>
                                            <button className="bg-transparent text-[#080808] w-[56px] h-[28px] px-[16px] py-[6px] rounded-full flex items-center justify-center font-DM_Sans cursor-pointer hover:text-white hover:bg-black border border-[#080808] ">APP </button>
                                            <button className=' bg-transparent text-[#080808] w-[56px] h-[28px] px-[122px] py-[6px] rounded-full flex items-center justify-center font-DM_Sans cursor-pointer hover:text-white hover:bg-black border border-[#080808]'>DEVELOPMENT</button>
                                        </div>
                                        <div className='flex justify-between items-center pt-[12px]'>
                                            <h4 className='text-[32px] font-semibold flex items-center gap-6 font-syne'>Basinik Finance App</h4>
                                            <span > <MdArrowOutward className='w-6 h-6 ' /> </span>
                                        </div>
                                    </div>
                                    <div>
                                        <Image src={Por_right} className='w-[636px] h-[320px] rounded-2xl' alt='logo' />
                                        <div className='flex gap-2 pt-[24px]'>
                                            <button className="bg-transparent text-[#080808] w-[56px] h-[28px] px-[16px] py-[6px] rounded-full flex items-center justify-center font-DM_Sans cursor-pointer hover:text-white hover:bg-black border border-[#080808] ">APP </button>
                                            <button className=' bg-transparent text-[#080808] w-[56px] h-[28px] px-[122px] py-[6px] rounded-full flex items-center justify-center font-DM_Sans cursor-pointer hover:text-white hover:bg-black border border-[#080808]'>DEVELOPMENT</button>
                                        </div>
                                        <div className='flex justify-between items-center pt-[12px]'>
                                            <h4 className='text-[32px] font-semibold flex items-center gap-6 font-syne'>Oxilex Dashboard design</h4>
                                            <span > <MdArrowOutward className='w-6 h-6 ' /> </span>
                                        </div>
                                    </div>
                                </div>

                            </div> */}



                        </div>
                    </div>

                    <Recent button={false} className={"bg-white"} sectionTitle={"Related work"} />
                </div>
            </section>
        </>
    )
}

export default DetailsMe
