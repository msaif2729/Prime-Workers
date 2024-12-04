import React from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollScale = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0, 
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 flex ease-out ${
        inView ? 'scale-1  opacity-100' : 'scale-75  opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollScale;
