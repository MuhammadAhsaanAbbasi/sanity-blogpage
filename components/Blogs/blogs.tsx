"use client"
import React, { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client';
import Bloglist from '../BlogList/bloglist';

export default function Blog () {
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
    console.log(data)
    return data
}
