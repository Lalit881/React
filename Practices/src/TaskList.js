import React, { useState } from 'react'

function TaskList({todos,onChangeTodo,onDeleteTodo}) {
  return (
    <div>

        <ul>

            {
                todos.map((t)=>(
                    <li>
                          <Task
                          todo ={t}
                        onchange={onChangeTodo}
                        ondelete={onDeleteTodo}
                        />
                    </li>
                ))
            }

        </ul>

      
      
    </div>
  )
}


function Task({todo,onchange,ondelete})
{
    const [edit,setEdit] = useState(false)
    let content;

    if(edit)
    {
       content=  <>
       <input value={todo.title} onChange={(e)=>{
        onchange({
            ...todo,
            title:e.target.value
        })

       }}></input>
       <button onClick={()=>{setEdit(false)}}>Save</button>
       </>
    }

    else 
    {
     content =  <>
                {todo.title}
                <button onClick={()=>{setEdit(true)}}>Edit</button>
            </>
    }

    return(
        <>       

            {content}                 
            <button onClick={()=>{ondelete(todo.id)}}>delete</button> 
        
        </>
    )

}

export default TaskList
