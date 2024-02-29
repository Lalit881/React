import React, { useState } from "react";
import View from "./View";
import { useNavigate} from "react-router-dom";


function Form() {
  const [name,setName] = useState("");
  const [salary,setSalary] = useState("");
  const navigate =  useNavigate();

  const handleSubmit =(e)=>{
    e.preventDefault() 
    const userData = {name,salary}
    
        if(name!=="" && salary!==""){
            fetch('http://localhost:5500/employees',{
                method:'post',
                headers:{"content-type":"application/json"},
                body:JSON.stringify(userData),
            })
            .then((res)=>{
                if(res){
                    alert("Data inserted !");
                    setName("")
                    setSalary("")
                }
            })
        }
        else{
            alert("Invalid Data !")
        }   
  }

  const handleClick =()=>{
    navigate("/view")
  }
  return (
    <>
      <div className="container mt-5">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Registration</h2>
          <div className="form-group">
            <label>Name :</label>
            <input
             type="text"
             value={name}
             onChange={(e)=>{setName(e.target.value)}}
              className="form-control" />
          </div>
          <div className="form-group">
            <label>Salary :</label>
            <input type="number"
            value={salary}
            onChange={(e)=>{setSalary(e.target.value)}}
             className="form-control" />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
          <button onClick={handleClick} type="submit" className="btn" style={{float:'right'}}>
            View
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
