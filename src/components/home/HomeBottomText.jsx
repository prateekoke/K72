import React from 'react'
import { Link } from 'react-router-dom'


const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-6 mb-3'>
        <p  className='absolute font-[font2] text-[12px] w-65 leading-4 bottom-20 text-left right-5 lg:text-[15px] lg:w-70 lg:bottom-40 md:bottom-30 display-block lg:leading-5 '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
        <div className='hover:border-[#d3fd50] hover:text-[#d3fd50] lg:border-3 border-3 lg:h-[13vh] flex items-center lg:px-5 px-3 border-white rounded-full'
        ><Link className='lg:text-[7vw] text-[6vw] lg:mt-2 mt-0.5' to='/projects'>PROJECTS</Link></div>

        <div className='hover:border-[#d3fd50] hover:text-[#d3fd50] lg:border-3 border-3 lg:h-[13vh] flex items-center lg:px-5 px-3 border-white rounded-full'
        ><Link className='lg:text-[7vw] text-[6vw] lg:mt-2 mt-0.5' to='/agency'>AGENCY</Link></div>
    </div>
  )
}

export default HomeBottomText