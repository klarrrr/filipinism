
import React from 'react'

const burger_btn = ({open, setOpen}) => {
    return (
        <button
            onClick={() => setOpen(!open)}
            className="md:hidden fixed top-4 right-4 w-10 h-10 flex flex-col justify-center items-center gap-1 z-30"
            >
            <span className={`w-10 h-1.5 bg-(--deep-blue) transition-all ${open && 'rotate-45 translate-y-2.5 bg-white'}`} />
            <span className={`w-10 h-1.5 bg-(--deep-blue) transition-all ${open && 'opacity-0 bg-white'}`} />
            <span className={`w-10 h-1.5 bg-(--deep-blue) transition-all ${open && '-rotate-45 -translate-y-2.5 bg-white'}`} />
        </button>
    )
}

export default burger_btn
