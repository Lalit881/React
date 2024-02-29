import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTodo, removeTodo, updateTodo } from "./todoSlice";
import { useState } from "react";

function App() {

  const todos = useSelector(state=>state.todos)
  const dispatch = useDispatch();
  const [name,setName] = useState("");
  const [btn,setBtn] = useState("ADD TODO");
  const [id,setId] = useState(null);

  const handleClick=()=>{

    
    const existingTodo = todos.filter((v)=>v.id===id)
    if(existingTodo.length>0){
      dispatch(updateTodo({name,id}));
      setName("");
      setId(null)
      setBtn("ADD TODO")
    }
    else{
      dispatch(addTodo(name));
      setName("");
    }

  }

  const handleEdit =(todoId)=>{
    const todo = todos.filter((v)=>v.id==todoId)
    setName(todo[0].name)
    setBtn("UPDATE TODO")
    setId(todoId);
  }
  return (
    <>
      <div className="container col-4 mt-4">
        <div className="input-group mb-3">
          <input
            type="text"
            value={name}
            className="form-control"
            placeholder="Enter username"
            onChange={(e)=>{setName(e.target.value)}}
          />
          <button onClick={handleClick} className="btn btn-outline-primary" type="button">
            {btn}
          </button>
        </div>
          <ul className="list-group">
            {todos.map((v)=>(
            <li key={v.id} className="list-group-item list-group-item-dark list-group-item-action d-flex justify-content-between">
                {v.name}
                <div>
                <button onClick={()=>handleEdit(v.id)} className="btn btn-info ps-3 pe-3" >Edit</button>
                <button onClick={()=>dispatch(removeTodo(v.id))} className="btn btn-danger ms-2">Delete</button>
                </div>
            </li>
            ))}
          </ul>
      </div>
    </>
  );
}

export default App;
