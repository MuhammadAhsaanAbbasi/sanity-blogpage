"use client"
import React, { useState } from 'react'
import { Menu } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeBtn from '../Themebtn/themeBtn';
import Link from 'next/link';

const Dropdown = () => {
    const [position, setPosition] = useState("")
    return (
        <>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className="cursor-pointer">
                        <Menu />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 cursor-pointer md:mx-5">
                            <DropdownMenuLabel>My Profile</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                <DropdownMenuRadioItem value="blogs"><Link href={"/"}>Home</Link></DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="bottom"><Link href={"#blogs"}>Blogs</Link></DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="contact"><Link href={"#contact"}>Contact</Link></DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
        </>
    )
}

export default Dropdown