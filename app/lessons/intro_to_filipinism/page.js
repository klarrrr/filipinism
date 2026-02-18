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
          dir={'Dashboard > Lessons > Introduction to Filipinism'} 
          title={'Introduction to Filipinism'}
          subtitle={'Understanding the roots of our English challenges'}

          // Add elements in content:
          // separate by comma and put them by order

          content={[

            // What is Filipinism?

            <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-4'>
              <h2 className='font-bold text-xl'>What is Filipinism?</h2>
              <p>
                  Filipinism refers to English words, phrases, or expressions that are influenced by Filipino language structures and are unique to Filipino English speakers. While these expressions make perfect sense in Filipino context, they often don't follow standard English grammar rules and can confuse native English speakers.
              </p>
            </div>,

            // Key Concepts

            <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-4 bg-(--light-blue) border-(--bright-blue) border-l-4 border-r-4'>
              <h2 className='font-bold text-lg'>Key Concepts</h2>
              <ul className='list-disc pl-4 pr-4 md:pl-8 md-pr-8'>
                <li>
                  <span className='font-semibold'>Language Transfer:</span> When Filipino grammar rules are applied to English
                </li>
                <li>
                  <span className='font-semibold'>Cultural Context:</span> Expressions that make sense locally but not globally
                </li>
                <li>
                  <span className='font-semibold'>Code-Switching:</span> Moving between Filipino and English mid-sentence
                </li>
              </ul>
            </div>
          ]} // end of content
        />

      </div>
    </div>
  )
}

export default page
