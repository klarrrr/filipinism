"use client";

import CTAButton from "./component/cta_button";
import DBCard from "./component/db_card";
import LessonCircle from "./component/lesson_circle";
import StatCard from "./component/stat_card";
import FunFact from "./component/fun_fact";
import Image from "next/image";
import HeroArrow from "./component/HeroArrow";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const heroPics = [
    '/hero-1.jpg',
    '/hero-2.jpg',
    '/hero-3.jpg',
    '/hero-4.jpg',
    '/hero-5.jpg',
    '/hero-6.jpg',
    '/hero-7.jpg',
    '/hero-8.jpg',
  ];

  const [index, setIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setIndex((prevIndex) => (prevIndex + 1) % heroPics.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  // const randomHeroPic = heroPics[Math.floor(Math.random() * heroPics.length)];
  return (
    // bg-linear-to-tr from-blue-900  to-blue-600
    <div className="flex-1 w-full h-screen space-y-8 animate-fade-in">

      {/* Hero Section */}

      <div className=" bg-linear-50 from-(--deep-blue) to-(--sky-blue) p-10 pt-16 pb-16 md:pl-16 md:pr-16  lg:pl-32 lg:pr-32  xl:pl-64 xl:pr-64 text-center h-screen relative flex flex-col justify-center items-center
      ">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroPics[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={heroPics[index]}
                alt={`Slide ${index + 1}`}
                fill
                priority
                className="object-cover grayscale"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="absolute inset-0 bg-(--bright-blue)/40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

        <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl mb-8 relative"><span className="text-(--sky-blue)">Break</span> Free from <span className="text-(--bright-blue)">Filipinism</span></h1>
        <h2 className="md:text-xl w-3/6 sm:w-4/6 md:w-5/6 lg:w-full mb-8 relative">
          Master English with Confidence - An interactive learning platform for <span className="font-bold">Filipino 11th graders</span>
        </h2>
        <a
            href="/lessons"
            className="
                
                pl-10 pr-10 pt-5 pb-5
                bg-(--white)
                text-(--bright-blue)
                font-bold
                text-xl
                rounded-4xl
                transition
                ease-in-out
                transform
                drop-shadow-lg
                hover:-translate-y-0.5
                hover:drop-shadow-2xl
                duration-300
                self-center
                w-fit
                flex
                gap-4
            "
        >
          Start Learning
          <svg width="25px" height="25px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 16L12 14V10L13.6569 8.34314C15.1571 6.84285 16 4.80802 16 2.68629V0H13.3137C11.192 0 9.15714 0.842855 7.65685 2.34315L6 4H2L0 6L10 16ZM10.5 7C11.3284 7 12 6.32843 12 5.5C12 4.67157 11.3284 4 10.5 4C9.67157 4 9 4.67157 9 5.5C9 6.32843 9.67157 7 10.5 7Z" fill="#3B82F6"/>
            <path d="M4.9274 13.7558L2.24423 11.0726L0 15L1 16L4.9274 13.7558Z" fill="#3B82F6"/>
          </svg>
        </a>
        <div
          className="absolute inset-y-0 left-6 flex items-center z-20"
        >
          <HeroArrow direction="left" onClickCycle={()=> setIndex((index - 1) % heroPics.length)} />
        </div>

        <div
          className="absolute inset-y-0 right-6 flex items-center z-20"
        >
          <HeroArrow direction="right" onClickCycle={()=> setIndex((index + 1) % heroPics.length)}/>
        </div>

        <div className="absolute inset-y-0 bottom-0 flex flex-col justify-end pb-2">
          <p className="text-white animate-bounce">↓</p>
        </div>
      </div>



      {/* What is Filipinism */}
      
      <div className="
        pr-10
        pl-10 
        lg:pl-32 lg:pr-32 
        xl:pl-64 xl:pr-64 

        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3 
        gap-4
      ">
        <DBCard icon={
          <svg width="50" height="50px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0C3.34315 0 2 1.34315 2 3V13C2 14.6569 3.34315 16 5 16H14V14H4V12H14V0H5Z" fill="#1E3A8A"/>
          </svg>
        } title={'What We Learn'} paragraph={'Common Filipino-English mistakes and how to correct them for better communication'} />
        <DBCard icon={
          <svg width="50px" height="50px" viewBox="0 -0.5 11 11" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-344.000000, -525.000000)" fill="#1E3A8A">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                          <polygon id="important_details-[#1443]" points="299 371 296.1554 371 298.1673 372.828 296.6108 374.243 294.6 372.414 294.6 375 292.4 375 292.4 372.414 290.3892 374.243 288.8327 372.828 290.8446 371 288 371 288 369 290.8446 369 288.8327 367.172 290.3892 365.757 292.4 367.586 292.4 365 294.6 365 294.6 367.586 296.6108 365.757 298.1673 367.172 296.1554 369 299 369">
          
          </polygon>
                      </g>
                  </g>
              </g>
          </svg>
        } title={'Why It Matters'} paragraph={'Professional and academic success requires clear, grammatically correct English'} />
        <DBCard icon={
          <svg width="50px" height="50px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13L3 14L6 11H10L13 14L16 13L15.248 4.7284C15.1076 3.18316 13.812 2 12.2604 2H3.73964C2.18803 2 0.89244 3.18316 0.751964 4.72839L0 13ZM12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6ZM12 8C12 8.55228 11.5523 9 11 9C10.4477 9 10 8.55228 10 8C10 7.44772 10.4477 7 11 7C11.5523 7 12 7.44772 12 8ZM5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z" fill="#1E3A8A"/>
          </svg>
        } title={'How We Learn'} paragraph={'Interactive lessons, engaging quizzes, and fun activities make learning enjoyable'} />
      </div>

      {/* Learning Journey */}

      <div className="
        pr-10
        pl-10
        lg:pl-32 lg:pr-32 
        xl:pl-64 xl:pr-64 
      ">
        <div className="
          p-16 
          shadow-lg
          rounded-2xl
          bg-white
          border-2 
          flex-1
          space-y-8
        ">
          <h2 className="text-(--deep-blue) text-4xl font-bold text-center">Your Learning Journey</h2>

          {/* Lesson Circles */}

          <div className="flex flex-wrap justify-around space-y-8 items-center">
            <LessonCircle isComplete={true} number={1} title={'Introduction to Filipinism'} location={'/lessons/intro_to_filipinism'}/>
            <LessonCircle isComplete={true} number={2} title={'Everyday Examples'} location={'/lessons/everyday_examples'}/>
            <LessonCircle isComplete={true} number={3} title={'Historical Roots'} location={'/lessons/historical_roots'}/>
            <LessonCircle number={4} title={'Modern Relevance'} location={'/lessons/modern_relevance'}/>
            <LessonCircle number={5} title={'Interactive Practice'} location={'/lessons/interactive_practice'}/>
            <LessonCircle number={6} title={'Deep Dive'} location={'/lessons/deep_dive'}/>
          </div>
        </div>
      </div>

      {/* Stat Cards */}

      <div className="
        pr-10
        pl-10
        lg:pl-32 lg:pr-32 
        xl:pl-64 xl:pr-64 
        grid
        gap-4
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
      ">
        <StatCard title={'Lessons Completed'} stat={'3/6'} />
        <StatCard title={'Quiz Average'} stat={'85%'} />
        <StatCard title={'Current Streak 🔥'} stat={'5'} />
        <StatCard title={'Time Learning'} stat={'2.5h'} />
      </div>

      {/* Random Fact */}

      <div className="
        p-16
        gap-8
        md:pl-32 md:pr-32
        lg:pl-64 lg:pr-64 
        xl:pl-96 xl:pr-96
        2xl:pl-128 2xl:pr-128
        xl:gap-16
        
        bg-linear-30
        from-(--sky-blue)
        to(--light-blue)

        flex 
        items-center
        flex-col-reverse
        md:flex-row
      ">
        <div className="flex flex-wrap items-center justify-center md:justify-normal space-y-4 text-center md:text-left">
          <h2 className="text-4xl font-bold text-(--dark-text)">Fun Fact!</h2>
          <FunFact />
        </div>
        <img src="/idea.svg" className="h-42 w-42 animate-pulse"/>
      </div>

    </div>
  );
}
