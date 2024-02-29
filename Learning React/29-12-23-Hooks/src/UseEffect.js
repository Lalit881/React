import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function UseEffectHook() {
    const [pos,setPos] =  useState({x:0,y:0});

    //  useEffect(function,dependancies)
    
    // useEffect(()=>{});
    // useEffect(()=>{},[]);
    // useEffect(()=>{},[23,34,56]);
    
    useEffect(()=>{
    
      const handelMove = (e)=>{
    
        // console.log(e.screenX)
        setPos({
          x:e.pageX,
          y:e.clientY
        })
      
    
      }
    
      window.addEventListener("mousemove",handelMove)
    })
    
  return (
    <div style={{
        height:"20px",
        width:"20px",
        background:"#000",
        transform:`translate( ${pos.x}px,${pos.y}px)`
      }}>
  
       
       
      </div>
  )
}

export default UseEffectHook
