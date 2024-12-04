import React, { useEffect, useState } from 'react'
import ac from '../Assets/images/ac.jpg';
import iron from '../Assets/images/iron.jpg';
import steel from '../Assets/images/steel.jpg';
import int from '../Assets/images/int.jpg';
import ac1 from '../Assets/images/ac1.jpg';
import iron1 from '../Assets/images/iron1.jpg';
import steel1 from '../Assets/images/steel1.jpg';
import interior1 from '../Assets/images/int1.jpg';
import WorkItem from './WorkItem';
import useBreakPoint from '../Hooks/useBreakPoint';

export default function Work() {


  const [images, setImages] = useState([]);
  const [services, setServices] = useState([]);
  const width = useBreakPoint();

  useEffect(()=>{

     const newImages =
     width > 1024
       ? [ac, steel,int,iron]
       : [ac1, steel1, interior1,iron1];
   setImages(newImages);

   setServices([
     {
       title: 'AC Service',
       tagline: 'Our Service is a Breath of Fresh Air.',
       description:
         'Breathe easy and stay cool with our AC services – ensuring optimal comfort and efficiency for your home or business, no matter the season.',
       icon: newImages[0],
     },
     {
       title: 'Iron Work',
       tagline: 'Strength forged in every design',
       description:
         'Forging strength and durability, shaping iron with precision and expertise. Our iron works deliver timeless solutions that stand strong through the years, creating sturdy, enduring solutions that stand the test of time.',
       icon: newImages[1],
     },
     {
       title: 'Interior Design',
       tagline: 'Designing spaces, crafting dreams.',
       description:
         'Interior design is not just about creating a space that looks beautiful; it’s about creating a space that feels like you. Our home should tell the story of who you are, and be a collection of what you love.',
       icon: newImages[2],
     },
     {
       title: 'Steel Works',
       tagline: 'Turning ideas into solid, lasting structures.',
       description:
         'Crafting excellence in steel – where innovation meets strength to build lasting solutions for every project. Our steel works transform ideas into solid, reliable structures that last.',
       icon: newImages[3],
     },
   ]);
 }, [width]);

  return (
    <div id='ourwork'>    
        <div className="bg-[var(--card)] px-5 py-8 lg:p-10 ">
            <h1 className='text-[var(--color4)] font-oswald text-center font-semibold mt-10 text-3xl'>Our Work</h1>
            {services.length > 0 ? (
            <div className='grid grid-cols-1 mt-5 lg:grid-cols-2 gap-4 lg:gap-10 lg:p-10'>
                {services.map((service, index) => (
                <div key={index} className="px-2 py-5">
                    <WorkItem 
                    title={service.title} 
                    tagline={service.tagline} 
                    description={service.description} 
                    icon={service.icon} 
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
