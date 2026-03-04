import React from 'react'
import BackButton from '@/app/component/BackButton'
import LessonBox from '@/app/component/LessonBox'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex-1 w-full h-screen space-y-8 animate-fade-in'>
      <div className='p-4 sm:p-8 flex gap-4 flex-col mb-0 md:p-16 lg:pl-32 lg:pr-32 xl:pl-64 xl:pr-64'>
        
        {/* Back Button */}

        <BackButton loc={'/lessons'} backToWhere={'Back to Lessons'} />
        
        {/* Lesson Box Component */}
        
        <LessonBox 
          dir={'Dashboard > Lessons > Historical Roots'} 
          title={'Historical Roots'}
          subtitle={'Discover the journey of English as it adapted to Filipino culture, giving rise to Filipinism'}

          // Add elements in content:
          // separate by comma and put them by order

          content={[

            <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-8'>

              <Image src={'/historical_roots_pics/6403942.jpg'} alt={'oldies'} width={512} height={512} className='self-center'/>

              <p className='text-md lg:text-lg text-justify'>
                English was introduced in the Philippines during the American colonial period in the early 1900s. At this time, American teachers known as the Thomasites were sent to establish a public education system. Their goal was not only to teach English but also to promote American culture and values among Filipinos. Through education, English became a powerful tool used to shape the thinking and identity of the Filipino people during colonial rule.
              </p>

              {/* TimeLine */}

              <div className='flex flex-col md:flex-row gap-4 items-center justify-center text-center'>
                <p className='bg-(--bright-blue) p-4 text-white font-semibold rounded-full'>1900s</p>
                <p className='hidden md:block font-bold text-2xl'>→</p>
                <p className='block md:hidden font-bold text-2xl'>↓</p>
                <p className='bg-(--bright-blue) p-4 text-white font-semibold rounded-full'>1921 (91% Filipino Teachers)</p>
                <p className='hidden md:block font-bold text-2xl'>→</p>
                <p className='block md:hidden font-bold text-2xl'>↓</p>
                <p className='bg-(--bright-blue) p-4 text-white font-semibold rounded-full'>1946 Independence</p>
                <p className='hidden md:block font-bold text-2xl'>→</p>
                <p className='block md:hidden font-bold text-2xl'>↓</p>
                <p className='bg-(--bright-blue) p-4 text-white font-semibold rounded-full'>Today</p>
              </div>

              <p className='text-md lg:text-lg text-justify'>
               The Thomasites were assigned across different provinces, where they trained Filipino teachers who later took over English instruction. By 1921, around <b>91 percent of English teachers were already native-born Filipinos</b>. This meant that Filipinos were learning English from fellow Filipinos, not just from Americans. Because of this, English in the Philippines began to develop its own features influenced by local languages, culture, and ways of thinking—marking the early formation of <b>Philippine English</b>.
              </p>

              <p className='text-md lg:text-lg text-justify'>
                After the Philippines gained independence in 1946, English remained an official language used in government, education, and media, alongside the national language. The national language evolved over time—from Wikang Pambansa to Pilipino, and eventually Filipino. As English continued to be widely used, Filipinos adapted it to express local experiences, values, and identities. This adaptation is now known as <b>Filipinism</b>, which includes localized vocabulary, expressions, sentence patterns, and meanings unique to Philippine contexts.
              </p>

              <p className='text-md lg:text-lg text-justify'>
                Over the years, Philippine English gradually gained recognition as a legitimate variety of English. However, its acceptance was not immediate. Some educators and policymakers were hesitant because they associated Philippine English with a strong local accent or believed it reflected lower proficiency compared to American or British English. Despite this, scholars have emphasized that Philippine English is not “incorrect” English, but rather a natural and meaningful outcome of Filipinos using English in their own social, cultural, and historical contexts.
              </p>

              <p className='text-md lg:text-lg text-justify'>
                Today, Philippine English stands as evidence that language evolves through use. Filipinism reflects how Filipinos have made English their own—using it not only for communication, but also for creativity, identity, and nation-building.
              </p>

            </div>
          
          ]} // end of content
        />

      </div>
    </div>
  )
}

export default page