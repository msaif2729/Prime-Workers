import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className=' bg-[var(--card)] px-8 py-10 mt-10 bottom-0 flex flex-col lg:flex-row gap-5 justify-between'>
        <h1 className='text-[var(--color5)] text-center font-kanit text-[16px] lg:text-xl'><i className="fa-regular text-base fa-copyright"></i> 2024 <span className=' font-kanit text-[var(--color1)] font-bold'>PRIME WORKERS.</span> All Rights Reserved.</h1>
        <h1 className='text-[var(--color5)] text-center font-kanit text-[16px] lg:text-xl'>Designed and Developed By<span className=' font-kanit text-[var(--color1)] font-bold'><br className='block lg:hidden'/> Mohammed Saif Ansari</span> </h1>
      </div>
    </div>
  )
}
