import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';




function Viewuser() {

   const {uid} =  useParams();
   console.log(uid)

    const [details,setDetails] = useState("")

    useEffect(()=>{
        
    fetch('http://localhost:6500/employees/'+uid)
    .then((res)=>{return res.json();})
    .then((data)=>{

        // console.log(data);// {name: 'David', salary: '5000', id: '2'}
         setDetails(data)
    })
    })


  return (
    <div>

     <h1>Id: {details.id} </h1> 
     <h2>Name:{details.name} </h2>
     <h3>Salary:{details.salary}</h3>

     
    </div>
  )
}

export default Viewuser
