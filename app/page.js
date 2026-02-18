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
        <CTAButton label={"Start Learning 🚀"} />
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
        <DBCard icon={'📚'} title={'What We Learn'} paragraph={'Common Filipino-English mistakes and how to correct them for better communication'} />
        <DBCard icon={'🎯'} title={'Why It Matters'} paragraph={'Professional and academic success requires clear, grammatically correct English'} />
        <DBCard icon={'🎮'} title={'How We Learn'} paragraph={'Interactive lessons, engaging quizzes, and fun activities make learning enjoyable'} />
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
