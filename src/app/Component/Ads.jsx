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
        slidesToShow: 5, // Default: 1024px+
        slidesToScroll: 2,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024, // <1024px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // <768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, // <640px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className='overflow-x-hidden'>
            <div className='container'>
                <div className='border-y border-y-[#0808081A] max-w-full  mx-auto'>
                    <Slider className='my-[24px] ' {...settings}>
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
                </div>
            </div>

        </section>
    )
}

export default Ads
