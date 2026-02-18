"use client";

import {useState} from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";

const useNavbarScroll = () => {
    const pathname = usePathname();
    const isDashboard = (pathname == "/");

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [solid, setSolid] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) =>{
        const previous = scrollY.getPrevious() || 0;

        if(latest > previous && latest > 10){
            setHidden(true);
        }else{
            setHidden(false);
        }

        const heroHeight =
        typeof window !== "undefined" ? window.innerHeight - 100 : 0;

        setSolid(latest > heroHeight);
    })

    if (!isDashboard) {
        return { hidden: false, solid: true };
    }
      
    return { hidden, solid };
}

export default useNavbarScroll
