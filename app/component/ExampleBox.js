"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExampleBox = ({css, title, examples}) => {
    const [index, setIndex] = useState(0)
    return (
        // Choose from the examples
        <div className={`text-(--dark-text) rounded-xl flex flex-col ${css} overflow-hidden`}>
            
            {/* Example Title */}
            
            <div className="flex items-center justify-center flex-col gap-2 bg-(--bright-blue) p-4 md:p-8">
                <p className="text-sm text-white">Category Titled:</p>
                <h2 className='font-bold text-lg md:text-xl lg:text-2xl text-white text-center'>"{title}"</h2>
            </div>

            {/* One Example at a time */}

            <div className="flex items-center justify-center bg-white p-8 pt-16 pb-16 md:p-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="text-2xl md:text-4xl italic text-center"
                    >
                        {examples[index]}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Btns and Progress */}

            <div className="flex flex-col items-center justify-center gap-4 p-8">

                {/* Progress Mobile */}

                <p className="block md:hidden"><span className="font-semibold">{index+1}</span> out of <span className="font-semibold">{examples.length}</span></p>

                {/* Previous Button */}

                <div className="flex flex-row justify-center gap-4 items-center">
                    <button onClick={
                            ()=>{
                                if (index > 0) {
                                    setIndex((index - 1) % examples.length);
                                }else{
                                    setIndex(examples.length - 1);
                                }
                            }
                        } className="p-4 bg-(--deep-blue) text-white rounded-2xl transition ease-in-out duration-300 hover:bg-(--bright-blue) hover:cursor-pointer w-25 md:w-50 flex flex-row gap-2 justify-center items-center">← <span className="hidden md:block">Back</span></button>

                    {/* Progress */}

                    <p className="hidden md:block"><span className="font-semibold">{index+1}</span> out of <span className="font-semibold">{examples.length}</span></p>

                    {/* Next Button */}

                    <button onClick={
                            ()=>{
                                if (index < examples.length) {
                                    setIndex((index + 1) % examples.length);
                                }else{
                                    setIndex(0);
                                }
                            }
                        } className="p-4 bg-(--deep-blue) text-white rounded-2xl transition ease-in-out duration-300 hover:bg-(--bright-blue) hover:cursor-pointer w-25 md:w-50 flex flex-row gap-2 justify-center items-center"><span className="hidden md:block">Next</span> →</button>
                </div>
            </div>
            
        </div>
    )
}

export default ExampleBox
