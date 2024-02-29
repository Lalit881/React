import React, { useState } from 'react'
import AddTodo from './AddTodo';
import TaskList from './TaskList';

let nextId=4;
const initialTodos = [
    {id:1,title:"Apple"},
    {id:2,title:"Apple12"},
    {id:3,title:"Apple123"},


]

function Todo() {

    const [todos,setTodos] = useState(initialTodos);

    const handleAddTodo = (xyz)=>{

        setTodos([
            ...todos,
            {
                id:nextId++,
                title:xyz
            }
        ])

    }

    const handelChangeTodo =(nextTodo)=>{

        setTodos(
            todos.map((t)=>{

                if(t.id == nextTodo.id)
                {
                    return nextTodo;
                }
                else
                {
                    return t;
                }
            })
        )

    }

    const handleDelete =(todoId)=>{

        setTodos(

            todos.filter((t)=>{return t.id != todoId})
        )

    }

  return (
    <div>

        <AddTodo onadd={handleAddTodo}></AddTodo>
        <TaskList todos={todos} onChangeTodo={handelChangeTodo} onDeleteTodo={handleDelete}/>


      
    </div>
  )
}

export default Todo
