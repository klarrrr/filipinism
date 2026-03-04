import React from 'react'
import BackButton from '@/app/component/BackButton'
import LessonBox from '@/app/component/LessonBox'
import ExamplesCategories from '@/app/component/ExamplesCategories'

const page = () => {
  return (
    <div className='flex-1 w-full h-screen space-y-8 animate-fade-in'>
      <div className='p-4 sm:p-8 flex gap-4 flex-col mb-0 md:p-16'>
        
        {/* Back Button */}

        <BackButton loc={'/lessons'} backToWhere={'Back to Lessons'} />
        
        {/* Lesson Box Component */}
        
        <LessonBox 
          dir={'Dashboard > Lessons > Examples in Everyday Language'} 
          title={'Examples in Everyday Language'}
          subtitle={'Becoming aware of patterns in daily communication'}

          // Add elements in content:
          // separate by comma and put them by order

          content={[

            <ExamplesCategories />

            
          ]} // end of content
        />

      </div>
    </div>
  )
}

export default page
