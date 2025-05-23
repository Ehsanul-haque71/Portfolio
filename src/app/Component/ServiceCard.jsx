import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';

const ServiceCard = ({ item, width = "w-[80px]" }) => {
    return (


        <Link href={"/project"} className='bg-[#0808080A] hover:bg-[#FFFFFF] rounded-xl px-[24px] py-[28px]  justify-between hover:shadow-lg transition group hover:cursor-pointer inline-block'>
            <div className="w-12 h-12 bg-white group-hover:bg-[#0808080A] rounded-full items-center justify-center flex">
                <Image src={item.icon} alt='mobile_logo' />
            </div>
            <div className="flex items-end justify-between">
                <p className={`font-syne text-[20px] leading-[28px] font-bold  mt-5 hover:text-[#FF9330] ${width}`}>{item.title}</p>
                <span className="mt-13" > <MdArrowOutward className=' w-6 h-6' /> </span>
            </div>
        </Link>
    )
}

export default ServiceCard
