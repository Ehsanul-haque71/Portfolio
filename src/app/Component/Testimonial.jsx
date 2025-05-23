"use client"

import Image from 'next/image'
import Qutation from '@/app/Assets/Qutation.svg'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3, // default
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
    responsive: [
      {
        breakpoint: 1024, // 1024px er niche
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768, // 768px er niche
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className='overflow-x-hidden'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[355px_1fr] py-[90px] lg:py-[120px] gap-[48px] '>
          {/* left */}
          {/* max-w-[340px] */}
          <div className='md:flex md:flex-col md:items-center md:justify-center items-start justify-start lg:items-start lg:justify-start '>
            <p className='leading-[1.4] text-[17px] lg:text-[20px] text-[#FF9330] font-bold font-syne '>Testimonial</p>
            <h2 className='leading-[1.1] text-[35px] lg:text-[64px] font-bold font-syne pt-2 relative after:absolute after:bg-[#FF9330] after:rounded-full after:size-[35px] lg:after:size-[62px] after:top-[10px] after:left-[0px] z-[10] after:z-[-10]'>Client feedback</h2>
          </div>
          {/* right */}
          <div className='max-w-[757px] w-full px-4'>
            <Slider  {...settings}>

              <div className='flex gap-[48px] px-2'>
                <span>
                  <Image src={Qutation} alt='logo' />
                </span>
                <h3 className='pt-[40px] font-syne text-[18px] leading-7 font-bold'>“Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services”</h3>
                <div className='flex items-center justify-start gap-[14px] pt-6'>
                  <hr className='w-[48px] text-[#080808] ' />
                  <h5 className=' font-extrabold font-syne text-[18px] leading-[28px]'>Jhon Smith</h5>
                </div>
              </div>

              <div className='flex  gap-[48px] px-2'>
                <span>
                  <Image src={Qutation} alt='' />
                </span>
                <h3 className='pt-[40px] font-syne text-[18px] leading-7 font-bold'>“Unleash  energistically build alternative scenarios via cross-unit  build efficient initiatives for distinctive vortals. Synergistically strategize via adaptiv“</h3>
                <div className='flex items-center justify-start gap-[14px] pt-6'>
                  <hr className='w-[48px] text-[#080808] ' />
                  <h5 className=' font-extrabold font-syne text-[18px] leading-[28px]'>Jhon Smith</h5>
                </div>
              </div>

              <div className='flex  gap-[48px] px-2'>
                <span>
                  <Image src={Qutation} alt='' />
                </span>
                <h3 className='pt-[40px] font-syne text-[18px] leading-7 font-bold'>“Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.”</h3>
                <div className='flex items-center justify-start gap-[14px] pt-6'>
                  <hr className='w-[48px] text-[#080808] ' />
                  <h5 className=' font-extrabold font-syne text-[18px] leading-[28px]'>Jhon Smith</h5>
                </div>
              </div>

            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
