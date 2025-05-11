"use client"
import React from 'react'
import Image from 'next/image'
import Mat from "@/app/Assets/Mat.svg"
import Google from "@/app/Assets/Google.svg"
import Factual from "@/app/Assets/Factual.svg"
import Airbnb from '@/app/Assets/Airbnb.svg'
import Case from '@/app/Assets/Case.svg'
import Logitech from '@/app/Assets/Logitech.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Ads = () => {


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <section className='container'>
            <div >
                <hr className='w-[1296px]' />
            </div>

            <Slider className='my-[24px]' {...settings}>
                <div>
                    <Image src={Mat} alt="Mat" />
                </div>
                <div>
                    <Image src={Google} alt="Google" />
                </div>
                <div>
                    <Image src={Factual} alt="Factual" />
                </div>
                <div>
                    <Image src={Airbnb} alt="Airbnb" />
                </div>
                <div>
                    <Image src={Case} alt="Case" />
                </div>
                <div>
                    <Image src={Logitech} alt="Logitech" />
                </div>
            </Slider>

            {/* <div className='my-[24px] flex gap-6 w-[1296px] items-center justify-between'>
                <Image  src={Mat} alt='ads' />
                <Image  src={Google} alt='ads' />
                <Image  src={Factual} alt='ads' />
                <Image  src={Airbnb} alt='ads' />
                <Image  src={Case} alt='ads' />
                <Image  src={Logitech} alt='ads' />
                
                </div> */}
            <div>

                <hr className='w-[1296px]' />
            </div>
        </section>
    )
}

export default Ads
