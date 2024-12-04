import React, { useState } from 'react';
import ScrollTransLeft from '../Animation/ScrollTransLeft';
import Modal from './Modal';
import ac from '../Assets/images/ac.jpg';
import iron from '../Assets/images/iron.jpg';
import steel from '../Assets/images/steel.jpg';
import int from '../Assets/images/int.jpg';


export default function WorkItem(props) {
  const { title, tagline, description, icon } = props;

  const images = [
    ac,iron,steel,int,ac,iron,steel,int,ac,iron,steel,int,ac,iron,steel,int
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleClick = () => {
    setModalContent({
      title,
      tagline,
      description,
      images
    });
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; 

  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <ScrollTransLeft>
        <div
          className="bg-[var(--bg)] text-[var(--text)] overflow-hidden flex shadow-xl rounded-lg bg-cover lg:h-[50vh]" 
          style={{ backgroundImage: `url(${icon})` }}
        >
          <div className="flex flex-col justify-end items-center  lg:items-start hover:opacity-90 px-10 py-5 opacity-0 transition-all duration-300 ease-in h-full w-full bg-gradient-to-t from-black/100 via-black/60 to-black/30">
            <h1 className="text-2xl lg:text-3xl text-[var(--color4)] font-oswald font-semibold">{title}</h1>
            <h2 className="lg:text-2xl text-xl text-center lg:text-start mt-4 font-oswald">{tagline}</h2>
            <p className="text-[15px] text-center lg:text-start mt-3 text-[var(--color3)]">{description}</p>
            <button
              className="hover:-skew-x-12 transition-all duration-300 ease-in-out hover:bg-transparent border-2 border-transparent rounded-sm font-kanit text-white py-1 px-2 cursor-pointer hover:border-[var(--color1)] mt-5 bg-[var(--color1)]"
              onClick={handleClick}
            >
              See Our Work
            </button>
          </div>
        </div>
      </ScrollTransLeft>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent}/>
      )}
    </div>
  );
}
