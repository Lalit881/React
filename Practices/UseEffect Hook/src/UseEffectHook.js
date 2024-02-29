import React, { useEffect, useState } from "react";


function UseEffectHook(){
    const [move,setMove] = useState({x:0,y:0})


    useEffect(()=>{
        const handleMove =(e)=>{
            // console.log(e)
            setMove({x:e.pageX,y:e.pageY})
        }

        window.addEventListener("mousemove",handleMove)
    })

    return(
        <div style={{
            height:"20px",
            width:"20px",
            background:"black",
            transform:`translate( ${move.x}px,${move.y}px)`}}>
            
        </div>
    )
}

export default UseEffectHook;