import React, { useState } from 'react'

function AddTodo({onadd}) {

    const [title,setTitle] = useState("")
  return (
    <div>
        <label>Add items:</label>
        <input type='text'
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        
        ></input>

        <button onClick={()=>{
            onadd(title)
        }}>Add</button>
      
    </div>
  )
}

export default AddTodo
