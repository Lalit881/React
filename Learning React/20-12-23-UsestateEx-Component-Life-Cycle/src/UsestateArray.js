import React, { useState } from 'react'


const initialVal  = [12,1,3];

function UsestateArray() {

    const[arr,setArr] = useState(initialVal);
    const handleClick = ()=>{
        setArr(["hi",45,6.7])
    }
  return (
    <div>
      <h5>{arr[0]}</h5>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UsestateArray
