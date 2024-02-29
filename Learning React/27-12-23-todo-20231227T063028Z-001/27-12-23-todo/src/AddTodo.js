import React, { useState } from 'react'

function AddTodo({onadd}) {
    const [title,setTitle] = useState("")
  return (
    <div>

        <div>
        <label>Add Items:</label>
        <input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
        <button onClick={()=>{
            onadd(title)

        }}>Add</button>
        </div>
      
    </div>
  )
}

export default AddTodo
