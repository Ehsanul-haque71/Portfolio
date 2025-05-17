import React from 'react'
import Image from 'next/image'
import { MdArrowOutward } from "react-icons/md";
import Blog1 from '@/app/Assets/Blog1.png'
import Blog2 from '@/app/Assets/Blog2.png'
import Blog3 from '@/app/Assets/Blog3.png'
import Blog4 from '@/app/Assets/Blog4.png'
import BlogCard from '@/app/Component/BlogCard';
import { blogData } from '@/api/blogData';

const BlogsMe = () => {
    return (
        <section className='container '>
            <div className='pt-[160px] pb-[120px]'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='leading-[28px] text-[20px] text-[#FF9330] font-bold font-syne'>Blog</p>
                    <h2 className='leading-[72px] text-[64px] font-bold font-syne pt-[10px] relative after:absolute after:size-[65px] after:bg-[#FF9330] z-[7] after:z-[-7] after:top-[17px] after:right-[65px] after:rounded-full'>My blog post</h2>
                </div>
                <div className='grid grid-cols-4 gap-6 pt-12'>
                    {

                        blogData.map(item => <BlogCard
                            key={item.id}
                            image={item.image}
                            publishDate={item.publishDate}
                            category={item.category}
                            className={"even:mt-[40px]"}
                        />)
                    }
                </div>


                <div className='grid grid-cols-4 gap-6 pt-12'>
                    {

                        blogData.map(item => <BlogCard
                            key={item.id}
                            image={item.image}
                            publishDate={item.publishDate}
                            category={item.category}
                            className={"even:mt-[40px]"}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}

export default BlogsMe
