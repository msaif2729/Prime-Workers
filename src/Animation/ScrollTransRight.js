import React from 'react'
import { useInView } from 'react-intersection-observer'

export default function ScrollTransRight({children}) {

    const {ref,inView} = useInView({
        threshold:0,
        triggerOnce:true
    })

  return (
    <div
        ref={ref}
        className={`transition-transform duration-700 flex ease-in-out ${inView ? 'translate-x-0 opacity-100':'translate-x-full opacity-0 '}`}
        >
        {children}
    </div>
  )
}
