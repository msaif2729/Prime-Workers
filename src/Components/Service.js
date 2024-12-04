import React from 'react'
import ServiceSlider from './ServiceSlider'

export default function Service() {

    

  return (
    <div id='services'>
      <div className=' px-5 py-8  flex flex-col  justify-center items-center bg-[var(--card)] '>
           <h1 className='text-[var(--color4)] font-oswald font-semibold mt-10 text-3xl'>Our Services</h1>
           <h1 className='text-[var(--text)] font-oswald font-semibold text-3xl lg:text-4xl text-center mt-5'>Elevate Your Project with Our Top Services</h1>
            <ServiceSlider/>
      </div>
    </div>
  )
}
