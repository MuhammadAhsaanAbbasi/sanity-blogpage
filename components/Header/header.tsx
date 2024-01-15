import Image from 'next/image'
import { BiLogoFacebookCircle } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";

import Dropdown from './dropdown';
import Link from 'next/link';
import ThemeBtn from '../Themebtn/themeBtn';

const Header = () => {
    return (
        <>
            <div className='mx-3 my-4 flex items-center px-5 justify-between md:justify-around'>
                <div className='flex flex-col md:flex-row items-center justify-center md:gap-x-4 gap-y-4'>
                    <Link href={"https://www.instagram.com/maa_creative5/"} target='_blank'>
                    <GrInstagram size={28} className="text-zinc-500 cursor-pointer hover:scale-105 drop-shadow-md" />
                    </Link>
                    <Link href={"https://www.facebook.com/ahsaan.abbasi.334/"} target='_blank'>
                    <BiLogoFacebookCircle size={28} className="text-zinc-500 cursor-pointer hover:scale-105 drop-shadow-md" />
                    </Link>
                    <Link href={"https://twitter.com/Muhamma99141099"} target='_blank'>
                    <BsTwitterX size={28} className="text-zinc-500 cursor-pointer hover:scale-105 drop-shadow-md" />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/muhammad-ahsaan-abbasi-995630263/"} target='_blank'>
                    <FaLinkedin size={28} className="text-zinc-500 cursor-pointer hover:scale-105 drop-shadow-md" />
                    </Link>
                </div>
                <div className='px-6 py-3 flex gap-y-4 items-center flex-col justify-center'>
                    <Image
                        src="/assests/maa_logo.jpeg"
                        alt='my profile'
                        height={500}
                        width={500}
                        className='rounded-full border-2 border-slate-400 border-solid h-[100px] w-[100px]'
                    />
                    <h2 className={`text-3xl md:text-5xl font-bold text-blue-700 font-['ananda'] text-center`}>Muhammad Ahsaan Abbasi</h2>
                </div>
                <div className='flex items-center flex-col justify-center md:flex-row space-y-2 md:space-x-5 max-md:absolute top-10 right-10'>
                    <ThemeBtn/>
                    <Dropdown/>
                <HiOutlineSearch className="text-black dark:text-white" size={28} />
                </div>
            </div>
        </>
    )
}

export default Header