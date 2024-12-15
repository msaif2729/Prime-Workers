import React, { useState } from 'react'
import CustomDropdown from '../CustomDropdown'

export default function DelService() {

    const [selectedOption,setSelectedOption] = useState(''); 

    const handleSubmit = ()=>{
        
    }

    const handleSelect = (option)=>{
        setSelectedOption(option)
    }

  return (
    <div>  
        <div className=' p-5 lg:p-10 bg-[var(--card)]'>
            <h1 className=' font-kanit text-2xl lg:text-3xl  font-semibold text-[var(--color1)]'>Delete And Update Service</h1>
            <div className='flex gap-10'>
                <form action="" onSubmit={handleSubmit} className=' flex flex-col w-full '>
                    <CustomDropdown onSelectOption={handleSelect}/>
                    <button className="hover:-skew-x-12 transition-all duration-300 ease-in-out hover:bg-transparent border-2 border-transparent rounded-sm font-kanit text-white py-1 px-2 cursor-pointer hover:border-[var(--color1)] mt-5 bg-[var(--color1)]">Get Service</button>
                </form>
                
            </div>

        </div>
    </div>
  )
}
