import React from 'react'
import Image from 'next/image'
import Qutation from '@/app/Assets/Qutation.svg'
// import Slider from "react-slick";

const Testimonial = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear"
  // };
  return (
    <div className='flex gap-[48px] container py-[120px] '>
      {/* left */}
      <div className='w-[340px]'>
        <p className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne'>Testimonial</p>
        <h2 className='leading-[72px] text-[64px] font-bold font-syne pt-2 '>Client feedback</h2>
      </div>
      {/* right */}
      <div className='flex  gap-[48px]'>

        <div className='w-[306px] h-[336px]'>
          <span>
            <Image src={Qutation} alt='logo' />
          </span>
          <h3 className='pt-[40px] font-syne text-[20px] leading-7 font-bold w-[306px]'>“Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services”</h3>
          <div className='flex items-center justify-start gap-[14px] pt-6'>
            <hr className='w-[48px] text-[#080808] ' />
            <h5 className=' font-extrabold font-syne text-[18px] leading-[28px]'>Jhon Smith</h5>
          </div>
        </div>

        <div className='w-[306px] h-[336px]'>
          <span>
            <Image src={Qutation} alt='' />
          </span>
          <h3 className='pt-[40px] font-syne text-[20px] leading-7 font-bold w-[306px]'>“Unleash  energistically build alternative scenarios via cross-unit  build efficient initiatives for distinctive vortals. Synergistically strategize via adaptiv“</h3>
          <div className='flex items-center justify-start gap-[14px] pt-6'>
            <hr className='w-[48px] text-[#080808] ' />
            <h5 className=' font-extrabold font-syne text-[18px] leading-[28px]'>Jhon Smith</h5>
          </div>
        </div>

        <div className='w-[306px] h-[336px]'>
          <span>
            <Image src={Qutation} alt='' />
          </span>
          <h3 className='pt-[40px] font-syne text-[20px] leading-7 font-bold w-[306px]'>“Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.”</h3>
          <div className='flex items-center justify-start gap-[14px] pt-6'>
            <hr className='w-[48px] text-[#080808] ' />
            <h5 className=' font-extrabold font-syne text-[18px] leading-[28px]'>Jhon Smith</h5>
          </div>
        </div>

        
      </div>

      <div className='w-[1000px]'>
        
      </div>
    </div>
  )
}

export default Testimonial
