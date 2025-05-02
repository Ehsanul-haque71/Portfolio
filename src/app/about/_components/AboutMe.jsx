import React from 'react'
import Image from 'next/image';
import About_img from '@/app/Assets/about_img.svg';
import Signature from "@/app/Assets/signature.png";

const AboutMe = () => {
    return (
        <div className='container'>
            <div className='flex'>
                <div>
                    <Image src={About_img} alt="img" />
                </div>
                <div>
                    <p>About me</p>
                    <h1>EHSANUL HAQUE</h1>
                    <h3>Product Designer</h3>
                    <h4>A Product Designer & Developer and I am in the game for over 7+ years. I am proud of my works and ready to face the next challenge</h4>
                    <p>That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them .</p>
                    <span>
                        <Image src={Signature} alt='signature' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
