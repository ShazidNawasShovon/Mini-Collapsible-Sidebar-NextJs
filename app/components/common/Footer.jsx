import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer
            className="fixed bottom-0 left-0 right-0 z-40 px-4 py-2 text-center text-white  backdrop-blur-md ">
            <p className="text-white text-sm text-center">
                Copyright © 2024. All rights reserved by, <Link href={"https://github.com/ShazidNawasShovon"} className={"font-semibold hover:underline"}>Shazid Nawas Shovon</Link>
            </p>
        </footer>
    );
};

export default Footer;