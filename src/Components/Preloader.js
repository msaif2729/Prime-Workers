import React, { useEffect, useRef, useState } from 'react';

export default function Preloader() {
    const [percentage, setPercentage] = useState(1);
    const [dots, setDots] = useState('');

    useEffect(() => {

        const percentageInterval = setInterval(() => {
            setPercentage((prev) => {
                if (prev >= 100) {
                    clearInterval(percentageInterval);
                    return prev;
                }
                return prev + 1;
            });
        }, 20);

        // Timer for updating dots
        const dotsInterval = setInterval(() => {
            setDots((prev) => {
                if(prev === '') return '.'
                if (prev === '.') return '..';
                if (prev === '..') return '...';
                return '';
            });
        }, 250);
        
        if (percentage >= 100) {
            clearInterval(percentageInterval);
            clearInterval(dotsInterval);
        }

        return () => {
            clearInterval(percentageInterval);
            clearInterval(dotsInterval);
        };

    }, []); 

    return (
        <div className={`${percentage===100?'-translate-y-[100vh] opacity-0':''} fixed inset-0 h-[100vh] bg-[var(--color1)] z-50 transition-all duration-700`} >
            <div className="absolute bottom-20 lg:bottom-0 p-3">
                <h1 className="text-4xl lg:text-5xl font-kanit font-bold text-[var(--color2)]">{percentage}%</h1>
                <h1 className="text-5xl lg:text-9xl font-kanit font-extrabold text-white">
                    PRIME WORKERS{dots}
                </h1>
            </div>
        </div>
    );
}
