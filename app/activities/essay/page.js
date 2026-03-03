import React from 'react'
import BackButton from '@/app/component/BackButton'
import EssayBox from '@/app/component/EssayBox'

const page = () => {
  return (
    <div className='flex-1 w-full h-screen space-y-8 animate-fade-in'>
      <div className='p-4 sm:p-8 flex gap-4 flex-col mb-0 md:p-16 lg:pl-32 lg:pr-32 xl:pl-64 xl:pr-64'>
        
        {/* Back Button */}

        <BackButton loc={'../activities'} backToWhere={'Back to Activities'} />
        
        <div className="p-16 flex items-center justify-center gap-4 flex-col mb-0">
            <h2 className="text-(--deep-blue) text-4xl font-bold text-center">Essay Writing Practice</h2>
            <p className="text-md lg:text-lg xl:text-xl text-(--dark-text) text-center">Practice your essay-writing skills using these prompts</p>
        </div>

        {/* Essay Boxes */}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <EssayBox content={'Describe a challenge you experienced in school and explain how you overcame it. What did you learn from it.'} num={1} />
            <EssayBox content={'Do you think social media has more positive or negative effects on students? Explain your answer with examples.'} num={2} />
            <EssayBox content={'If you were given the chance to change one school rule, what would it be and why?'} num={3} />
            <EssayBox content={'Explain the importance of discipline in achieving personal goals.'} num={4} />
            <EssayBox content={'How can students manage their time effectively between academics and personal life?'} num={5} />
            <EssayBox content={'Describe a person who greatly influenced your life. What qualities make this person admirable?'} num={6} />
            <EssayBox content={'Why is communication important in building strong relationships?'} num={7} />
            <EssayBox content={'Discuss the advantages and disadvantages of online learning.'} num={8} />
            <EssayBox content={'In your opinion, what makes a person a good leader?'} num={9} />
            <EssayBox content={'How can young people contribute to solving community problems?'} num={10} />
        </div>

      </div>
    </div>
  )
}

export default page