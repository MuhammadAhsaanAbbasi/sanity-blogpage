"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '../../sanity/lib/client';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from 'next/link';
import Blog from '../Blogs/blogs';

// interface Props {
//     posts:Post[]
// }

export const revalidate = 300
export default function Bloglist() {
        const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await client.fetch(`*[_type=="post"] {
                ...,
                "imageSrc": mainImage.asset->url,
                authors->,
                categories[]->
              } | order(_createdAt desc)`);

            setData(result);
        };

        fetchData();
    }, [data,setData]);
    return (
        <div>
            <hr className='w-[95%] mx-auto h-1 bg-[rgb(255,220,115)]' />
            <div className='grid grid-cols-1 md:grid-cols-3 px-10 gap-10 gap-y-16 pb-24 mt-2'>
                {data.map((post:Post) => (
                    <Link key={post._id} href={`posts/${post.slug.current}`} className='flex flex-col group cursor-pointer'>
                        <div className='relative w-full h-full drop-shadow-xl group-hover:scale-105 transition-all duration-200 ease-out'>
                        {post.imageSrc &&
                            <Image
                            className='object-cover object-left lg:object-center h-full w-full'
                            src={post.imageSrc}
                            alt={post.authors.name}
                            height={800}
                            width={800}
                            />
                        }
                        <div className='absolute bottom-0 bg-black backdrop-blur-lg bg-opacity-20 rounded drop-shadow-lg p-5 flex justify-between items-center w-full text-white'>
                            <div>
                                <p>{post.title}</p>
                                <p>{new Date(post._createdAt).toLocaleDateString
                                ("en-US",{
                                    day:'numeric',
                                    month:'long',
                                    year:'numeric'
                                })
                                }</p>
                            </div>
                            <div>
                                {post.categories.map((category)=>(
                                    <div key={category._id}>
                                        <h3 className='bg-[rgb(255,191,0)] text-black px-3 py-2 mx-2 my-3 rounded text-center'>{category.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </div>
                        <div className='mt-5 flex-1'>
                            <p className='text-lg underline font-bold'>{post.title}</p>
                            <p className='line-clamp-2 text-zinc-500'>{post.description}</p>
                        </div>
                        <div className='flex items-center gap-x-2 text-zinc-500'>
                            <p className='text-lg font-medium hover:underline'>Read More</p>
                            <FaArrowUpRightFromSquare />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}



