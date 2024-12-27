import React, { useContext, useEffect, useState } from 'react'
// import ac from '../Assets/images/ac.jpg';
// import iron from '../Assets/images/iron.jpg';
// import steel from '../Assets/images/steel.jpg';
// import int from '../Assets/images/int.jpg';
// import ac1 from '../Assets/images/ac1.jpg';
// import iron1 from '../Assets/images/iron1.jpg';
// import steel1 from '../Assets/images/steel1.jpg';
// import interior1 from '../Assets/images/int1.jpg';
import WorkItem from './WorkItem';
import dataContext from '../Context/dataContext';


export default function Work() {


  // const [images, setImages] = useState([ac, steel,int,iron]);
  const [services, setServices] = useState([]);
  const context = useContext(dataContext);
  // const width = useBreakPoint();
  
    //    const newImages =
    //    width > 1024
    //      ? [ac, steel,int,iron]
    //      : [ac1, steel1, interior1,iron1];
    //  setImages(newImages);

  useEffect(()=>{
    const fetchAllData = async ()=>{
      const data = await context.getAllData();
      if(data)
      {
        setServices(data);
      }  
    }
    fetchAllData();
   console.log()
 }, []);

  return (
    <div id='ourwork'>    
        <div className="bg-[var(--card)] px-5 py-8 lg:p-10 ">
            <h1 className='text-[var(--color4)] font-oswald text-center font-semibold mt-10 text-3xl'>Our Work</h1>
            {services?.length > 0? (
            <div className='grid grid-cols-1 mt-5 lg:grid-cols-2 gap-4 lg:gap-10 lg:p-10'>
                {services.map((service, index) => (
                <div key={index} className="px-2 py-5">
                    <WorkItem 
                    title={service.title} 
                    tagline={service.tagline} 
                    description={service.description} 
                    icon={service.coverImage} 
                    images={service.images}
                    />
                </div>
                ))}
            </div>
            ) : (
            <p className='text-center font-extrabold text-3xl'>No Service Available.</p>
            )}
        </div>

    </div>
  )
}
