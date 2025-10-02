import React from 'react'
import Video from './video'
const HomeHeroText = () => {
  return (
    <div className='font-[font1] lg:pt-4 pt-70 md:pt-20'>
        <div className='lg:text-[9.5vw] text-[13vw] uppercase justify-center flex items-center lg:leading-[10vw] leading-[12vw]'>L'étincelle</div>
        <div className='lg:text-[9.5vw] text-[13vw] uppercase justify-center flex items-center lg:leading-[10vw] leading-[12vw]'>qui
            <div className= "lg:h-[12vh] h-[6vh] lg:w-[16vw] w-[17vw] rounded-full overflow-hidden" ><Video /></div>
             génère</div>
        <div className='lg:text-[9.5vw] text-[13vw] uppercase justify-center flex items-center lg:leading-[10vw] leading-[12vw]'>la créativité</div>
    </div>
  )
}

export default HomeHeroText  