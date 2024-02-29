import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function Edit(){

    const {eid} = useParams()
    const [name,setName] = useState("")
    const [salary,setSalary] = useState("")
    const navigate = useNavigate()

    const details = {name,salary}

    useEffect(()=>{

    fetch("http://localhost:5500/employees/"+eid)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        setName(data.name);
        setSalary(data.salary);
    })
    
    },[])

    const handleUpdate=()=>{
        
        if(name!=="" && salary!==""){
            
            fetch("http://localhost:5500/employees/"+eid,{
                method:"PUT",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(details)
            })
            .then((res)=>{
                if(res){
                    alert("Data Updated !")
                    // return res.json();
                }
            })
            navigate("/view")
        }
        else{
            alert("Invalid Data !")
        }
        
    }


    return(
        <>
        <div className="container mt-5">
        <form className="form">
          <h2>Update Details</h2>

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
            <input 
            type="number"
            value={salary}
            onChange={(e)=>{setSalary(e.target.value)}}
             className="form-control" />
          </div>

          <button onClick={handleUpdate} className="btn">
            Update
          </button>
        </form>
      </div>
        </>
    )
}

export default Edit;