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

            <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-8'>
              <p className='text-md lg:text-lg text-justify'>
                <b>FILIPINISM</b> refers to unique linguistic expressions and usages shaped by Filipino culture and history, reflecting the distinct identity of Philippine English.
              </p>

              <p className='text-md lg:text-lg text-justify'>
                Filipinism is a fascinating feature of Philippine English, where words or phrases are used in ways unique to Filipino culture and everyday life. These expressions often come from literal translations of Filipino phrases or localized adaptations of English, resulting in meanings that make perfect sense to Filipinos but may confuse native English speakers. For example, phrases like “open the light” (from buksan ang ilaw) or “for a while” (used to mean “wait”) are classic Filipinisms. They are not “wrong” English, but rather a reflection of how language evolves when influenced by history, culture, and bilingualism.  
              </p>
            </div>,

            // Key Concepts

            <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-8 bg-(--light-blue) border-(--bright-blue) border-l-4 border-r-4'>
              <h2 className='font-bold text-lg'>Key Points About Filipinism</h2>
              <ul className='list-disc pl-4 pr-4 md:pl-8 md-pr-8 flex flex-col gap-8 md:gap-4'>
                <li>
                  <span className='font-semibold'>Cultural Identity:</span> Filipinisms highlight the creativity of Filipinos in shaping English to fit local contexts.  
                </li>
                <li>
                  <span className='font-semibold'>Colloquial Usage:</span> Many are everyday phrases, often humorous or endearing, like “comfort room” for restroom.  
                </li>
                <li>
                  <span className='font-semibold'>Hybrid Language:</span> They show how Philippine English blends American English roots with Filipino linguistic patterns.
                </li>
                <li>
                  <span className='font-semibold'>Global Impact:</span> While they may cause miscommunication abroad, they enrich the distinct identity of Philippine English.  
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
