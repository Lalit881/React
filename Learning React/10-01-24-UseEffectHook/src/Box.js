import React, { useEffect, useRef } from 'react'

function Box() {

    const divRef = useRef();

   useEffect(()=>{    
    
    const div = divRef.current;

    const observer = new IntersectionObserver((entries)=>{

        const entry = entries[0];

        if(entry.isIntersecting)
        {
            document.body.style.background = "#000";
            document.body.style.color = "#fff"
        }
        else 
        {
            document.body.style.background = "#fff";
            document.body.style.color = "#000"
        }      

    },{
        threshold :.5
       })
        observer.observe(div);
   })

  return (
    <div ref={divRef} style={
        {
            height:"100px",
            width:100,
            background:"blue"
        }
    }>
      
    </div>
  )
}

export default Box;
