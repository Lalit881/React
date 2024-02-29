import React, { useState } from 'react'

function ViewData() {
    const [details,setDetails] = useState("")

    fetch('http://localhost:6500/employees')
    .then((res)=>{return res.json();})
    .then((data)=>{

        // console.log(data);
        setDetails(data)
    })


  return (
    <div className='container'>
        
        <table className="table">
  <thead className='table-dark'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Salary</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
      {/* {console.log(details)} */}

      {details && details.map((v)=>(
        //console.log(v.name)

        <tr>
      
        <th scope="row">1</th>
        <td>{v.name}</td>
        <td>{v.salary}</td>
        <td>
          <button className='btn btn-success px-4 '>Edit</button>
          <button className='btn btn-danger px-3 ms-3'>Delete</button>
        </td>
      </tr>


      ))}
   
   
  </tbody>
</table>
    </div>
  )
}

export default ViewData
