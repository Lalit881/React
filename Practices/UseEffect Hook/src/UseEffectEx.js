import React, { useEffect, useState } from "react";

function UseEffectEx(){

    const [count,setCount] = useState(0)
    const [cal,setCal] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        },1000);
        setCal(cal+count)
    },[count])    // When the array is empty then render only one time 

    return(
        <>
        <h1>it's render {count} times and the calcultion is {cal} !</h1>
        </>
    )
}

export default UseEffectEx;