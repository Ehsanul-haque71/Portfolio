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
                    <p className='leading-[1.4] text-[17px] lg:text-[20px] text-[#FF9330] font-bold font-syne'>Blog</p>
                    <h2 className='leading-[1.1] text-[35px] md:text-[50px] lg:text-[64px] font-bold font-syne pt-[10px] relative after:absolute after:size-[36px] md:after:size-[45px] lg:after:size-[50px] after:bg-[#FF9330] z-[7] after:z-[-7] after:top-[15px] md:after:top-[23px] lg:after:top-[25px] after:right-[35px] md:after:right-[44px] lg:after:right-[65px] after:rounded-full'>My blog post</h2>
                </div>

               <div className='grid items-center justify-center sm:grid-cols-2 lg:grid-cols-4 gap-6  pt-12'>
                        {

                            blogData.map(item => <BlogCard
                                key={item.id}
                                image={item.image}
                                publishDate={item.publishDate}
                                category={item.category}
                                title={item.title}
                                className={"even:mt-[40px]"}
                            />)
                        }
                    </div>


                    <div className='grid  items-center justify-center sm:grid-cols-2 lg:grid-cols-4 gap-6  pt-12'>
                        {

                            blogData.map(item => <BlogCard
                                key={item.id}
                                image={item.image}
                                publishDate={item.publishDate}
                                category={item.category}
                                title={item.title}
                                className={"even:mt-[40px]"}
                            />)
                        }
                    </div>
            </div>
        </section>
    )
}

export default BlogsMe
