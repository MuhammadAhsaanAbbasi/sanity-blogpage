"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '../../../sanity/lib/client';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from 'next/link';
import { motion } from "framer-motion"
import { useFilter } from '../Context/Filter';

// interface Props {
//     posts:Post[]
// }

export const revalidate = 300
export default function Bloglist() {
    const {setCategoryFilter} = useFilter()
    const Variants = {
        hidden: { opacity: 0, y: 60, x: -60 },
        visible: { opacity: 1, y: 0, x: 0 },
    };
    const fadeout = {
        hidden: { opacity: 0, y: 60, x: 30 },
        visible: { opacity: 1, y: 0, x: 0 },
    };
    const translate = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    };
    const scale = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await client.fetch(`*[_type=="post"] {
                ...,
                "imageSrc": mainImage.asset->url,
                authors->,
                categories[]->,
                'categoriess': categories[]->_id,
            } | order(_createdAt desc)`);

            setData(result);
        };

        fetchData();
    }, [data, setData]);
    return (
        <div id='blogs'>
            <hr className='w-[95%] mx-auto h-1 bg-[rgb(255,220,115)]' />
            <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24 mt-2'>
                {data.map((post: Post) => (
                    <Link key={post._id} href={`posts/${post.slug.current}`} className='flex flex-col group cursor-pointer'
                    onClick={()=>setCategoryFilter(post.categoriess)}
                    >
                        <motion.div className='relative w-full h-[55vh] drop-shadow-xl group-hover:scale-110 transition-all duration-200 ease-out'
                            variants={Variants}
                            initial="hidden" 
                            whileInView="visible"
                            whileHover={{ scale: 1.02 }}
                            transition={{
                                delay: 0.2,
                                duration: 1.5,
                                ease: 'easeInOut'
                            }}
                        >
                            {post.imageSrc &&
                                <Image
                                    className='object-cover object-left lg:object-center h-full w-full'
                                    src={post.imageSrc}
                                    alt={post.authors.name}
                                    height={500}
                                    width={500}
                                />
                            }
                            <motion.div className='absolute bottom-0 bg-black backdrop-blur-lg bg-opacity-20 rounded drop-shadow-lg p-5 flex justify-between items-center w-full text-white'>
                                <motion.div
                                    variants={scale}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{
                                        delay: 0.1,
                                        duration: 2,
                                        ease: "easeOut"
                                    }}
                                    className='w-[60vh]'
                                >
                                    <p className='text-sm'>{post.title}</p>
                                    <p>{new Date(post._createdAt).toLocaleDateString
                                        ("en-US", {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })
                                    }</p>
                                </motion.div>
                                <motion.div
                                    variants={translate}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{
                                        delay: 0.1,
                                        duration: 1.5,
                                        ease: "easeOut"
                                    }}
                                >
                                    {post.categories.map((category) => (
                                        <motion.div key={category._id}
                                            variants={translate}
                                            initial="hidden"
                                            whileInView="visible"
                                            transition={{
                                                delay: 0.1,
                                                duration: 1.5,
                                                ease: "easeOut"
                                            }}
                                        >
                                            <h3 className='bg-[rgb(255,191,0)] text-black px-3 py-2 mx-2 my-3 rounded text-center'>{category.title}</h3>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div className='mt-5 flex-1'
                            variants={fadeout}
                            initial="hidden"
                            whileInView="visible"
                            transition={{
                                delay: 0.1,
                                duration: 1.5,
                                ease: "backInOut"
                            }}
                        >
                            <p className='text-lg underline font-bold'>{post.title}</p>
                            <p className='line-clamp-2 text-zinc-500'>{post.description}</p>
                            <div className='flex items-center gap-x-2 text-zinc-500'>
                                <p className='text-lg font-medium hover:underline'>Read More</p>
                                <FaArrowUpRightFromSquare />
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}



