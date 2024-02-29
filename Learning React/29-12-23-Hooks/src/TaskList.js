import React, { useState } from 'react'

function TaskList({todos,onChangeTodo,onDeleteTodo}) {
  return (
    <div>
{
    todos.map((t)=>(
        <li>
        
        <Task
        todo={t}
        onchange={onChangeTodo}
        ondelete={onDeleteTodo}       
        />
          </li>
    ))
}
        
      
     
    </div>
  )
}

function Task({todo,onchange,ondelete})
{
    const [edit,setEdit] = useState(false);
    let content;

    if(edit)
    {
      content= 
      <>
         <input value={todo.title} onChange={(e)=>{
            onchange({
                ...todo,
                title:e.target.value
            })
         }}></input>
        <button onClick={()=>{setEdit(false)}}>save</button>
       </> 
    }


    else
    {
        content=
         <>
            {todo.title}
        <button onClick={()=>{setEdit(true)}}>Edit</button>
        </>
    }


    return(
        <>
        
        {content}
        <button onClick={()=>{ondelete(todo.id)}}>Delete</button>

        
        </>
    )
}

export default TaskList
