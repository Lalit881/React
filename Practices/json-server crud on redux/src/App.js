import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDetails, deleteDetails, userDetails } from './slice';

function App() {
  const [name,setName] = useState("");
  const [salary,setSalary] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(state=>state.users);

  console.log(users)
  


  
  const handlesubmit = (e) =>{
    e.preventDefault();
    fetch("http://localhost:4000/employees")
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      dispatch(userDetails(data))
    })
  }

  const handleclick = () =>{
    const userDetails = {name,salary}
    dispatch(addDetails(userDetails))
  }

  const handleDelete = (userId) =>{
    dispatch(deleteDetails(userId))
  }

  return (
    <>
    <div className="container d-flex justify-content-center">
      <form onSubmit={handlesubmit}>

        <div className="d-flex justify-content-center gap-3 mt-4 bg-dark text-light pt-4 pb-4 pe-4 ps-4">
          <div className="d-flex ">
            <label className="form-label mt-2 w-25 ">
              Name :  
            </label>
            <input
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              type="text"
              className="form-control"
              placeholder="Enter your Name"
            />
          </div>
          <div className="d-flex ">
            <label className="form-label mt-2 w-25 ">
              Salary :
            </label>
            <input
              value={salary}
              onChange={(e)=>{setSalary(e.target.value)}}
              type="text"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <button onClick={handleclick} className="btn btn-primary pe-4 ps-4">Add Details</button>
          <button className="btn btn-info pe-4 ps-4">View Details</button>
        </div>
      </form>
    </div>

        <table className="table table-hover table-dark mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Salary</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {users.map((item)=>(
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.salary}</td>
                <td><button className="btn btn-info pe-4 ps-4">Edit</button>
                <button onClick={()=>handleDelete(item.id)} className="btn btn-danger ms-3">Delete</button></td>
              </tr>
          ))}
          </tbody>
          </table>

        </>
  );
}

export default App;
