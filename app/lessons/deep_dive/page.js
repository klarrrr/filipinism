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
          dir={'Dashboard > Lessons > Deep Dive: Language Accuracy'} 
          title={'Deep Dive: Language Accuracy'}
          subtitle={'Master advanced concepts for academic and professional excellence'}

          // Add elements in content:
          // separate by comma and put them by order

          content={[

            <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-8'>

                <div className='flex justify-center items-center overflow-hidden rounded-lg w-full'>
                  <Image 
                    src={'/deep_dive_pics/children_group.jpg'}
                    width={512}
                    height={512}
                    alt='Children Group'
                    className='object-cover relative rounded-lg brightness-70 w-full h-56 md:h-96 lg:h-128'
                  />
                  <h2 className='absolute text-white font-bold text-2xl md:text-4xl'>I. Filipinism</h2>
                </div>

              <p className='text-md lg:text-lg text-justify'>
                Filipinism refers to localized English expressions influenced by Filipino syntax, semantics, and cultural usage. While these expressions may be acceptable in casual speech, they are often inappropriate in formal academic writing.
              </p>

              <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-8 bg-(--soft-gray) border-(--bright-blue) border-l-4 border-r-4'>
                
                <h2 className='font-bold text-lg'>In this study, Filipinism is categorized into three types:</h2>

                <ol className='list-decimal pl-4 pr-4 md:pl-8 md-pr-8 flex flex-col gap-8 md:gap-4'>

                  {/* Transliteration */}

                  <li className='*:mb-4'>
                    <p className='font-semibold text-lg'>Transliteration</p>
                    <p>
                      Transliteration happens when Filipino structures, word order, or expressions are directly translated into English. This results in grammatically awkward or nonstandard constructions.
                    </p>  
                    <p className='font-medium'>Meaning in the Study:</p> 
                    <p>It refers to literal translation of Filipino syntax or expressions into English that affects formal correctness.</p>
                    <p className='font-medium'>Examples:</p>
                    
                    <div className='flex flex-col gap-2 pl-4 pr-4 md:pl-8 md:pr-8 *:flex-col *:md:flex-row'>

                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“The reason is because…”</p>
                        <p className='bg-green-200'>Correct form: “The reason is that…”</p>
                      </div>  
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“In line to SDG 4”</p>
                        <p className='bg-green-200'>Correct form: “In line with SDG 4”</p>
                      </div>  
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“Based from my understanding”</p>
                        <p className='bg-green-200'>Correct form: “Based on my understanding”</p>
                      </div>  
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“As what I observed”</p>
                        <p className='bg-green-200'>Correct form: “As observed”</p>
                      </div>  

                    </div>

                    <p className='font-medium'>These examples show how Filipino sentence structure interferes with formal English grammar.</p> 
                  </li>

                  {/* Informal Usage */}

                  <li className='*:mb-4'>
                    <p className='font-semibold text-lg'>Informal Usage</p>
                    <p>
                    Informal usage refers to the use of conversational, casual, or subjective expressions in academic essays.
                    </p>  
                    <p className='font-medium'>Meaning in the Study:</p> 
                    <p>It refers to the presence of colloquial words, casual connectors, intensifiers, and subjective phrasing that reduce academic tone.</p>
                    <p className='font-medium'>Examples:</p>
                    
                    <div className='flex flex-col gap-2 pl-4 pr-4 md:pl-8 md:pr-8 *:flex-col *:md:flex-row'>

                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“A lot of students”</p>
                        <p className='bg-green-200'>Correct form: “Many students”</p>
                      </div>  
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“Very very important”</p>
                        <p className='bg-green-200'>Correct form: “Extremely important” or “Essential”</p>
                      </div>  
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“And also”</p>
                        <p className='bg-green-200'>Correct form: “Additionally”</p>
                      </div>  
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“So”</p>
                        <p className='bg-green-200'>Correct form: “Therefore”</p>
                      </div>  
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“I think that”</p>
                        <p className='bg-green-200'>Correct form: “It can be argued that”</p>
                      </div>  

                    </div>

                  </li>

                   {/* Genericization */}

                   <li className='*:mb-4'>
                    <p className='font-semibold text-lg'>Genericization</p>
                    <p>
                    Genericization occurs when students use vague, overgeneralized, or brand-dependent terms instead of precise academic vocabulary.
                    </p>  
                    <p className='font-medium'>Meaning in the Study:</p> 
                    <p>It refers to the use of broad, unspecific, or generalized statements that lack academic precision.</p>
                    <p className='font-medium'>Examples (from your Checker Table):</p>
                    
                    <div className='flex flex-col gap-2 pl-4 pr-4 md:pl-8 md:pr-8 *:flex-col *:md:flex-row'>

                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“Technology helps students”</p>
                        <p className='bg-green-200'>More specific: “Technology enhances student learning outcomes”</p>
                      </div>  
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“Education is important”</p>
                        <p className='bg-green-200'>More specific: “Education is essential for student development”</p>
                      </div>  
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“All students benefit”</p>
                        <p className='bg-green-200'>More accurate: “Many students benefit”</p>
                      </div>  
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“Technology is useful”</p>
                        <p className='bg-green-200'>More specific: “Educational technology facilitates access to learning resources”</p>
                      </div>  

                    </div>

                    <p className='font-medium'>Genericization reduces clarity and specificity in formal writing.</p> 
                  </li>
              
                </ol>

                <h2 className='font-bold text-lg'>Other Filipinism in Writing:</h2>
                
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16'>
                  <div className='flex flex-col gap-4'>
                    <h3 className='text-lg font-medium'>Transliteration</h3>
                    <ul className='list-disc pl-4 pr-4 md:pl-8 md-pr-8 flex flex-col gap-8 md:gap-4'>
                      <li>to How to</li>
                      <li>. And</li>
                      <li>I am highly recommended</li>
                      <li>In summarize</li>
                      <li>Can use for</li>
                      <li>How does technology can contribute</li>
                      <li>In the other hand </li>
                      <li>Can actually combined</li>
                      <li>Education be improve</li>
                      <li>We have a still access</li>
                      <li>It also help students to lead</li>
                      <li>We have now…</li>
                      <li>it going</li>
                      <li>It helps students to boost</li>
                      <li>Let me</li>
                      <li>Is the more </li>
                      <li>More easier </li>
                      <li>In line to SDG 4</li>
                      <li>Based from my understanding </li>
                      <li>The reason is because </li>
                      <li>Not like before </li>
                      <li>But also productivity </li>
                      <li>It contributes</li>
                      <li>As what I observed </li>
                      <li>Negative and positive effects… life's easier </li>
                      <li>Our life</li>
                      <li>Education here are not good </li>
                      <li>More easy</li>
                      <li>Different more types</li>
                      <li>When it says</li>
                      <li>They don't no</li>
                      <li>To access to</li>
                      <li>Many of the students </li>
                      <li>We have money or we have no money</li>
                      <li>Technology is beautiful to use</li>
                    </ul>
                  </div>

                  <div className='flex flex-col gap-4'>
                    <h3 className='text-lg font-medium'>Informal Usage</h3>
                    <ul className='list-disc pl-4 pr-4 md:pl-8 md-pr-8 flex flex-col gap-8 md:gap-4'>
                      <li>collabs</li>
                      <li>so we can achieve</li>
                      <li>So technology</li>
                      <li>Many more to be more</li>
                      <li>. So</li>
                      <li>actually</li>
                      <li>. But</li>
                      <li>Every students</li>
                      <li>Because of…</li>
                      <li>Like I said</li>
                      <li>So</li>
                      <li>Many more</li>
                      <li>I agree</li>
                      <li>I personally agree</li>
                      <li>As we all know</li>
                      <li>More efficiently </li>
                      <li>So rather than</li>
                      <li>A lot of students </li>
                      <li>“And also” “So just like”</li>
                      <li>I think that</li>
                      <li>In my opinion </li>
                      <li>Past past</li>
                      <li>So basically </li>
                      <li>But some</li>
                    </ul>
                  </div>

                  <div className='flex flex-col gap-4'>
                    <h3 className='text-lg font-medium'>Genericization</h3>
                    <ul className='list-disc pl-4 pr-4 md:pl-8 md-pr-8 flex flex-col gap-8 md:gap-4'>
                      <li>Technology contribute to quality educations</li>
                      <li>Technology help people to provide our country to new people</li>
                      <li>I am highly</li>
                      <li>Technology can help us</li>
                      <li>Technology can provide us the quality education we want to achieve.</li>
                      <li>Technology can help to improve the quality of our education because by the help of technology education can be easy.</li>
                      <li>Technology can help students</li>
                      <li>Technology can help us achieve SDG 4 by using technology properly, and don’t use it in a bad way especially in nonsense things.</li>
                      <li>Technology helps students</li>
                      <li>All students benefits</li>
                      <li>Technology is useful</li>
                      <li>Education is important</li>
                      <li>There is difficulties or having a hard time to use or discuss without it.</li>
                      <li>To conclude this, technology has many capabilities to make anything different from the past especially our education system</li>
                      <li>And the second one with our quality education</li>
                      <li>Technology is the most important used</li>
                      <li>Technology and technical</li>
                      <li>When we always use technology on our study especially in homework</li>
                      <li>All of the answer is all in technology and you don't need to think a lot if you use it to find answers</li>
                      <li>They just need to use the technology responsible and appropriately</li>
                      <li>This could help us to achieve what we wanted</li>
                      <li>To conclude, technology help us to learn and educate more learners</li>
                      <li>Student want step using it because maybe they don't no</li>
                      <li>The way they use technology was very helpful</li>
                    </ul>
                  </div>
                
                </div>

              </div>
              
              <div className='flex justify-center items-center overflow-hidden rounded-lg w-full'>
                  <Image 
                    src={'/deep_dive_pics/letters.jpg'}
                    width={512}
                    height={512}
                    alt='Children Group'
                    className='object-cover relative rounded-lg brightness-50 w-full h-56 md:h-96 lg:h-128'
                  />
                  <h2 className='absolute text-white font-bold text-2xl md:text-4xl'>​​II. Lexical Competency</h2>
              </div>

              <p className='text-md lg:text-lg text-justify'>
                Lexical competency refers to the ability of students to choose words accurately, formally, and specifically in academic writing. It shows how well students can express ideas using appropriate academic vocabulary.
              </p>

              <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-8 bg-(--soft-gray) border-(--bright-blue) border-l-4 border-r-4'>
                <h2 className='font-bold text-lg'>In this study, lexical competency has three components:</h2>

                <ol className='list-decimal pl-4 pr-4 md:pl-8 md:pr-8 flex flex-col gap-8 md:gap-4'>

                  {/* 1. Lexical Accuracy */}
                  <li className='*:mb-4'>
                    <p className='font-semibold text-lg'>Lexical Accuracy</p>
                    <p>
                      Lexical accuracy refers to the correct use of words in context.
                    </p>
                    <p className='font-medium'>Meaning in the Study:</p>
                    <p>
                      It measures whether students use the right word choice without grammatical or semantic errors.
                    </p>
                    <p className='font-medium'>Examples:</p>

                    <div className='flex flex-col gap-2 pl-4 pr-4 md:pl-8 md:pr-8 *:flex-col *:md:flex-row'>
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“Students are encourage to participate.”</p>
                        <p className='bg-green-200'>Correct: “Students are encouraged to participate.”</p>
                      </div>
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“The study shows many evidences.”</p>
                        <p className='bg-green-200'>Correct: “The study shows much evidence.”</p>
                      </div>
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“This issue affects in students.”</p>
                        <p className='bg-green-200'>Correct: “This issue affects students.”</p>
                      </div>
                    </div>
                  </li>

                  {/* 2. Lexical Formality */}
                  <li className='*:mb-4'>
                    <p className='font-semibold text-lg'>Lexical Formality</p>
                    <p>
                      Lexical formality refers to the use of academic and professional vocabulary instead of conversational language.
                    </p>
                    <p className='font-medium'>Meaning in the Study:</p>
                    <p>
                      It measures whether students maintain academic tone in essay writing.
                    </p>
                    <p className='font-medium'>Examples:</p>

                    <div className='flex flex-col gap-2 pl-4 pr-4 md:pl-8 md:pr-8 *:flex-col *:md:flex-row'>
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“Kids nowadays are glued to their phones.”</p>
                        <p className='bg-green-200'>Formal: “Many adolescents are highly dependent on mobile devices.”</p>
                      </div>
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“This topic is kind of hard.”</p>
                        <p className='bg-green-200'>Formal: “This topic is relatively complex.”</p>
                      </div>
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“People mess up because of pressure.”</p>
                        <p className='bg-green-200'>Formal: “Individuals experience errors due to psychological pressure.”</p>
                      </div>
                    </div>
                  </li>

                  {/* 3. Lexical Specificity */}
                  <li className='*:mb-4'>
                    <p className='font-semibold text-lg'>Lexical Specificity</p>
                    <p>
                      Lexical specificity refers to the precision of word choice. It avoids vague and generalized statements.
                    </p>
                    <p className='font-medium'>Meaning in the Study:</p>
                    <p>
                      It measures how precise and detailed students are when expressing ideas.
                    </p>
                    <p className='font-medium'>Examples:</p>

                    <div className='flex flex-col gap-2 pl-4 pr-4 md:pl-8 md:pr-8 *:flex-col *:md:flex-row'>
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“Things affect students.”</p>
                        <p className='bg-green-200'>Specific: “Academic workload affects students’ mental health.”</p>
                      </div>
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“Problems happen in school.”</p>
                        <p className='bg-green-200'>Specific: “Bullying incidents occur in secondary school settings.”</p>
                      </div>
                      <div className='flex flex-row rounded-lg overflow-hidden *:p-4'>
                        <p className='bg-red-200'>“Many stuff are needed.”</p>
                        <p className='bg-green-200'>Specific: “Instructional materials and digital resources are needed.”</p>
                      </div>
                    </div>

                    <p className='font-medium'>
                      Specific word choice improves clarity and depth of discussion.
                    </p>
                  </li>

                </ol>
              </div>

            </div>,

          ]} // end of content
        />

      </div>
    </div>
  )
}

export default page
