import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUsers } from './UserReducer';
import { useNavigate } from 'react-router-dom';

function Adduser() {
    const [name,setName] = useState("");
    const [salary,setSalary] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e)=>{

        e.preventDefault();
        // console.log(name)
        // console.log(salary)
        // if(name=="" || salary=="")
        // {
        //     alert("Empty fields..!")
        // }

        if(name.length==0 || salary.length==0)
        {
            alert("Empty fields..!")
        }

        else 
        {
            fetch('http://localhost:5000/employees',{
                method:"post",
                headers:{"content-type":"Application/json"},
                body:JSON.stringify({name,salary})
            })
            .then((res)=>{return res.json()})
            .then((data)=>{
                // console.log(data)
                dispatch(addUsers({name,salary}));
                navigate('/home')
    
            })
        }

       



    }
  return (
    <div>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                type="text"
                 value={name}
                 onChange={(e)=>{setName(e.target.value)}}
                  />
            </div>

            <div>
                <label>Salary:</label>
                <input
                 type="text"
                  value={salary}
                  onChange={(e)=>{setSalary(e.target.value)}}

                  />
            </div>

            <div>
               
                <input type="submit" />
            </div>

        </form>
      
    </div>
  )
}

export default Adduser


