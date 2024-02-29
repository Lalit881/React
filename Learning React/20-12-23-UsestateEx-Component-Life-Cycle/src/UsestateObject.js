import React, { useState } from 'react'

function UsestateObject() {

    const [obj,setObj] = useState({n:0});
    const handleClick = ()=>{
        setObj({n:2})
    }
  return (
    <div>
        <h5>{obj.n}</h5>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UsestateObject
