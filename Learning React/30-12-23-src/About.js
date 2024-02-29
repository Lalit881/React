import React, { useContext, useRef } from 'react'
import { prop } from './UseRefHook'



function About() {
    const varRef = useRef();
    const t = useContext(prop);
    console.log(varRef)

     varRef.current.style.color ="blue"
     
  return (
    <div ref={varRef}>
      ABOUT {t}
    </div>
  )
}

export default About
