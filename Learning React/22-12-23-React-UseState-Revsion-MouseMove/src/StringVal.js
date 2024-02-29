import React, { useState } from 'react'

function StringVal() {

    const [name,setName] =  useState("")
    const [age,setAge] =  useState(20)
  return (
    <div>

        <form>
            Name: <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input><br/>

            {/* Age: <input type='text' value={age} onChange={(e)=>{
                setAge(e.target.value)
            }}></input><br/> */}
             <input type='button' value={"Chnage Str"} ></input><br/>
             <button onClick={(e)=>{
                e.preventDefault()
                setAge(age+1)
             }}> Increment Age</button>
        </form>
      
     <h1> Hello {name} . Your age is {age}</h1>
    </div>
  )
}

export default StringVal


