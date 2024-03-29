"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '../../../sanity/lib/client';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from 'next/link';
import { motion } from "framer-motion"

// interface Props {
//     posts:Post[]
// }

export const revalidate = 300
export default function Blogs() {
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
    const [data, setData] = useState<Post[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await client.fetch(`*[_type == "post" && categories[0]._ref in ["5460d448-1e2d-456f-b797-52ab178cfafe", "3d5d0bf6-2333-4e56-a54f-ca8f5ffa534b"]]{
                ...,
                authors->,
                categories[]->,
                "Slug": slug.current,
                "imageSrc": mainImage.asset->url,
            }`);

            setData(result);
        };

        fetchData();
    }, [data, setData]);
    return (
        <div>
            <h2>Choose Blogs</h2>
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
                                className="flex gap-y-4 cursor-pointer items-center flex-col justify-center">
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



