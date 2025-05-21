import Blog1 from '@/app/Assets/Blog1.png'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';

const BlogCard = ({ image = Blog1, className, category, publishDate, title }) => {
    return (
        <div className={className}>
            <div className='max-w-[306px]'>
                <div>
                    <Image src={image} alt='logo' />
                </div>
                <div className='flex gap-3 pt-6 pb-3'>
                    <div className='flex items-center gap-[15px]'>
                        <span className='flex'><hr className='rounded-full w-[10px] h-[10px] bg-black' /></span>
                        <p className='text-[14px] text-black leading-[20px]'>{category}</p>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                        <span className='flex '><hr className='rounded-full w-[10px] h-[10px] bg-[#FF9330] border-[#FF9330]' /></span>
                        <p className='text-[14px] text-[#FF9330] leading-[20px]'>{publishDate}</p>
                    </div>
                </div>

                <Link href={"/blogdetails"} className='flex items-end justify-between cursor-pointer hover:text-[#FF9330] '>
                    <div>
                        <h3 className='font-syne text-[24px] lg:text-[24px] leading-[1.3] font-bold '>{title}</h3>
                    </div>
                    <span ><MdArrowOutward className='w-6 h-6' /></span>
                </Link>
            </div>


        </div>
    )
}

export default BlogCard
