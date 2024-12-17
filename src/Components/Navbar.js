import React, { useState, useEffect } from 'react';
import logo from '../Assets/images/logo.png'

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () =>{
       setMenuOpen((prev) => !prev);
  } 

  return (
    <nav className="fixed top-0 w-full z-50 h-0 ">
      <div
        className={`flex justify-between transition-all duration-300 items-center px-5 lg:px-10 fixed w-[100%] py-1 ${
          scroll
            ? 'bg-darkTheme-bg bg-opacity-90 shadow-md'
            : 'bg-transparent'
        }
       
        `}
      >
        <div className="">
          <a href="#home">
            <img src={logo} alt="" className='w-28  '/>
          </a>
        </div>

        <ul className="hidden lg:flex space-x-10 text-white font-kanit text-xl">
          {['Home', 'Services', 'About', 'Our Work', 'Contact'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
            >
              <li className="cursor-pointer hover:-skew-x-12 duration-150 transition-transform ease-in-out">
                {item}
              </li>
            </a>
          ))}
        </ul>

        <div
          className="flex flex-col justify-center items-center space-y-1 cursor-pointer lg:hidden"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
        >
          <div
            className={`w-6 h-[2px] bg-white transition-transform `}
          ></div>
          <div
            className={`w-6 h-[2px] bg-white transition-transform `}
          ></div>
          <div className="w-6 h-[2px] bg-white"></div>
          
        </div>
      </div>

      <div
        className={`lg:hidden pt-4 pb-2 bg-darkTheme-bg bg-opacity text-white font-semibold text-xl transition-all duration-700 ${
          menuOpen ? 'translate-y-0 ' : '-translate-y-80  overflow-hidden'
        }`}
      >
        <div className='flex justify-between mb-4'>
          <div className=" mx-3 transition-all duration-700  font-kanit text-3xl font-semibold">
            <a href="#home">
              <img src={logo} alt="" className='w-28 '/>
            </a>
          </div>
          <div
          className="flex flex-col mx-5 justify-center  space-y-1 cursor-pointer lg:hidden"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          >
            <div
              className={`w-6 h-[2px] bg-white translate-y-[0.1rem] -rotate-45 transition-transform ${
                menuOpen ? 'translate-y-[0.1rem] -rotate-45' : ''
              }`}
            ></div>
            <div
              className={`w-6 h-[2px] -translate-y-[0.315rem] rotate-45 bg-white transition-transform ${
                menuOpen ? '-translate-y-[0.315rem] rotate-45' : ''
              }`}
            ></div>
            
          </div>

        </div>
        <ul className=" px-5">
          {['Home', 'Services',  'About', 'Our Work', 'Contact'].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                onClick={() => setMenuOpen(false)}
              >
                <li className="cursor-pointer my-2">{item}</li>
              </a>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
