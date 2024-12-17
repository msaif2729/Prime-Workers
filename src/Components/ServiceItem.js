import React from 'react'

export default function ServiceItem(props) {

    const {title,tagline,description,icon} = props;

  return (
    <div className='hover:shadow-2xl'>
       <div className="bg-[var(--bg)] p-4  text-[var(--text)] md:h-[45vh] lg:h-[55vh] h-auto flex  hover:scale-105  rounded-md transition-all duration-300  ">
            <div className="flex flex-col justify-evenly  ">
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <img src={icon} className='w-16' alt="" />
                    <h1 className="text-2xl font-oswald font-semibold">{title}</h1>
                    <span className='lg:h-[2px] h-[1px] w-32 bg-[var(--color1)]' ></span>
                </div>
                <div className='space-y-5  '>
                    <h2 className="text-lg text-center font-kanit ">{tagline}</h2>
                    <p className="text-[15px] text-center text-[var(--color7)] font-kanit font-extralight mt-4 px-4">{description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}