"use client";

import Navbar from "./navbar";
import MobileNavbar from "./mobile_navbar";
import BurgerBtn from "./burger_btn";
import { useState } from "react";
import Image from "next/image";

const header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="sticky top-0 z-30">
            <Navbar/>
            <MobileNavbar open={open} setOpen={setOpen}/>
            {/* <Image src="/puzzle.svg" height={32} width={32} alt='logo' className="md:hidden fixed top-6 left-4"/> */}
            <BurgerBtn open={open} setOpen={setOpen}/>
        </div>
    )
}

export default header
