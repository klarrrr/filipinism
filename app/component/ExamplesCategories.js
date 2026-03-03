"use client";

import React, { useRef, useState } from 'react'
import ExampleBox from '@/app/component/ExampleBox'
import { motion, AnimatePresence } from "framer-motion";
import ExampleCategoryBtn from './ExampleCategoryBtn';

const ExamplesCategories = () => {

    // Just add here if want to add (anong description yan bruh)

    const exampleDict = {
        'Everyday Use' : 
            <ExampleBox 
                css={'bg-(--light-blue)'} 
                title={'Everyday Use'}
                examples={[
                'Comfort room',
                'Service crew',
                'Boarding house',
                'Bedspacer',
                'Aircon',
                'Brownout',
                'Traffic enforcer',
                'Bagman',
                'Load',
                'Load balance',
                'Textmate',
                'Batchmate',
                'Schoolmate',
                'Jeepney driver',
                'Tricycle driver',
                'Carnup',
                'Eatery',
                'Viand',
                'Fill up',
                'Boarder',
                'Remit',
                'Inform (to announce)',
                'Check (bill)',
                'Stay-in (live-in helper)',
                'Collect (gather fees)',
                'Bring (to take someone somewhere)'
                ]} 
            />,

        'Sentence structures influenced by Filipino syntax' : 
            <ExampleBox 
                css={'bg-(--light-blue)'} 
                title={'Sentence structures influenced by Filipino syntax'}
                examples={[
                    'I already ate.',
                    'I will go now.',
                    'I’ll just stay here.',
                    'Is this seat available?',
                    'Open the lights.',
                    'Close the lights.',
                    'I’ll get back to you.',
                    'For a while (hold on).',
                    'Please bear with us.'
                ]} 
            />,

        'Lexical Choices Unique to Philippine English' : 
            <ExampleBox 
                css={'bg-(--light-blue)'} 
                title={'Lexical Choices Unique to Philippine English'}
                examples={[
                    'Already (placed at sentence end)',
                    'Only (as a limiter: I’m only here)',
                    'Just (softening requests)',
                    'Avail',
                   'Salvage (meaning kill)',
                    'Holdup (noun)',
                    'Squatter'
                ]} 
            />,

        'Commonly used terms in Education' : 
            <ExampleBox 
                css={'bg-(--light-blue)'} 
                title={'Commonly used terms in Education'}
                examples={[
                    'Long quiz',
                    'Take an exam',
                    'Recitation (oral participation)',
                    'Class officer',
                    'Adviser (instead of advisor)',
                    'School year',
                    'Academic year',
                    'Thesis writing',
                    'Defense (or thesis)',
                    'Submission of requirement',
                    'Completion form ',
                    'Grade computation ',
                    'Clearance',
                    'Make a research',
                    'Scholar'
                ]} 
            />,

        'Workplace & Institutional Usage' : 
            <ExampleBox 
                css={'bg-(--light-blue)'} 
                title={'Workplace & Institutional Usage'}
                examples={[
                    'Follow-up (used as a noun/verb)',
                    'For approval',
                    'Noted with thanks',
                    'Duly noted',
                    'Please be guided',
                    'Kindly see attached',
                    'As per our discussion',
                    'With regards to'
                ]} 
            />,

        'Media, Politics, and Public Discourse' : 
            <ExampleBox 
                css={'bg-(--light-blue)'} 
                title={'Media, Politics, and Public Discourse'}
                examples={[
                    'Vote-buying',
                    'Political dynasty',
                    'Public servant',
                    'Extrajudicial killing',
                    'Presscon',
                    'Red-tagging',
                    'Anomalous transaction'
                ]} 
            />,

        'Politeness (PhE Pragmatics)' : 
            <ExampleBox 
                css={'bg-(--light-blue)'} 
                title={'Politeness (PhE Pragmatics)'}
                examples={[
                    'If it’s okay with you',
                    'Just in case',
                    'Hopefully',
                    'I guess',
                    'In fairness',
                    'With due respect',
                    'Noted with thanks',
                    'Thank you and God bless',
                    'I would like to request',
                    'Please be informed',
                    'Hoping for your kind consideration'
                ]} 
            />,

        'Informal/ Conversational' : 
            <ExampleBox 
                css={'bg-(--light-blue)'} 
                title={'Informal/ Conversational'}
                examples={[
                    'Can you repeat again?',
                    'I’ll go ahead.',
                    'Same here.',
                    'No choice.',
                    'Up to you',
                    'It’s okay already.',
                    'Never mind already.',
                    'I’ll take note of that.',
                    'That’s why.'             
                ]} 
            />,

        'Common in Philippine English Essays' : 
            <ExampleBox 
                css={'bg-(--light-blue)'} 
                title={'Common in Philippine English Essays'}
                examples={[
                    'Moreover (overused)',
                    'Furthermore',
                    'On the other hand',
                    'In relation to this',
                    'To sum it up',
                    'Based on the findings',
                    'The researchers believe that'                           
                ]} 
            />,

        'Miscellaneous Philippine English' : 
            <ExampleBox 
                css={'bg-(--light-blue)'} 
                title={'Miscellaneous Philippine English'}
                examples={[
                    'CR (spoken as letters)',
                    'OFW',
                    'LGU',
                    'NGO',
                    'Barangay clearance',
                    'Senior citizen',
                    'PWD ',
                    'Closing program',
                    'Program flow',
                    'Emcee',
                    'Outreach program',
                    'Feeding program',
                    'Community immersion',
                    'Recognition day'                
                ]} 
            />,

        'Pluralization pattern' : 
            <ExampleBox 
                css={'bg-(--light-blue)'} 
                title={'Pluralization pattern'}
                examples={[
                    'informations',
                    'staffs',
                    'equipments',
                    'furnitures',
                    'feedbacks'       
                ]} 
            />,
            
        'Redundancy and Repetition' : 
            <ExampleBox 
                css={'bg-(--light-blue)'} 
                title={'Redundancy and Repetition'}
                examples={[
                    'Each and every',
                    'Future plans',
                    'Repeat again',
                    'Collaborate together',
                    'Discuss thoroughly',
                    'End result',
                    'Basic fundamentals'
                ]} 
            />,

        'Time, Frequency, and Emphasis' : 
            <ExampleBox 
                css={'bg-(--light-blue)'} 
                title={'Time, Frequency, and Emphasis'}
                examples={[
                    'As in (for emphasis)',
                    'Until now',
                    'Every now and then',
                    'Most especially',
                    'Late already',
                    'Too much (very)',
                    'Earlier (meaning a while ago)'
                ]} 
            />,

    };

    // Default value is the initial category
    const [activeExample, setActiveExample] = useState('Everyday Use');

  return (
    <div className='p-4 md:p-8 text-(--dark-text) rounded-xl flex flex-col gap-8 lg:gap-16'>

        <h2 className='font-semibold text-2xl self-center text-center'>Example Category (pick one):</h2>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {/* loop over dict and render a button/tag */}
            {
                Object.keys(exampleDict).map(key=>{
                    return (
                        <ExampleCategoryBtn 
                            key={key} 
                            content={key} 
                            css={`${activeExample == key ? 'bg-(--deep-blue)' : 'bg-(--sky-blue) hover:bg-(--bright-blue)'} text-white transition duration-200 ease-in-out hover:scale-103 hover:cursor-pointer hover:shadow-lg active:scale-105`}
                            onClickFunc={()=>{
                                setActiveExample(key);
                                document.getElementById('example-flashcard').scrollIntoView({behavior: "smooth"});
                            }}
                        />
                    )
                })
            }

            {/* <button onClick={(e)=>{setActiveExample(e.currentTarget.innerHTML)}} className='bg-(--bright-blue) p-4 pr-8 pl-8 rounded-lg text-white font-semibold'>Sentence structures influenced by Filipino syntax</button> */}
        </div>

        {/* Example Flashcard */}

        <div className='flex flex-col gap-4' id='example-flashcard'>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeExample}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className=""
                >
                    {exampleDict[activeExample]}
                </motion.div>
            </AnimatePresence>
        </div>

    </div>
  )
}

export default ExamplesCategories
