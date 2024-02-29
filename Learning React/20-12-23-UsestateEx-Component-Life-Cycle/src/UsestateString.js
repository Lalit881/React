import React, { useState } from 'react'

function UsestateString() {

    const [str,setStr] = useState("hi");

    const handleClick = ()=>{
        // setStr("Niashedh..!")

        // setStr(str + " " + "Manit");

        // setStr(()=>(
        //     "hello"
        // ))

        // setStr((prev)=>(
        //     str+" " +"STRING"
        // ))

        setStr(prev => str + " " + prev);
    }
  return (
    <div>
        <p>{str}</p>
        <button onClick={handleClick}>Change Str Val</button>
      
    </div>
  )
}

export default UsestateString
