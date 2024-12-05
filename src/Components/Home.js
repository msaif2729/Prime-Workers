import React, { useEffect, useState } from 'react'
import ac from '../Assets/images/ac.jpg';
import iron from '../Assets/images/iron.jpg';
import steel from '../Assets/images/steel.jpg';
import interior from '../Assets/images/int.jpg';
import ac1 from '../Assets/images/ac1.jpg';
import iron1 from '../Assets/images/iron1.jpg';
import steel1 from '../Assets/images/steel1.jpg';
import interior1 from '../Assets/images/int1.jpg';
// import quality from '../Assets/images/1.png';
// import certify from '../Assets/images/2.png';
// import afford from '../Assets/images/3.png';
import quality from '../Assets/images/icons/1.png';
import certify from '../Assets/images/icons/2.png';
import afford from '../Assets/images/icons/3.png';
import pic from '../Assets/images/pic1.png';
import ScrollScale from '../Animation/ScrollScale';
import useBreakPoint from '../Hooks/useBreakPoint';

export default function Home() {
  
  
  
  const [images,setImages] = useState([
    ac1,
    steel1,
    iron1,
    interior1,
  ]); 

  const width = useBreakPoint();

  
  const date = new Date();
  const expyear = date.getFullYear();
  
  const who = [
    "PRIME WORKERS",
    "CREATORS",
    "DESIGNERS",
    "PERFECTIONIST",
  ]
  
  const [whoIndex,setCurrentWhoIndex] = useState(0);
  const [currectIndex,setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    
    setIsFading(true);
    setTimeout(() => {
      setCurrentWhoIndex((prevWhoIndex) =>
        prevWhoIndex === who.length - 1 ? 0 : prevWhoIndex + 1
    );
    
    setTimeout(() => {
      setIsFading(false);
    }, 200); 
  }, 200);
  
},4000);


const newImages =
width > 1024
  ? [ac, steel, iron, interior]
  : [ac1, steel1, iron1, interior1];
setImages(newImages);

    return () =>{
      clearInterval(interval);
    } 
  }, [images.length,who.length,width]);

  return (
      <div id='home'>
        <div className='h-[100vh] bg-cover transition-all duration-500 ease-in-out ' style={{backgroundImage: `url(${images[currectIndex]})`}}>
          <div className="h-[100vh] lg:bg-gradient-to-r bg-gradient-to-b from-black/55 lg:from-black/100 via-black/40 to-gray-900/50 flex justify-center items-center lg:px-20 ">
            
            <div className='text-center lg:text-left px-5 lg:px-20'>
              <h1 className='font-kanit text-white text-2xl lg:text-3xl '>Welcome To <span className=' text-[var(--color1)] font-semibold tracking-wide '>Prime Workers</span></h1>
              <h1 className="font-kanit tracking-wide mt-6 text-4xl lg:text-8xl  text-[var(--color2)] font-extrabold ">WE'RE <br /><span className={`transition-opacity duration-500  ${isFading ? 'opacity-0' : 'opacity-100'}`} key={who[whoIndex]}>{who[whoIndex]}</span></h1>
              <p className=' text-white font-kanit text-lg lg:text-xl mt-10 lg:w-[45%] '>
                We specialize in AC servicing, iron works, interior designing and steel works, delivering quality and reliability for all your fabrication needs.
              </p>
              <a href="#ourwork">
                <button className=' hover:-skew-x-12 transition-all duration-300 ease-in-out  hover:bg-transparent border-2 border-transparent rounded-sm font-kanit text-white pt-1 pb-2 p-5  hover:border-[var(--color1)] mt-8 bg-[var(--color1)]'>See Our Work</button>
              </a>
            </div>
          </div>
        </div>


      <ScrollScale>


        <div className='flex felx-col flex-col-reverse xl:flex-row '>

          <div className='flex'>

            <div className='flex justify-center flex-col lg:flex-row'>
              <div className=' bg-[var(--card)] flex flex-col justify-center  rounded-md m-5 px-3 py-4  lg:w-[30%] h-[30vh] lg:h-[38vh] shadow-lg'>
                <div className='flex items-center  px-4  '>
                  <img src={quality} alt="" className='w-16 '/>
                  <h1 className='font-oswald font-extrabold text-[var(--text)] text-3xl'>Quality <br/> Workmanship</h1>
                </div>
                <p className='text-[var(--color7)] font-kanit font-extralight mt-4 text-justify text-[15px] px-4 '>
                  Quality workmanship reflects skill, detail, and commitment, ensuring every task meets the highest standards of excellence.</p>
              </div>

              <div className=' bg-[var(--card)] flex flex-col justify-center  rounded-md m-5 px-3 py-4  lg:w-[30%] h-[30vh] lg:h-[38vh] shadow-lg'>
                <div className='flex pr-4 pl-4 gap-2  '>
                  <img src={certify} alt="" className='w-16 '/>
                  <h1 className='font-oswald font-extrabold text-[var(--text)] text-3xl'>Certifications <br/>& Compliance</h1>
                </div>
                <p className='text-[var(--color7)] font-kanit font-extralight mt-4 text-justify text-[15px] px-4 '>
                  Certificate & compliance validate that an organisation meets required standards, promoting trust, accountability & consistency in its operations.
                  </p>
              </div>

              <div className=' bg-[var(--card)] flex flex-col justify-center  rounded-md m-5 px-3 py-4  lg:w-[30%] h-[30vh] lg:h-[38vh] shadow-lg'>
                <div className='flex pr-4 pl-4 gap-5   '>
                  <img src={afford} alt="" className='w-16'/>
                  <h1 className='font-oswald font-extrabold text-[var(--text)] text-3xl'>Affordable <br/> Pricing</h1>
                </div>
                <p className='text-[var(--color7)] font-kanit font-extralight mt-4 text-justify text-[15px] px-4 '>
                  Affordable pricing is the key to build trust & long term relationship with the customers while maintaining sustainable business practices.
                </p>
              </div>
            </div>

          </div>

          <div className='mx-5 bg-[var(--color1)] overflow-hidden  rounded-md h-[45vh] lg:h-[48vh] bg-cover -translate-y-6 shadow-lg' style={{backgroundImage: `url(${pic})`}}>
            <div className="w-[100%] p-5 h-[45vh] lg:h-[48vh] bg-gradient-to-r from-black/40 via-black/30 to-gray-900/15">
              <h1 className=' font-khand text-8xl  font-extrabold text-white  '>{expyear-2007}+</h1>
              <h1 className='font-khand text-3xl lg:text-4xl font-extrabold text-white'>Years of Experience</h1>
              <p className='text-white font-kanit  mt-4 text-justifytext-base  '>
                With over 17+ years of experience we bring a deep understanding of the industry, refined skills & a proven track record of delivering excellence.
              </p>
              <a href="#contact">
              <button className=' hover:-skew-x-12 transition-all duration-300 ease-in-out flex justify-center items-center gap-2 font-bold text-xl font-kanit text-white mt-3 mb-8'><span className="material-symbols-outlined">arrow_circle_right</span>Contact Us</button>
              </a>
            </div>
          
          </div>
        </div>

      
      </ScrollScale>

        
      </div>
  )
}
