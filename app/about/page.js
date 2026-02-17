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
          <AboutCard name={'Buster Scruggs'} position={'Cowboy of the West'} desc={'Buster Scruggs is the titular protagonist of the first story in the 2018 black comedy Western film The Ballad of Buster Scruggs.'} picLoc={'/pic-1.jpg'}/>
          <AboutCard name={'Lee Everett'} position={'World\'s Greatest Detective'} desc={'A history professor at the University of Georgia for almost six years before he was fired following his arrest.'} picLoc={'/pic-2.jpg'}/>
          <AboutCard name={'Han Lue'} position={'Han Seoul-Oh'} desc={'An expert drifter, thief and a former business partner to Takashi who began as a member of Dominic Toretto\'s crew. '} picLoc={'/pic-3.jpg'}/>
          <AboutCard name={'Maharana Pratap'} position={'King of Mewar'} desc={'Notable for leading the Rajput resistance against the expansionist policy of the Mughal Emperor Akbar including the battle of Haldighati.'} picLoc={'/pic-4.jpg'}/>
          <AboutCard name={'Halle Berry'} position={'American Actress'} desc={'A model and beauty contestant becoming Miss Ohio in 1986, runner-up in Miss USA 1986 and placing sixth in Miss World 1986.'} picLoc={'/pic-5.jpg'}/>
          <AboutCard name={'Casca'} position={'The Black Witch'} desc={'A former unit commander of the Band of the Falcon and an estranged companion of Guts.'} picLoc={'/pic-6.jpg'}/>
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
        <JourneyCard count={'1'} title={'The Problem'} desc={'We observed countless Filipino students struggling with English in professional and academic settings, not because they lacked vocabulary, but because of systematic Filipinisms in their speech and writing.'}/>
        <JourneyCard count={'2'} title={'The Research'} desc={'Over 18 months, we conducted extensive research, surveying 500+ students and analyzing thousands of writing samples to identify the most common Filipinisms.'}/>
        <JourneyCard count={'3'} title={'The Solution'} desc={'We created this interactive platform combining educational research with engaging technology to help students identify and correct Filipinisms systematically.'}/>
        <JourneyCard count={'4'} title={'The Goal'} desc={'Our mission is to help 10,000+ Filipino students achieve English fluency that opens doors to global opportunities while maintaining pride in our cultural identity.'}/>
      </div>

      {/* Our Mission */}

      

    </div>
  )
}

export default page
