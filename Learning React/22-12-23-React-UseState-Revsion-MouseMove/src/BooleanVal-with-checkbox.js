import React, { useState } from 'react'

function BooleanVal() {

   const [bool,setBool] =  useState(false);
  return (
    <div>

       <input type='checkbox' onChange={(e)=>{
        setBool((e.target.checked))


       }}></input>
       {(bool)? "Hello ": "HI"}
      
    </div>
  )
}

export default BooleanVal
