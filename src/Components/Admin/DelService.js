import React, { useContext, useEffect, useState } from 'react'
import dataContext from '../../Context/dataContext';
import Item from './Item';

export default function DelService() {

    // const [selectedOption,setSelectedOption] = useState(''); 

    const [services,setServices] = useState([{
       title:"",tagline:"",description:"",coverImage:"",icon:"",images:""
    }]);
    const context = useContext(dataContext);

    useEffect(()=>{
        try {
            const fetchAllData =async ()=>{
                const allData = await context.getAllData();
                // console.log(context.data);
                setServices(context.data);
            }
            fetchAllData();
        } catch (error) {
            console.log(error.message);
        }
    },[services]);

    // const handleSelect = (option)=>{
    //     setSelectedOption(option)
    // }

  return (
    <div>  
        <div className=' p-5 lg:p-10 bg-[var(--card)]'>
            <h1 className=' font-kanit text-2xl lg:text-3xl  font-semibold text-[var(--color1)]'>Delete Service</h1>
            <div className='flex justify-center items-center'>
                {
                    services.length===0 ?(
                        <p className='self-center'>No Service to Show</p>
                    ):(
                        <div className='grid grid-cols-1 mt-5 lg:grid-cols-4 gap-4 lg:gap-5 lg:p-5'>
                            {
                                services.map((service, index) => (
                            <div key={index} className="px-2 py-5">
                                <Item 
                                title={service.title} 
                                tagline={service.tagline} 
                                description={service.description} 
                                icon={service.icon}
                                coverImage={service.coverImage}
                                images={service.images}
                                />
                            </div>
                            ))}
                                
                        </div>
                    )
                }

            </div>

        </div>
    </div>
  )
}
