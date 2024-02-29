import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editUsers } from './UserReducer';
import { useNavigate, useParams } from 'react-router-dom';

function Edituser() {
    
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {empId} = useParams();
    // console.log(empId)

    const [employees] = useSelector(state=>state.emp);
    // console.log(employees)

    const employee = employees.filter((item)=>{return item.id == empId })
    // console.log(employee[0])

    const {name,salary} = employee[0];

    const [uname,setuName] = useState(name);
    const [usalary,setuSalary] = useState(salary);

    // console.log(uname)
   
   
    // console.log(empId)

   useEffect(()=>{
    fetch('http://localhost:5000/employees/'+empId)
    .then((res)=>{return res.json()})
    .then((data)=>{
        // console.log(data)

        // setName(data.name)
        // setSalary(data.salary)
       

    })
   },[])

    const handleSubmit = (e)=>{

        e.preventDefault();

// console.log(uname)
// console.log(usalary)


        dispatch(editUsers({id:empId,name:uname,salary:usalary}))
        // navigate('/home')
      
    }
  return (
    <div>
<h2>Edit users</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                type="text"
                 value={uname}
                 onChange={(e)=>{setuName(e.target.value)}}
                  />
            </div>

            <div>
                <label>Salary:</label>
                <input
                 type="text"
                  value={usalary}
                  onChange={(e)=>{setuSalary(e.target.value)}}

                  />
            </div>

            <div>
               
                <input type="submit" />
            </div>

        </form>
      
    </div>
  )
}

export default Edituser


