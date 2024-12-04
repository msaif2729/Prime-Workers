import React, { useState, useEffect } from 'react';

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
    <nav className="fixed top-0 w-full z-50 transition-all duration-300">
      <div
        className={`flex justify-between items-center px-5 lg:px-10 py-4 ${
          scroll
            ? 'bg-darkTheme-bg bg-opacity-90 shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="text-[var(--color1)] font-kanit text-3xl font-semibold">
          LOGO
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
            className={`w-6 h-[2px] bg-white transition-transform ${
              menuOpen ? 'translate-y-[0.1rem] -rotate-45' : ''
            }`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-white transition-transform ${
              menuOpen ? '-translate-y-[0.315rem] rotate-45' : ''
            }`}
          ></div>
          {!menuOpen && (
            <div className="w-6 h-[2px] bg-white"></div>
          )}
        </div>
      </div>

      <div
        className={`lg:hidden bg-darkTheme-bg bg-opacity-90 text-white font-semibold text-xl transition-all duration-300 ${
          menuOpen ? 'max-h-[500px] py-5' : 'max-h-0 overflow-hidden'
        }`}
      >
        <ul className="space-y-5 px-5">
          {['Home', 'Services', 'About', 'Our Work', 'Contact'].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                onClick={() => setMenuOpen(false)}
              >
                <li className="cursor-pointer">{item}</li>
              </a>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
