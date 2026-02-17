import LessonCard from "../component/lesson_card"

const page = () => {
  return (
    <div className="flex-1 w-full h-screen space-y-8 animate-fade-in">
      <div className="p-16 flex items-center justify-center gap-4 flex-col mb-0">
        <h2 className="text-(--deep-blue) text-4xl font-bold text-center">Learning Modules</h2>
        <p className="text-md lg:text-lg xl:text-xl text-(--dark-text) text-center">Explore comprehensive lessons designed to eliminate Filipinisms from your English</p>
      </div>
      <div className="
        pr-5
        pl-5
        pb-16
        lg:pl-32 lg:pr-32 
        xl:pl-64 xl:pr-64 
        grid
        gap-8
        grid-cols-1
        md:grid-cols-2
        2xl:grid-cols-3
      ">
        <LessonCard 
          iconLoc={'/lego.svg'} 
          iconAlt={'Lego Logo'}
          title={'Introduction to Filipinism'} 
          desc={'Understand what Filipinism is and why it affects our English communication...'} 
          tags={["⏱️15-20 min", "✅ Completed"]} 
          count={1} 
          loc={'lessons/intro_to_filipinism'}
        />

        <LessonCard 
          iconLoc={'/solve.svg'} 
          iconAlt={'Solve Logo'}
          title={'Examples in Everyday Language'} 
          desc={'Discover common mistakes we make daily without realizing...'} 
          tags={["⏱️20-25 min", "✅ Completed"]} 
          count={2} 
          loc={'lessons/everyday_examples'}
        />

        <LessonCard 
          iconLoc={'/dino.svg'} 
          iconAlt={'Dino Logo'}
          title={'Historical Roots'} 
          desc={'Explore how Spanish and Filipino languages shaped our English...'} 
          tags={["⏱️18-22 min", "✅ Completed"]} 
          count={3} 
          loc={'lessons/historical_roots'}
        />

        <LessonCard 
          iconLoc={'/phone.svg'} 
          iconAlt={'Phone Logo'}
          title={'Modern Relevance'} 
          desc={'Why correcting Filipinisms matters in today\'s global world...'} 
          tags={["⏱️15-18 min", "🔓 Unlocked"]} 
          count={4} 
          loc={'lessons/modern_relevance'}
        />

        <LessonCard 
          iconLoc={'/game.svg'} 
          iconAlt={'Game Logo'}
          title={'Interactive Section'} 
          desc={'Apply what you\'ve learned through fun activities and challenges...'} 
          tags={["⏱️30-40 min", "⭐ Most Popular!"]} 
          count={5} 
          loc={'lessons/interactive_practice'}
        />

        <LessonCard 
          iconLoc={'/shark.svg'} 
          iconAlt={'Shark Logo'}
          title={'Deep Dive: Language Accuracy'} 
          desc={'Master advanced concepts for academic and professional excellence...'} 
          tags={["⏱️25-30 min", "🔓 Unlocked"]} 
          count={6} 
          loc={'lessons/deep_dive'}
        />
       
      </div>
    </div>
  )
}

export default page
