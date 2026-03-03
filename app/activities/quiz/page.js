"use client";
import React, { useState } from 'react'
import BackButton from '@/app/component/BackButton'

const quizContent = [
  {
    question: "I will go there later on.",
    choices: ["later", "afterwards", "in a while", "soon"],
    answer: "A",
  },
  {
    question: "Please open the lights before you leave.",
    choices: ["unlock the lights", "turn on the lights", "switch the lights", "brighten the lights"],
    answer: "B",
  },
  {
    question: "Kindly close the light.",
    choices: ["shut the light", "turn off the light", "block the light", "remove the light"],
    answer: "B",
  },
  {
    question: "I already passed my requirements yesterday.",
    choices: ["gave my requirements", "submitted my requirements", "sent my requirements", "forwarded my requirements"],
    answer: "B",
  },
  {
    question: "She salvaged the suspect.",
    choices: ["rescued", "kidnapped", "executed", "arrested"],
    answer: "C",
    note: "In Philippine usage, “salvage” informally means kill/extrajudicial killing, but in standard English it means rescue.",
  },
  {
    question: "I will fetch you at the airport.",
    choices: ["accompany you", "pick you up", "follow you", "wait for you"],
    answer: "B",
  },
  {
    question: "Let’s eat first before we go home, isn’t it?",
    choices: ["aren’t we?", "won’t we?", "shall we?", "right?"],
    answer: "C",
  },
  {
    question: "I will avail the promo.",
    choices: ["use", "get", "take advantage of", "buy"],
    answer: "C",
  },
  {
    question: "She is on leave because she is sick.",
    choices: ["absent", "on vacation", "not present", "resting"],
    answer: "A",
  },
  {
    question: "Please fall in line properly.",
    choices: ["form a line", "follow the line", "stand straight", "wait in order"],
    answer: "A",
  },
];

const indexToAlpha = {
  0 : 'A',
  1 : 'B',
  2 : 'C',
  3 : 'D',
}

const scoreMessages = {
  perfect: {
    title: "Perfect!",
    message: "You're basically a native-level English speaker now! 100% – no notes needed. Salamat sa galing!",
  },
  great: {
    title: "Great Job!",
    message: "You nailed most of them! Very strong grasp of formal English. Just a few tiny Pinoy-isms slipped in – you're almost there!",
  },
  good: {
    title: "Good Work!",
    message: "Solid performance! You caught most of the formal versions correctly. Keep practicing those tricky ones like 'salvage' and 'avail' – you're getting better fast.",
  },
  okay: {
    title: "Not Bad!",
    message: "You're getting the hang of it. Some common Filipinisms are still tricky, but that's normal. Review the ones you missed – next time you'll do even better!",
  },
  needsWork: {
    title: "Room for Improvement",
    message: "Don't worry – English variations can be confusing even for advanced speakers. Let's focus on the ones you missed. Try again soon!",
  },
  tryAgain: {
    title: "Let's Try Again",
    message: "A lot of these are super common in everyday Philippine English – it's okay to miss them at first. Review the explanations and come back stronger!",
  }
};

