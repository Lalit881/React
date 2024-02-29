import React from 'react';
import { useState } from 'react';

function MouseMove() {
    const [pos,setPos] = useState({x:0,y:0});

    const handelMove =(e)=>{
      // console.log(e);
  
      setPos({
        x:e.clientX,
        y:e.clientY
      })
  
    }
  
    window.addEventListener("mousemove",handelMove)
  
    return (
  
      // <>
      // {pos.x}
  
      // </>
  
      <div style={{
        height:"20px",
        width:"20px",
        background:"#000",
        transform:`translate(${pos.x}px,${pos.y}px)`,
        position:"absolute",
        top:"-15px",
        left:"-15px"
  
      }} >
  
         
       
      </div>
    );
}

export default MouseMove
