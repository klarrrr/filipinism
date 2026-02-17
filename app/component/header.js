"use client";

import Navbar from "./navbar";
import MobileNavbar from "./mobile_navbar";
import BurgerBtn from "./burger_btn";
import { useState } from "react";

const header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="sticky top-0 z-30">
            <Navbar/>
            <MobileNavbar open={open} setOpen={setOpen}/>
            <BurgerBtn open={open} setOpen={setOpen}/>
        </div>
    )
}

export default header
