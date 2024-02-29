import React, { useState } from 'react'

function UsestateEx1() {

    // let x = 0;
    // const[a,b] = x;

    // const [intialVal,setInitialVal] = useState(any type of value);

    const [state,setState] = useState(0);
    const handleClick = ()=>{
        // setState(12)
        // setState(state+1)
        // setState(()=>{
        //     state+1
        // })
        // setState((prev)=>(
        //     
        //     prev+1
        // ))
        setState(prev=>prev+1);
    }   
  return (
    <div>
     <h5> {state}</h5>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UsestateEx1
