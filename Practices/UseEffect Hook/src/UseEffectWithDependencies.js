import React, { useEffect, useState } from "react";

function UseEffectWithDependencies(){
    const [num,setNum] = useState(56)
    const [str,setStr] = useState("Hello")

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{return res.json()})
        .then((data)=>{console.log(data)})
        .catch((err)=>{console.log(err.message)})

        let x = num;
        let y = str;
        document.write(x + " " + y + " ")
    },[num,str])

    return(
        <>

        </>
    )
}

export default UseEffectWithDependencies;