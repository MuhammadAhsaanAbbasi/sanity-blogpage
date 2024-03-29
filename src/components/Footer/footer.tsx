import Link from 'next/link';
import React from 'react'
import { PiCopyright } from "react-icons/pi";

const Footer = () => {
    return (
        <div className='bg-black backdrop-blur-lg bg-opacity-40 rounded drop-shadow-lg text-white text-center flex justify-center items-center w-full h-full overflow-hidden py-4 px-3'>
            <h3 className='text-center text-lg flex items-center gap-x-1 font-semibold'>
                Copyright<PiCopyright /> 2023: Designed by{' '}
                <Link href={"https://www.linkedin.com/in/muhammad-ahsaan-abbasi-995630263/"} target="_blank"
                className='hover:underline'
                >
                    MAA
                </Link>{' '}
            </h3>
        </div>
    )
}

export default Footer