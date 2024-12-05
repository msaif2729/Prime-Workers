import React from 'react'
import ScrollTransLeft from '../Animation/ScrollTransLeft'
import ScrollTransRight from '../Animation/ScrollTransRight'
import CustomDropdown from './CustomDropdown'

export default function Contact() {
  return (
    <div id='contact'>
        <div className=' lg:px-10 lg:pt-10 lg:pb-5 px-5 pt-8 pb-4 flex lg:flex-row flex-col justify-evenly items-center '>
            <div className='left lg:w-[50%] lg:px-10'>
                <ScrollTransLeft>
                    <div className='w-full'>
                        <h1 className='text-[var(--color4)] font-oswald font-semibold mt-10 text-3xl'>Contact With Us</h1>
                        <div className='flex items-center mt-5 gap-3'>
                            <h1 className='text-[var(--text)] font-oswald font-semibold text-3xl lg:text-4xl mt-5'>Get In Touch </h1>
                            <span className='lg:h-[2px] h-[1px] w-[150px] lg:w-[455px] bg-[var(--text)] self-end mb-4' ></span>
                        </div>
                        <div className='flex flex-col px-2 justify-center  '>
                            <div className='flex  items-center  mt-8 '>
                                <i className="text-[var(--color1)] text-xl lg:text-2xl text-center mr-[10%] fa-solid fa-location-dot"></i>
                                <p className="text-[15px] lg:text-lg font-kanit text-start text-[var(--color7)]">Shop no. 360, Jivaji lokhandwala building, Bapty Road, Grant Road (E), Mumbai - 400008.</p>
                            </div>
                            <div className='flex  items-center mt-8 '>
                                <i className="text-[var(--color1)] text-xl lg:text-2xl text-center mr-[9%] fa-solid fa-phone"></i>
                                <p className="text-[15px] lg:text-lg font-kanit text-start  text-[var(--color7)]">9820989299</p>
                            </div>
                            <div className='flex  items-center mt-8 '>
                                <i className="text-[var(--color1)] text-xl lg:text-2xl text-center mr-[9%] fa-solid fa-envelope"></i>
                                <p className="text-[15px] lg:text-lg font-kanit text-start text-[var(--color7)]">primeworkers21@gmail.com</p>
                            </div>
                        </div> 
                        <div className='flex items-center mt-5 gap-3'>
                            <h1 className='text-[var(--text)] font-oswald font-semibold text-3xl lg:text-4xl mt-5'>Follow Us On </h1>
                            <span className='lg:h-[2px] h-[1px] w-[150px] lg:w-[450px] bg-[var(--text)] self-end mb-4' ></span>
                        </div>
                        <div className='flex gap-4 lg:gap-8 xl:gap-10 px-2 py-8 '>
                            <div className='flex w-16 justify-center items-center bg-[var(--color1)] p-4 rounded-lg cursor-pointer group/insta border-2 border-[var(--bg)] hover:border-[var(--color1)]  hover:bg-[var(--bg)] transition-all duration-500'>
                                <a href="">
                                    <i className="text-[var(--bg)] text-2xl lg:text-3xl text-center  fa-brands fa-instagram group-hover/insta:text-[var(--color4)] transition-all duration-500"></i>
                                </a>
                                {/* <p className="text-[15px] lg:text-lg font-kanit text-start text-[var(--color7)]">Instagram</p> */}
                            </div>
                            <div className='flex w-16 justify-center items-center bg-[var(--color1)] p-4 rounded-lg cursor-pointer group/whatsapp border-2 border-[var(--bg)] hover:border-[var(--color1)]  hover:bg-[var(--bg)] transition-all duration-500'>
                                <a href="https://wa.me/919820989299" target="_blank" rel='noreferrer'>
                                    <i className="text-[var(--bg)] text-2xl lg:text-3xl text-center  fa-brands fa-whatsapp group-hover/whatsapp:text-[var(--color4)] transition-all duration-500"></i>
                                </a>
                                {/* <p className="text-[15px] lg:text-lg font-kanit text-start  text-[var(--color7)]">WhatsApp</p> */}
                            </div>
                            <div className='flex w-16 justify-center items-center bg-[var(--color1)] p-4 rounded-lg cursor-pointer group/face border-2 border-[var(--bg)] hover:border-[var(--color1)]  hover:bg-[var(--bg)] transition-all duration-500'>
                                <a href="" target="_blank">
                                    <i className="text-[var(--bg)] px-1 text-2xl lg:text-3xl text-center fa-brands fa-facebook-f group-hover/face:text-[var(--color4)] transition-all duration-500"></i>
                                </a>
                                {/* <p className="text-[15px] lg:text-lg font-kanit text-start text-[var(--color7)]">Facebook</p> */}
                            </div>
                            <div className='flex w-16 justify-center items-center bg-[var(--color1)] py-4 px-[14px] rounded-lg cursor-pointer group/twitter border-2 border-[var(--bg)] hover:border-[var(--color1)]  hover:bg-[var(--bg)] transition-all duration-500  '>
                                <a href="">
                                    <i className="text-[var(--bg)]  text-2xl lg:text-3xl text-center fa-brands fa-twitter group-hover/twitter:text-[var(--color4)] transition-all duration-500"></i>
                                </a>
                                {/* <p className="text-[15px] lg:text-lg font-kanit text-start text-[var(--color7)]">Facebook</p> */}
                            </div>
                        </div> 
                    </div>
                </ScrollTransLeft>
            </div>

            <div className='w-[100%] lg:w-[50%] lg:px-10 mt-10'>
                <ScrollTransRight>
                    <div className="bg-[var(--card)] text-[var(--text)] w-full  px-5 lg:px-8 py-8 rounded-lg shadow-lg">
                        <h2 className="text-[var(--color2)] font-oswald font-semibold mb-10 text-2xl lg:text-3xl">Send us a message</h2>
                        <form className="space-y-5">
                            {/* Name and Phone */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <label htmlFor="name" className="block mb-3 text-sm font-oswald tracking-widest  font-medium">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-transparent text-lg lg:text-xl border-b-[1px] lg:border-b-2 lg:border-b-2 border-[var(--color1)] text-[var(--color7)] focus:outline-none focus:ring-0 placeholder-neutral-700 font-kanit"
                                        placeholder="Your Name"
                                    />
                                    </div>
                                    <div className="flex-1">
                                    <label htmlFor="phone" className="block mb-3 text-sm font-oswald tracking-widest font-medium">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full bg-transparent text-lg lg:text-xl border-b-[1px] lg:border-b-2 border-[var(--color1)] text-[var(--color7)] focus:outline-none focus:ring-0 placeholder-neutral-700 font-kanit"
                                        placeholder="Your Phone"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className='my-16'>
                                <label htmlFor="email" className="block mb-3 text-sm font-oswald tracking-widest font-medium">
                                Email
                                </label>
                                <input
                                type="email"
                                id="email"
                                className="w-full bg-transparent text-lg lg:text-xl border-b-[1px] lg:border-b-2 border-[var(--color1)] text-[var(--color7)] focus:outline-none focus:ring-0 placeholder-neutral-700 font-kanit"
                                placeholder="Your Email"
                                />
                            </div>

                            {/* Subject */}
                            <div >
                                <label htmlFor="subject" className="block mb-2 text-sm font-oswald tracking-widest font-medium">
                                Subject
                                </label>
                                <div className="">
                                    <CustomDropdown />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-oswald tracking-widest font-medium">
                                Message
                                </label>
                                <textarea
                                id="message"
                                rows="4"
                                className="w-full bg-transparent text-lg lg:text-xl border-b-[1px] lg:border-b-2 border-[var(--color1)] text-[var(--color7)] focus:outline-none focus:ring-0 placeholder-neutral-700 font-kanit    "
                                placeholder="Your Message"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-start">
                                <button
                                type='button'
                                className="hover:-skew-x-12 hover:text-[var(--color6)] transition-all duration-300 ease-in-out  hover:bg-transparent border-2 border-transparent rounded-sm font-kanit text-white pt-1 pb-2 p-5  hover:border-[var(--color1)] bg-[var(--color1)]"
                                >
                                Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </ScrollTransRight>
            </div>
        </div>
        {/* <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d546.8714267134279!2d72.82182145151174!3d18.96399008728626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce13585eb647%3A0x145859f2a6e49c2!2s360%2C%20Bapty%20Rd%2C%20Navjeevan%20Society%2C%20Grant%20Road%20East%2C%20Bharat%20Nagar%2C%20Kamathipura%2C%20Mumbai%2C%20Maharashtra%20400008!5e1!3m2!1sen!2sin!4v1733251623022!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
        <iframe className='w-full h-[70vh] mt-10' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5366694927957!2d72.81927361091265!3d18.963964455405716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce13585eb647%3A0x145859f2a6e49c2!2s360%2C%20Bapty%20Rd%2C%20Navjeevan%20Society%2C%20Grant%20Road%20East%2C%20Bharat%20Nagar%2C%20Kamathipura%2C%20Mumbai%2C%20Maharashtra%20400008!5e0!3m2!1sen!2sin!4v1733414153235!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
