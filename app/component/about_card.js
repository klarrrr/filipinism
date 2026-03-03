"use client";

import { useState } from "react";

const about_card = ({picLoc, name, position, desc}) => {
    const [wantsMore, setWantsMore] = useState(true);

  return (
    <div className="
        rounded-3xl
        overflow-hidden

        h-144
        md:h-auto

        flex
        flex-col
        border-8
        border-white
        shadow-lg

        hover:shadow-2xl
        hover:-translate-y-1
        transition
        ease-in-out
        duration-300
        bg-white

        relative
    "
    >
        <div
            className="
                h-full
                md:h-128
                w-full
                md:w-auto
                rounded-2xl
                relative
            "
            style={{ 
                backgroundImage: `url(${picLoc})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        ></div>
        <div className="
            absolute
            md:relative
            overflow-hidden
            bottom-0
            ">

            {/* Gradient overlay */}

            <div className="
                pointer-events-none
                absolute inset-0
                bg-linear-to-t
                md:from-white
                md:via-white/40
                md:to-white/0
                from-black
                via-black/40
                to-black/0
            " />

            {/* Content */}

            <div className="flex flex-col justify-end">
                <div className="relative pl-4 pr-4 pt-16 md:p-8 flex flex-col gap-4">
                    <h1 className="md:text-(--deep-blue) text-3xl font-bold">{name}</h1>
                    <p className="md:text-(--bright-blue) text-lg font-medium">{position}</p>
                    <p className={`md:text-(--dark-text) text-md ${wantsMore ? 'line-clamp-1 md:line-clamp-3' : ''}`}>{desc}</p>
                    <button onClick={()=>{setWantsMore(!wantsMore)}} 
                        className="text-(--sky-blue) w-fit self-center transition ease-in-out duration-300 hover:text-blue-300 hover:cursor-pointer mb-8 md:mb-auto">
                        {wantsMore ? 'See More...' : 'See less...'}
                    </button>
                </div>

                {/* <div className="justify-center lg:justify-normal lg:pr-8 mb-8 flex lg:flex-row-reverse">
                    <a href="" className="text-white md:text-(--dark-text) mt-4 relative self-end transition ease-in-out duration-300 hover:scale-110 ">Contact →</a>
                </div> */}
            </div>
            </div>
    </div>
  )
}

export default about_card
