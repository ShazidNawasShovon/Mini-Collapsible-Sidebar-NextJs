"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
    const toggleSidebar = () => {
        // Elements
        const sidebar = document.querySelector("aside");
        const maxSidebar = document.querySelector(".max");
        const miniSidebar = document.querySelector(".mini");
        const maxToolbar = document.querySelector(".max-toolbar");
        const logo = document.querySelector(".logo");
        const content = document.querySelector(".content");

        // Toggle sidebar
        const isMini = sidebar.classList.toggle("-translate-x-48");

        if (isMini) {
            // Mini sidebar
            maxSidebar.classList.add("hidden");
            maxSidebar.classList.remove("flex");
            miniSidebar.classList.add("flex");
            miniSidebar.classList.remove("hidden");
            maxToolbar.classList.add("translate-x-24", "scale-x-0");
            maxToolbar.classList.remove("translate-x-0");
            logo.classList.add("ml-12");
            content.classList.remove("md:ml-60");
            content.classList.add("md:ml-12");
        } else {
            // Max sidebar
            maxSidebar.classList.remove("hidden");
            maxSidebar.classList.add("flex");
            miniSidebar.classList.remove("flex");
            miniSidebar.classList.add("hidden");
            maxToolbar.classList.remove("translate-x-24", "scale-x-0");
            maxToolbar.classList.add("translate-x-0");
            logo.classList.remove("ml-12");
            content.classList.remove("md:ml-12");
            content.classList.add("md:ml-60");
        }
    };

    return (
        <aside
            className="w-60 -translate-x-48 fixed transition transform ease-linear duration-500 z-50 flex h-screen bg-[#1E293B] ">
            <div
                className="max-toolbar translate-x-24 scale-x-0 w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-[#1E293B]  absolute top-2 rounded-full h-12">

                <div className="flex pl-4 items-center space-x-2 ">
                    <div className="text-white hover:text-[#38BDF8] dark:hover:text-[#38BDF8] hover:bg-[#A4B9FF] p-2 rounded-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}
                             stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                        </svg>
                    </div>
                </div>
                <div
                    className="flex items-center space-x-3 group bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-purple-500  pl-10 pr-2 py-1 rounded-full text-white  ">
                    <div className="transform ease-in-out duration-300 mr-12">
                        <Link href={'/'}>
                            <Image width={100} height={30} className={"w-auto h-8"} src={"/images/logo.svg"} alt={"Nex Live Logo"}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div onClick={toggleSidebar}
                 className="-right-6 transition transform ease-in-out duration-500 flex border-4 border-white dark:border-[#0F172A] bg-[#1E293B] dark:hover:bg-blue-500 hover:bg-purple-500 absolute top-2 p-3 rounded-full text-white hover:rotate-45 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}
                     stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/>
                </svg>
            </div>
            {/*MAX SIDEBAR*/}
            <div className="max hidden text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]">
                <div
                    className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                    </svg>
                    <div>
                        Home
                    </div>
                </div>
                <div
                    className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
                    </svg>
                    <div>
                        Table
                    </div>
                </div>
                <div
                    className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"/>
                    </svg>
                    <div>
                        Graph
                    </div>
                </div>
            </div>
            {/*<!-- MINI SIDEBAR-->*/}
            <div className="mini mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]">
                <div
                    className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                    </svg>
                </div>
                <div
                    className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
                    </svg>
                </div>
                <div
                    className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"/>
                    </svg>
                </div>
            </div>

        </aside>
    );
};

export default Sidebar;