import React from 'react'
import owner from '../Assets/images/owner.png'
import ScrollScale from '../Animation/ScrollScale'

export default function About() {
  return (
    <div id='about'>
      <div className=' px-5 py-8 lg:p-10 flex justify-evenly flex-col-reverse xl:flex-row'>


        <div className='left xl:w-[60%]'>
          <ScrollScale>
            <div>
              <h1 className=' hidden xl:block text-[var(--color4)] font-oswald font-semibold mt-10 text-3xl'>About Us</h1>
              <h1 className='text-[var(--text)] text-center lg:text-start font-oswald font-semibold text-3xl lg:text-4xl mt-5'>Your Trusted Partner in Craftsmanship and Industrial Excellence.</h1>
              <p className="lg:text-lg font-kanit text-center text-[15px] font-light lg:text-start mt-10 text-[var(--color7)]">Welcome to Prime Workers, your trusted partner in quality craftmanship & industrial solutions At prime workers, we specialize in delivering top-tier solutions for a diverse range of industries. with years of experience in the field, we proudly offer a wide array of services</p>
            </div>
          </ScrollScale>
            <ScrollScale>
              <div className='vision bg-[var(--card)] px-4 py-4 rounded-lg shadow-xl mt-5'>
                  <h1 className='text-[var(--color4)] font-oswald font-semibold text-2xl lg:text-3xl'>Our Vision</h1>
                  <p className="text-[15px] lg:text-lg font-kanit font-extralight text-start mt-2 text-[var(--color7)]">At Prime Workers, our vision is that we are committed to continuous improvement, sustainability & to build a long lasting partnership with our clients.</p>
              </div>
            </ScrollScale>
            <ScrollScale>
              <div className='vision bg-[var(--card)] px-4 py-4 rounded-lg shadow-xl mt-5'>
                  <h1 className='text-[var(--color4)] font-oswald font-semibold  text-2xl lg:text-3xl'>Our Misson</h1>
                  <p className="text-[15px] lg:text-lg font-kanit font-extralight text-start mt-2 text-[var(--color7)]">Our mission is to provide superior services that combines precision, innovation & reliability we are dedicated to meeting the unique needs of each & every clients by delivering the perfect solutions.</p>
              </div>
            </ScrollScale>
        </div>


        <ScrollScale>
          <div className='right flex xl:relative flex-col '>
              <h1 className=' block xl:hidden  text-[var(--color4)] my-10 font-oswald font-semibold mt-10 text-3xl'>About Us</h1>
              <img src={owner} alt="" className='w-[70vh]  lg:w-[40vh] self-center xl:w-[70vh] '/>
              <h1 className='bg-[var(--card)] rounded-t-lg text-center lg:text-start text-[var(--color7)] fonr-kanit p-5 text-[15px] font-normal lg:mx-10 xl:w-[60%] xl:absolute xl:-right-10 xl:bottom-0'>I <span className='text-[var(--color2)] font-bold'>Mr. Idrees Siddiqui</span> the founder & managing director of this esteemed company. At Prime Workers we offer a large variety of services & try to meet the expectations of our clients by giving the best of us</h1>
          </div>
        </ScrollScale>

      </div>
    </div>
  )
}
