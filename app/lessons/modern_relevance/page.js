import React from 'react'
import BackButton from '@/app/component/BackButton'
import LessonBox from '@/app/component/LessonBox'

const page = () => {
  return (
    <div className='flex-1 w-full h-screen space-y-8 animate-fade-in'>
      <div className='p-4 sm:p-8 flex gap-4 flex-col mb-0 md:p-16 lg:pl-32 lg:pr-32 xl:pl-64 xl:pr-64'>
        
        {/* Back Button */}

        <BackButton loc={'/lessons'} backToWhere={'Back to Lessons'} />
        
        {/* Lesson Box Component */}
        
        <LessonBox 
          dir={'Dashboard > Lessons > Modern Relevance'} 
          title={'Modern Relevance'}
          subtitle={'Relevant today as it helps Filipinos live with pride and identity in the modern world'}

          // Add elements in content:
          // separate by comma and put them by order

          content={[

            <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-8'>

                {/* <p className='text-md lg:text-lg text-justify'>
                  Today, Filipinism is still very visible, especially in the formal essay writing of students. Since many Filipino students think in Filipino first before writing in English, some Filipino language patterns appear in their essays.
                </p> */}

                <h2 className='font-bold text-(--deep-blue) text-2xl text-center' >How It Is Relevant Today</h2>

                <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-8 bg-(--light-blue) border-(--bright-blue) border-l-4 border-r-4'>
                  <h2 className='font-bold text-lg'>Filipinism affects:</h2>
                  <ul className='list-disc pl-4 pr-4 md:pl-8 md-pr-8 flex flex-col gap-8 md:gap-4'>
                    <li>
                      Word choice
                    </li>
                    <li>
                    Sentence structure
                    </li>
                    <li>
                    Level of formality
                    </li>
                  </ul>
                </div>

              {/* <p className='text-md lg:text-lg text-justify'>
                In academic writing, students are expected to use formal and accurate English. However, because of Filipinism, some expressions become directly translated from Filipino, which may affect clarity and lexical competency.
              </p> */}

              <h2 className='font-bold text-(--deep-blue) text-2xl text-center' >Examples in Students’ Formal Writing</h2>
              
              <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-8 bg-(--light-blue) border-(--bright-blue) border-l-4 border-r-4'>
                <ul className='list-disc pl-4 pr-4 md:pl-8 md-pr-8 flex flex-col gap-8 md:gap-4'>
                  
                  <li>
                    <span className='font-semibold'>“Based on my own opinion…”</span> → better: In my opinion 
                  </li>

                  <li>
                    <span className='font-semibold'>“It is because…” </span> → sometimes unnecessary in formal essays  
                  </li>

                  <li>
                    <span className='font-semibold'>According to the author said…”</span> → incorrect structure  
                  </li>

                </ul>
              </div>

              {/* <p className='text-md lg:text-lg text-justify'>
                These examples show how Filipino thinking patterns can influence English essay writing.
              </p> */}

              <h2 className='font-bold text-(--deep-blue) text-2xl text-center' >Relevance to Writing</h2>

              <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-8 bg-(--light-blue) border-(--bright-blue) border-l-4 border-r-4'>
                <h2 className='font-bold text-lg'>Understanding Filipinism helps students:</h2>
                <ul className='list-disc pl-4 pr-4 md:pl-8 md-pr-8 flex flex-col gap-8 md:gap-4'>
                  <li>Become more aware of their language use</li>
                  <li>Improve vocabulary and word accuracy</li>
                  <li>Use more formal and appropriate expressions</li>
                  <li>Strengthen their lexical competency</li>
                </ul>
              </div>

              <h2 className='font-bold text-(--deep-blue) text-2xl text-center' >Why It Matters</h2>

              <p className='text-md lg:text-lg text-justify'>
                In today’s academic setting, strong formal writing skills are important. By recognizing Filipinism in writing, students can improve their academic performance and develop better formal English skills.
              </p>

            </div>,

          ]} // end of content
        />

      </div>
    </div>
  )
}

export default page
