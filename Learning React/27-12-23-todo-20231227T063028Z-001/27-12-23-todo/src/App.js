import logo from './logo.svg';
import './App.css';

import Form_object from './Form_object';
import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

let nextId =4;

const initialTodos = [
  {"title":"Apple",id:1},
  {"title":"Mango",id:2},
  {"title":"Kiwi",id:3}
]

function App() {

  const [todos,setTodos] =  useState(initialTodos);
  // console.log(todos);

  function handleAddTodo(title) //title= sdfsdf
  {
    setTodos([
      ...todos,
      {
        id:nextId++,
        title:title
      }

    ])
  }

  function handleChangeTodo(nextTodo) //title= DragonFruit
  {
    setTodos(
      todos.map((item)=>{

        if(item.id == nextTodo.id)
        {
          return nextTodo;
        }
        else 
        {
          return item;
        }

      })
    )
  }

  function handleDeleteTodo(todoId) //title= DragonFruit
  {
    setTodos(
      todos.filter((t)=>{ return t.id !== todoId})
    )
  }
  
  return (
    <div className="App">

      {/* <Form_object/> */}

      <AddTodo onadd={handleAddTodo}/>
      <TaskList todos={todos} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo}/>
      
   
    </div>
  );
}

export default App;
