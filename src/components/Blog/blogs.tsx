"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '../../../sanity/lib/client';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from 'next/link';
import { motion } from "framer-motion"
import { useFilter } from '../Context/Filter';
import { useRouter } from 'next/navigation';

// interface Props {
//     posts:Post[]
// }

export const revalidate = 300
export default function Blogs() {
    const {categoryFilter, setCategoryFilter} = useFilter()
    console.log(categoryFilter)
    const categories = categoryFilter.map((category) => `"${category}"`).join(",").toString()
    const router = useRouter()
    const [data, setData] = useState<Post[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await client.fetch(`*[_type == "post" && categories[0]._ref in [${categories}]]{
                ...,
                authors->,
                categories[]->,
                'categoriess': categories[]->_id,
                "imageSrc": mainImage.asset->url,
            }`);

            setData(result);
        };

        fetchData();
    }, [data, setData, categories]);

    const newRouter = ({slug, categories}: {slug: string, categories: string[]}) => {
        router.push(`/posts/${slug}`)
        setCategoryFilter(categories)
    }
    return (
        <div className='mx-2 my-2 bg-[#ecebe2] drop-shadow-md px-3 py-4'>
            <h2 className='text-3xl font-bold'>Choose Blogs</h2>
            <div className='grid grid-cols-1 px-10 gap-10 gap-y-5 pb-10 mt-3'>
                {
                    data.map((item, i) => (
                        <div key={i} className="">
                            <motion.div
                                initial={{ opacity: 0, x: -40, y: 50, scale: 0.70 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0, y: 0, scale: 1
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: "backInOut",
                                }}
                                className="flex gap-y-4 cursor-pointer items-center flex-col justify-center w-full"
                                onClick={() => newRouter({slug: item.slug.current, categories: item.categoriess})}
                                >
                                <div key={i} className="flex-shrink-0 h-20 w-28 md:h-24 md:w-full">
                                    <Image src={item.imageSrc} alt="metaverse" height={150} width={150} className="h-full w-full object-cover rounded-md" />
                                </div>
                                <div className="basis-9/12">
                                    <h3 className="font-semibold md:text-lg text-center">{item.title}</h3>
                                </div>
                            </motion.div>
                            <div className="w-full h-[0.05rem] bg-slate-400"></div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}



