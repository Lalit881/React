import React, { useState } from 'react';
import './App.css';

const initialFruits = [
  {id:1,name:"Apple"},
  {id:2,name:"Banana"},
  {id:3,name:"Grapes"}
]

let id = 4
function App() {

  const [name,setName] = useState("");
  const [fruits,setFruits] = useState(initialFruits);
  const [editId,setEditId] = useState("");
  const [newName,setNewName] = useState("");
  
  const handleClick =()=>{

    const exitingFruit = fruits.filter((fruit)=>(fruit.name.toLowerCase()===name.toLowerCase()))
    // console.log(exitingFruit);

      if(exitingFruit.length>0){
        alert("This fruit already exists!")
      }
      else{
        if(name.trim()!==""){
            setFruits([...fruits,
              {id:id++,name:name}   // trim not count any white space
            ]);
            setName("");
          }
      }
    }
    // console.log(fruits)

  const handleDelete=(fruitsId)=>{
    setFruits(fruits.filter((f)=>(f.id!==fruitsId)))
  }

  const handleEdit=(fruitsId,fruitsName)=>{
      setEditId(fruitsId);
      setNewName(fruitsName);
  }

  const handleSave=(fruitsId)=>{
    if(newName.trim()!==""){
      setFruits(fruits.map((f)=>(f.id==fruitsId)?{...f,name:newName}:f))
      setEditId(null);
      setNewName("");
    }
  }


  return (
    <div className="App">
      <div className='container col-3 mt-5'>
        <div className='row'>
            <input 
            type="text"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            className="form-control col"></input>
            <button className="btn btn-success col-4"
            onClick={handleClick}
            >Add Todo</button>
        </div>
          {fruits.map((v,k)=>( 
            <ul style={{margin:"5px auto",fontSize:"20px"}}>

              {(editId==v.id)?(
                  <li key={k}>
                    <input 
                    type="text"
                    value={newName}
                    onChange={(e)=>{setNewName(e.target.value)}}
                    className="form-control col"></input>
                    <button onClick={()=>{handleSave(v.id)}} className='btn btn-success ps-4 pe-4 mt-2 ms-2'
                    >save</button>
                    <button className='btn btn-danger mt-2 ms-2'
                    onClick={()=>{handleDelete(v.id)}}>Delete</button>
                  </li>
              ):(
                <li key={k}>
                    {v.name}
                    <button className='btn btn-success ps-4 pe-4 mt-2 ms-2'
                    onClick={()=>{handleEdit(v.id,v.name)}}
                    >Edit</button>
                    <button className='btn btn-danger mt-2 ms-2'
                    onClick={()=>{handleDelete(v.id)}}>Delete</button>
                </li>
              )}
            </ul>
          ))}
      </div>
    </div>
  );
}

export default App;
