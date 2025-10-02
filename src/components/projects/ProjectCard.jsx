import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
        <div className='group lg:h-full lg:w-1/2 flex items-center justify-center lg:hover:rounded-[40px] transition-all overflow-hidden '>
            <img className='h-full w-full object-cover' src={props.image1} alt="" />
            <div className='opacity-0 transition-all group-hover:opacity-100 absolute text-white text-5xl border-3 rounded-4xl px-2 font-[font1] pt-1'>
                <h1>SEE THE PROJECT</h1>
            </div>
        </div>
        <div className='group lg:h-full lg:w-1/2 flex items-center justify-center hover:rounded-[40px] transition-all overflow-hidden '>
            <img className='h-full w-full object-cover' src={props.image2} alt="" />
            <div className='opacity-0 transition-all group-hover:opacity-100 absolute text-white text-5xl border-3 rounded-4xl px-2 font-[font1] pt-1'>
                <h1>SEE THE PROJECT</h1>
            </div>
        </div>      
    </>
  )
}

export default ProjectCard