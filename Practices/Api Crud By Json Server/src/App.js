import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const [users,setUsers] = useState([]);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [id,setId] = useState(11)
  

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      setUsers(data);
    })
  },[])

  const handleClick = (e)=>{

    const existingUser = users.filter((v)=>v.id==id);
    // console.log(existingUser);

    e.preventDefault();
    const userDetails = {name,email,id}

    if(existingUser.length>0){
    setUsers(users.map((v)=>(v.id==id)?{...userDetails}:v));
    setName("");
    setEmail("");
    setId(users.length+1);
    }
    else{
      setId(id+1)
      setUsers([...users,{...userDetails}])
      setName("");
      setEmail("")
      
    }

  }

  const handleDelete = (userId)=>{
    setUsers(users.filter((v)=>userId!==v.id))
  }

  const handleEdit = (userId)=>{
    const editUser =  users.filter((v)=>
        userId==v.id
      )
      setName(editUser[0].name);
      setEmail(editUser[0].email);
      setId(editUser[0].id);
  }

  return (
    <>
    <div className="container d-flex justify-content-center">
      <form onSubmit={(e)=>{handleClick(e)}}>

        <div className="d-flex justify-content-center gap-3 mt-4 bg-dark text-light pt-4 pb-4 pe-4 ps-4">
          <div className="d-flex ">
            <label className="form-label mt-2 w-25 ">
              Name :  
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Name"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
          </div>
          <div className="d-flex ">
            <label className="form-label mt-2 w-25 ">
              Email :
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <button className="btn btn-primary pe-4 ps-4">Add</button>
        </div>
      </form>
    </div>


        <table className="table table-hover table-dark mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {users.map((v,i)=>(
            <tbody>
              <tr key={i}>
                <th scope="row">{v.id}</th>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td><button onClick={()=>{handleEdit(v.id)}} className="btn btn-info pe-4 ps-4">Edit</button>
                <button onClick={()=>{handleDelete(v.id)}} className="btn btn-danger ms-3">Delete</button></td>
              </tr>
            </tbody>
          ))}
          </table>
        </>
  );
}

export default App;
