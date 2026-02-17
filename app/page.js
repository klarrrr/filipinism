import CTAButton from "./component/cta_button";
import DBCard from "./component/db_card";
import LessonCircle from "./component/lesson_circle";
import StatCard from "./component/stat_card";
import FunFact from "./component/fun_fact";

export default function Home() {
  return (
    // bg-linear-to-tr from-blue-900  to-blue-600
    <div className="flex-1 w-full h-screen space-y-8 animate-fade-in">

      {/* Hero Section */}

      <div className=" 
        bg-linear-50 
        from-(--deep-blue) 
        to-(--sky-blue)
        p-10
        pt-16
        pb-16
        md:pl-16 md:pr-16 
        lg:pl-32 lg:pr-32 
        xl:pl-64 xl:pr-64
        text-center
      ">
        <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl mb-8">Break Free from Filipinism</h1>
        <h2 className="md:text-xl mb-8">
        Master English with Confidence - An interactive learning platform for <span className="font-bold">Filipino 11th graders</span>
        </h2>
        <CTAButton label={"Start Learning 🚀"} />
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
