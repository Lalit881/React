import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers, userData } from './UserReducer';
import { Link, useNavigate } from 'react-router-dom';



function Home() {
    
    // const  [details,setDetails] = useState([])

    const dispatch = useDispatch();
    const [employees] = useSelector(state=>state.emp);
    // console.log(employees)
    const navigate = useNavigate();


 useEffect(()=>{
    fetch('http://localhost:5000/employees')
    .then((res)=>{return res.json()})
    .then((data)=>{
        // console.log(data)
        dispatch(userData(data))
    })
 },[])

 const handleEdit = (id)=>{
  
  navigate(`/edituser/${id}`)

 }

 const handleDelete = (id)=>{
  console.log(id)
  dispatch(deleteUsers({id:id}))
 }

    
  return (
    <div className='container'>
      <h2>User Data</h2>

      <div>

    <Link to="/adduser" className='btn btn-info my-2'>Add User</Link>

      </div>
      <table className='table '>
        <thead className='table-dark'>
           <tr>
           <th>Id</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Actions</th>
           </tr>
        </thead>

       
           <tbody>

            {employees && employees.map((emp)=>(
                <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.salary}</td>
                <td>
                <button>View</button>
                <button onClick={()=>{handleEdit(emp.id)}}>Edit</button>
                <button onClick={()=>{handleDelete(emp.id)}}>Delete</button>
                </td>
            </tr>
            ))}

            </tbody>
          
     
      </table>
    </div>
  )
}





export default Home