const page = () => {
  const [quizPage, setQuizPage] = useState(0);
  const [didAnswer, setDidAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [didQuizStart, setDidQuizStart] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const percentage = (score / quizContent.length) * 100;
  const [messageKey, setMessageKey] = useState("");

  return (
    <div className='flex-1 w-full h-screen space-y-8 animate-fade-in'>

      <div className='p-4 sm:p-8 flex gap-4 flex-col mb-0 md:p-16 lg:pl-32 lg:pr-32 xl:pl-64 xl:pr-64'>
        
        {/* Back Button */}

        <BackButton loc={'/activities'} backToWhere={'Back to Activities'} />
        
        {/* Quiz Content */}
        {/* Start Quiz Initial Page */}
        
        <div className={`${!didQuizStart ? 'block' : 'hidden'} rounded-2xl bg-linear-50 from-(--deep-blue) to-(--bright-blue) drop-shadow-md overflow-hidden p-16 lg:pl-32 lg:pr-32 justify-center items-center flex flex-col gap-8 h-128`}>
          
          {/* Title */}

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Identify the Formal English Version</h1>

          {/* Subtitle */}

          <p className="text-sm md:text-md text-center w-2/6">Direction: Choose the correct formal English expression for the underlined Filipinism in each sentence</p>

          {/* Button */}

          <button 
            className='bg-white text-(--bright-blue) p-4 rounded-lg hover:scale-103 transition ease-in-out duration-200 hover:cursor-pointer hover:bg-(--bright-blue) hover:text-white font-semibold'
            onClick={()=>{setDidQuizStart(true)}}
          >
            Start Quiz &gt;
          </button>

        </div>

        {/* Quiz Page 1 Start to End */}

        {/* TODO: change back the ? to hidden afterwards */}

        <div className={`${!didQuizStart ? 'hidden' : 'block'} ${isQuizFinished && 'hidden'} rounded-2xl bg-white drop-shadow-md overflow-hidden p-16 lg:pl-32 lg:pr-32 justify-center items-center flex flex-col gap-8`}>
          
          {/* Progress Bar */}
          <div className='border border-(--bright-blue) h-2 w-full rounded-2xl'>
            <div 
              className={`bg-(--bright-blue) h-full`}
              style={{ width: `${((quizPage + 1) / quizContent.length) * 100}%` }}
            ></div>
          </div>

          {/* Question Progress and Question itself */}

          <div className='flex flex-col gap-4 justify-start w-full'>
            {/* Question Progress */}
            <h4 className='text-(--bright-blue) self-start'>Question {quizPage + 1} out of {quizContent.length}</h4>

            {/* Question */}
            <h3 className='text-(--deep-blue) text-xl font-medium self-start'>{quizContent[quizPage].question}</h3>
          </div>

          {/* Choices container */}
          <div className='flex flex-col gap-4 w-full justify-start'>
              {quizContent[quizPage].choices.map((choice, index)=>{
                return (
                  <button 
                    key={index} 
                    className={`
                      w-full p-4 md:p-8 rounded-xl text-(--dark-text) text-left border-2 transition duration-200 ease-in-out 
                  
                      ${didAnswer ? 'cursor-not-allowed' : 'cursor-pointer'}

                        ${didAnswer 
                          ? (quizContent[quizPage].answer === indexToAlpha[index] 
                              ? 'bg-green-200 border-green-500 text-black' 
                              : selectedAnswer === indexToAlpha[index] 
                                ? 'bg-red-200 border-red-500 text-black' 
                                : 'bg-(--soft-gray) border-(--soft-gray) text-gray-400')
                          : 'bg-(--soft-gray) border-(--soft-gray) hover:border-(--bright-blue) hover:bg-(--light-blue) hover:cursor-pointer'
                        }
                    `}
                    disabled={didAnswer}
                    onClick={(e)=>{
                      if (didAnswer) return;
                      setSelectedAnswer(indexToAlpha[index]);
                      setDidAnswer(true);

                      // Score Update
                      if (quizContent[quizPage].answer == indexToAlpha[index]) {
                        setScore(prev => prev + 1);
                      }
                    }}
                  >
                    <span className='font-medium'>{indexToAlpha[index]}. </span>
                    {choice}
                  </button>
                )
              })}
          </div>

          <button 
              className='bg-(--bright-blue) text-white p-4 rounded-lg not-disabled:hover:scale-103 transition ease-in-out duration-200 disabled:hover:cursor-not-allowed not-disabled:hover:cursor-pointer not-disabled:hover:bg-(--bright-blue) not-disabled:hover:text-white font-semibold disabled:bg-(--light-blue)'
              onClick = {
                ()=>{
                  // Is quiz finished
                  if(quizPage + 1 == quizContent.length){
                    // Disappear
                    setIsQuizFinished(true);
                    console.log(percentage)
                    if (percentage === 100) setMessageKey("perfect");
                    else if (percentage >= 85) setMessageKey("great");
                    else if (percentage >= 70) setMessageKey("good");
                    else if (percentage >= 50) setMessageKey("okay");
                    else if (percentage >= 30) setMessageKey("needsWork");
                    else setMessageKey("tryAgain");
                  }else{
                    setQuizPage(prev => prev + 1)
                  }
                  // Reset per-question state for the next question
                  setDidAnswer(false);
                  setSelectedAnswer(null);
                }}
              // TODO: Pag wala pa nasasagutan gawing true
              disabled={!didAnswer}
            >
              Proceed &gt;
          </button>
        </div>

        <div className={`${!isQuizFinished && 'hidden'} w-200 h-200 bg-white rounded-2xl drop-shadow-md overflow-hidden p-16 lg:pl-32 lg:pr-32 justify-center items-center flex flex-col gap-8 self-center`}>
            <h1 className='text-(--bright-blue) text-8xl font-semibold'>{percentage}%</h1>
            <h2 className='text-(--dark-text) text-2xl text-center font-semibold'>
              {isQuizFinished && scoreMessages[messageKey].title}
            </h2>
            <p className='text-(--dark-text) text-center text-lg'>
              {isQuizFinished && scoreMessages[messageKey].message}
            </p>
            <p className='text-(--dark-text) text-center font-light'>
              You got {score} out of {quizContent.length} questions correct!
            </p>
            <div className='flex flex-row gap-4 *:p-4 *:rounded-lg *:hover:cursor-pointer *:hover:scale-103 *:transition *:ease-in-out *:duration-200'>
                <button onClick={()=>{window.location.reload()}} className='text-(--bright-blue)'>
                  Try Again
                </button>
                <a href='../activities' className='bg-(--bright-blue)'>
                  Back To Activities
                </a>
            </div>
        </div>

      </div>
    </div>
  )
}

export default page
