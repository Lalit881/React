import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {

   const [name,setName] =  useState("");
   const [salary,setSalary] =  useState("");
   const navigate = useNavigate()


   const handleClick = (e)=>{
    e.preventDefault();
    // console.log(e)

   const userData =  {name,salary};
   console.log(userData)

   fetch('http://localhost:6500/employees',{
    method:"post",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(userData)
   })

   .then((res)=>{
    if(res)
    {
        alert("Data insterted..!");
        navigate('/viewdata')
        
    }
   })

   }

   const testRoute = ()=>{
    navigate('/viewdata')
   }


  return (
    <div>
        
      <div className="container text-start">
        <h2>Registration Form</h2>
        <form onSubmit={handleClick}>

          <div className="form-group">
            <label > Name</label>
            <input
              type="text"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              
              className="form-control"
              id="exampleInputfirstname"
              name="firstname"
            />
          </div>

          <div className="form-group">
            <label>Salary</label>
            <input
              type="text"
              value={salary}
              onChange={(e)=>{setSalary(e.target.value)}}

              className="form-control"
              id="exampleInputlastname"
              name="lastname"
            />
          </div>
         
          <button  type="submit" className="btn btn-primary" name="create">
            Sign up
          </button>

          <Link to="/viewdata">View Data</Link>
          <b style={{cursor:"pointer"}} onClick={testRoute}>View Records</b>
        </form>
      </div>
    </div>
  );
}

export default Home;
