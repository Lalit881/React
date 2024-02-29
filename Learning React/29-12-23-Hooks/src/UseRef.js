import React, { useRef } from 'react'

function UseRef() {


    const h1Ref = useRef()

    function ChangeColor()
    {
        // document.getElementById('t').style.color="red"
        // console.log(h1Ref)
        // console.log(h1Ref.current)
        h1Ref.current.style.color="red"
    }


  return (
    <div>

       <h1 id='t' ref={h1Ref} onClick={ChangeColor}>Hello</h1>

       
      
    </div>
  )
}

export default UseRef


