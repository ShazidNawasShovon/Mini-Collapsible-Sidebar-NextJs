"use client"

import React, {useState} from 'react';
import {usePathname} from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname(); // Get current route

    // Function to check if the current route matches or starts with the provided href
    const isActiveLink = (href) => {
        return pathname === href || pathname.startsWith(href);
    };

    // Function to check if the current route partially matches the provided href (for sub-menus)
    const isActiveSubLink = (href) => {
        return pathname.startsWith(href);
    };
    return (
        <header
            className="fixed w-full z-30 flex bg-[#1E293B] dark:bg-[#1E293B] p-2 items-center justify-center h-16 px-10 text-white dark:text-white">
            <div className="logo ml-12  flex-none h-full flex items-center justify-center">
                <Link href={'/'}>
                    <Image width={100} height={48} src={"/images/logo.svg"} alt={"Nex Live Logo"}/>
                </Link>
            </div>
            <div className="grow h-full flex items-center justify-center">

            </div>
            <div className="flex-none h-full text-center flex items-center justify-center">
                <div className="flex space-x-3 items-center px-3">
                    <div className="flex-none flex justify-center">
                        <div className="w-8 h-8 flex">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShta_GXR2xdnsxSzj_GTcJHcNykjVKrCBrZ9qouUl0usuJWG2Rpr_PbTDu3sA9auNUH64&usqp=CAU"
                                alt="profile"
                                className="shadow rounded-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="hidden md:block text-sm md:text-md">
                        John Doe
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;