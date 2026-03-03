import ActivitiyCard from "../component/activitiy_card"

const page = () => {
  return (
    <div className="flex-1 w-full h-screen space-y-8 animate-fade-in">
      <div className="p-16 flex items-center justify-center gap-4 flex-col mb-0">
        <h2 className="text-(--deep-blue) text-4xl font-bold text-center">Interactive Session</h2>
        <p className="text-md lg:text-lg xl:text-xl text-(--dark-text) text-center">Practice what you've learned through engaging exercises</p>
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
        <ActivitiyCard 
          category={'Quiz'} 
          title={'Filipinism Multiple Choice Challenge'} 
          desc={'Test your knowledge by identifying Filipinisms in everyday sentences'} 
          tags={
            [
              '⏱️ 10 min', 
              '📊 10 questions', 
              '⭐ Beginner']
          } 
          loc={'activities/quiz'}
        />
        <ActivitiyCard 
          category={'Essay'} 
          title={'Essay Writing Practice'} 
          desc={'Practice your essay-writing skills using these prompts'} 
          tags={
            [
              '⏱️ 60-90 min', 
              '📊 10 prompts', 
              '⭐ Intermediate']
          } 
          loc={'activities/essay'}
        />
        {/* <ActivitiyCard 
          category={'Writing'} 
          title={'Sentence Correction Workshop'} 
          desc={'Fix common Filipinisms and learn the proper English alternatives'} 
          tags={
            [
              '⏱️ 15 min', 
              '✏️ 10 exercises', 
              '⭐⭐ Intermediate']
          } 
          loc={''}
        />
        <ActivitiyCard 
          category={'Game'} 
          title={'Match the Phrases'} 
          desc={'Match Filipinisms with their correct English equivalents in this timed game'} 
          tags={
            [
              '⏱️ 8 min', 
              '🎮 Interactive', 
              '⭐ Beginner']
          } 
          loc={''}
        />
        <ActivitiyCard 
          category={'Writing'} 
          title={'Language Reflection Journal'} 
          desc={'Reflect on your own language use and compare with model responses'} 
          tags={
            [
              '⏱️ 20 min', 
              '📝 Self-paced', 
              '⭐⭐ Intermediate']
          } 
          loc={''}
        />
        <ActivitiyCard 
          category={'Game'} 
          title={'Spot the Error'} 
          desc={'Find Filipinisms hidden in comic-style conversations'} 
          tags={
            [
              '⏱️ 12 min', 
              '🎯 Interactive', 
              '⭐⭐ Intermediate']
          } 
          loc={''}
        />
        <ActivitiyCard 
          category={'Quiz'} 
          title={'Advanced Competency Test'} 
          desc={'Challenge yourself with complex scenarios and professional contexts'} 
          tags={
            [
              '⏱️ 20 min', 
              '📊 20 questions', 
              '⭐⭐⭐ Advanced']
          } 
          loc={''}
        /> */}
      </div>
    </div>
  )
}

export default page
