import React from 'react';

export default function Preview2(props) {
  const { title, tagline, description, icon } = props;

  return (
    <div>
        <div
          className="bg-[var(--bg)] relative text-[var(--text)] overflow-hidden flex items-center justify-center shadow-xl rounded-lg bg-cover lg:h-[50vh]" 
          style={{ backgroundImage: `url(${icon})` }}
        >
            {/* <img src={`${icon}`} alt="" className='w-full h-full absolute' /> */}
          <div className={`flex flex-col justify-end items-center lg:items-start hover:opacity-100 focus:bg-black  px-10 py-5 opacity-0 transition-all duration-300 ease-in h-full w-full bg-gradient-to-t from-black/100 via-black/60 to-black/30`}>
            <h1 className="text-2xl lg:text-3xl text-[var(--color4)] font-oswald font-semibold">{title}</h1>
            <h2 className="lg:text-2xl text-xl text-center lg:text-start mt-4 font-oswald">{tagline}</h2>
            <p className="text-[15px] text-center lg:text-start mt-3 text-[var(--color3)]">{description}</p>
            <button
              className="hover:-skew-x-12 transition-all duration-300 ease-in-out hover:bg-transparent border-2 border-transparent rounded-sm font-kanit text-white py-1 px-2 cursor-pointer hover:border-[var(--color1)] mt-5 bg-[var(--color1)]"
            >
              See Our Work
            </button>
            
          </div>
          {/* <h1 className='absolute font-kanit text-2xl lg:hidden group-hover/item:invisible animate-pulse group-hover/item:invisible '>Click Me</h1> */}
        </div>
    </div>
  );
}
