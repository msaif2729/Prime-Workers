import React, { useEffect, useState } from 'react'

const useBreakPoint = ()=>{
    const [breakPoint,setBreakPoint] = useState(window.innerWidth);

    useEffect(()=>{
        const handleBreakPonit = ()=> setBreakPoint(window.innerWidth);
        window.addEventListener('resize',handleBreakPonit);

        return(()=>{
            window.removeEventListener('resize',handleBreakPonit);
        })
    },[]);

    return breakPoint;

}

export default useBreakPoint;