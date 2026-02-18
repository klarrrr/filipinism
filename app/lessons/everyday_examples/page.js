import React from 'react'
import BackButton from '@/app/component/BackButton'
import LessonBox from '@/app/component/LessonBox'

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
          subtitle={'Discovering common mistakes we make daily without realizing'}

          // Add elements in content:
          // separate by comma and put them by order

          content={[

            // What is Filipinism?

            <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-4'>
              <h2 className='font-bold text-xl'>Common Examples</h2>

              {/* Examples Box */}

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                  <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-4 bg-red-100 border-red-500 border-l-4 border-r-4'>
                    <h2 className='font-semibold text-md'>❌ Filipinism</h2>
                    <p>"Can you open the light?"</p>
                  </div>
               
                  <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-4 bg-green-100 border-green-500 border-l-4 border-r-4'>
                    <h2 className='font-semibold text-md'>✅ Correct English</h2>
                    <p>"Can you turn on the light?"</p>
                  </div>

                  <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-4 bg-red-100 border-red-500 border-l-4 border-r-4'>
                    <h2 className='font-semibold text-md'>❌ Filipinism</h2>
                    <p>"I'm going to take a bath"</p>
                    <p className='font-light text-sm'>(when already in the shower)</p>
                  </div>
               
                  <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-4 bg-green-100 border-green-500 border-l-4 border-r-4'>
                    <h2 className='font-semibold text-md'>✅ Correct English</h2>
                    <p>"I'm taking a shower."</p>
                    <p className='font-light text-sm'>(present continuous)</p>
                  </div>

                  <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-4 bg-red-100 border-red-500 border-l-4 border-r-4'>
                    <h2 className='font-semibold text-md'>❌ Filipinism</h2>
                    <p>"I'm going to the CR."</p>
                  </div>
               
                  <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-4 bg-green-100 border-green-500 border-l-4 border-r-4'>
                    <h2 className='font-semibold text-md'>✅ Correct English</h2>
                    <p>"I'm going to the restroom/bathroom."</p>
                  </div>
               

              </div>

            </div>,

            
          ]} // end of content
        />

      </div>
    </div>
  )
}

export default page
