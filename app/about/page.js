import AboutCard from "../component/about_card"
import JourneyCard from "../component/journey_card"

const page = () => {
  return (
    <div className='flex-1 w-full h-screen space-y-8 animate-fade-in'>
      {/* Meet the Minds */}

      <div className="p-16 flex items-center justify-center gap-4 flex-col mb-0">
        <h2 className="text-(--deep-blue) text-4xl font-bold text-center">Meet the Minds Behind Filipinism</h2>
        <p className="text-md lg:text-lg xl:text-xl text-(--dark-text) text-center">Passionate educators dedicated to improving Filipino students' English proficiency</p>
      </div>

        {/* About Cards */}

        <div className="
          pr-5
          pl-5
          lg:pl-32 lg:pr-32 
          xl:pl-64 xl:pr-64 
          grid
          gap-8
          grid-cols-1
          md:grid-cols-2
          2xl:grid-cols-3
          mb-0
        ">
          <AboutCard 
            name={'Mary Stefhany Cabagua'} 
            position={'The Wandering Storyweaver'} 
            desc={'She is an English Education student who is passionate about learning, communication, and understanding how people express themselves. She aspires to travel the world, experience different cultures, and share what she learns to inspire and educate others.'} 
            picLoc={'/researchers/MARY_STEFHANY_CABAGUA.jpeg'}/>
          <AboutCard 
            name={'Renz Kyle E. Ferrer'} 
            position={'The Mindforge Illuminator'} 
            desc={`A creative and reflective pre-service English educator committed to fostering students’ language proficiency, critical thinking, and cultural awareness through innovative and learner centered instruction.
`} 
            picLoc={'/researchers/RENZ_KYLE_E._FERRER.jpeg'}/>
          <AboutCard 
            name={'Romnick Q. Guanzon'} 
            position={'The Verse Catalyst'} 
            desc={'An education student majoring in English. He is passionate about what he does—arts, writing, and dance. As a future educator, he continues to learn and develop his skills to empower the young minds in society.'} 
            picLoc={'/researchers/ROMNICK_Q._GUANZON.jpg'}/>
          <AboutCard 
            name={'Francesca Jonnie C. Legaspi'} 
            position={'The Heartforge Mentor'} 
            desc={'She is studying English as her undergraduate major and aims to help shape a generation of compassionate and passionate learners. Determined, passionate, and deeply empathetic, she strives to make a lasting difference in the lives she touches.'} 
            picLoc={'/researchers/FRANCESCA_JONNIE_C._LEGASPI.jpg'}/>
          <AboutCard 
            name={'Laarni D. Mendoza'} 
            position={'The Relentless Ascendant'} 
            desc={'She is a hardworking and goal-oriented student who consistently strives to give her best in every task. She values growth, responsibility, and continuous learning in all that she does.'} 
            picLoc={'/researchers/LAARNI_D._MENDOZA.jpeg'}/>
          <AboutCard 
            name={'Paul Andrei S. Patrocenio'} 
            position={'The Dawnbringer Luminary'} 
            desc={'With an effervescent spirit and an optimistic heart, he brings light and encouragement wherever he goes. As a future educator, he hopes to inspire, uplift, and create a space where every learner feels valued and capable of growth.'} 
            picLoc={'/researchers/PAUL_ANDREI_S._PATROCENIO.jpeg'}/>
        </div>

      {/* Our Journey */}

      <div className="p-16 flex items-center justify-center gap-4 flex-col mb-0">
        <h2 className="text-(--deep-blue) text-4xl font-bold text-center">Our Journey</h2>
        <p className="text-md lg:text-lg xl:text-xl text-(--dark-text) text-center">How we came to create this platform</p>
      </div>

      {/* Journey Cards */}
  
      <div className="
        flex flex-col gap-8
        pr-5
        pl-5
        pb-16
        lg:pl-32 lg:pr-32 
        xl:pl-64 xl:pr-64 
      ">
        <JourneyCard 
          count={'1'} 
          title={'The Problem'} 
          desc={'We observed countless Filipino students navigating challenges in professional and academic English, not because they lacked vocabulary, but because their speech and writing naturally carried Filipinism shaped by local usage.'}/>
        <JourneyCard 
          count={'2'} 
          title={'The Research'} 
          desc={'Over 7 months, we conducted extensive research, surveying 200+ students and analyzing hundreds of writing samples to identify the most common Filipinisms.'}/>
        <JourneyCard 
          count={'3'} 
          title={'The Solution'} 
          desc={'This interactive platform blends research and technology to guide students in understanding how Filipinisms shape their English, and how to adjust usage for clearer communication in formal contexts.'}/>
        <JourneyCard 
          count={'4'} 
          title={'The Goal'} 
          desc={'We aim to empower Filipino students with English fluency for global success, all while honoring the richness of our local linguistic heritage.'}/>
      </div>

      {/* Our Mission */}

      

    </div>
  )
}

export default page
