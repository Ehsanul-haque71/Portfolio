import React from 'react'
import Image from 'next/image'
import Mat from "@/app/Assets/Mat.svg"
import Google from "@/app/Assets/Google.svg"
import Factual from "@/app/Assets/Factual.svg"
import Airbnb from '@/app/Assets/Airbnb.svg'
import Case from '@/app/Assets/Case.svg'
import Logitech from '@/app/Assets/Logitech.svg'

const Ads = () => {
    return (
        <section className='container'>
            <div>
                <hr className='w-[1296px]' />
            </div>

            <div className='my-[24px] flex gap-6 w-[1296px] items-center justify-between'>
                <Image  src={Mat} alt='ads' />
                <Image  src={Google} alt='ads' />
                <Image  src={Factual} alt='ads' />
                <Image  src={Airbnb} alt='ads' />
                <Image  src={Case} alt='ads' />
                <Image  src={Logitech} alt='ads' />
                
            </div>
            <div>

                <hr className='w-[1296px]' />
            </div>
        </section>
    )
}

export default Ads
