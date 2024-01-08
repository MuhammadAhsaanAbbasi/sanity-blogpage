import Image from 'next/image'
import { BiLogoFacebookCircle } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";

import Dropdown from './dropdown';

const Header = () => {
    return (
        <>
            <div className='mx-3 my-4 flex items-center px-5 justify-between md:justify-around'>
                <div className='flex flex-col md:flex-row items-center justify-center md:gap-x-4 gap-y-4'>
                    <GrInstagram size={28} className="text-zinc-500" />
                    <BiLogoFacebookCircle size={28} className="text-zinc-500" />
                    <BsTwitterX size={28} className="text-zinc-500" />
                    <FaLinkedin size={28} className="text-zinc-500" />
                </div>
                <div className='px-6 py-3 flex gap-y-4 items-center flex-col justify-center'>
                    <Image
                        src="/assests/profile.jpg"
                        alt=''
                        height={100}
                        width={100}
                        className='rounded-full border-2 border-black border-solid'
                    />
                    <h2 className={`text-3xl md:text-5xl font-bold text-blue-700 font-['ananda'] text-center`}>Muhammad Ahsaan Abbasi</h2>
                </div>
                <div className='flex items-center flex-col justify-center md:flex-row space-y-3 md:space-x-5 max-md:absolute top-10 right-10'>
                <HiOutlineSearch className="text-black" size={28} />
                    <Dropdown/>
                </div>
            </div>
        </>
    )
}

export default Header