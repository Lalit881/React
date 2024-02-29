import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewData() {
  const [details, setDetails] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:6500/employees")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setDetails(data);
      });
  });

  const handleClick = (id) => {
    // console.log(id);//
    navigate("/view/" + id);
  };

  const handleEdit = (id) => {
    // console.log(id);//
    navigate("/edit/" + id);
  };

  return (
    <div className="container">
      <table className="table">
       <thead>
       <tr>
       <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Salary</th>
            <th scope="col">Actions</th>
        </tr>
       </thead>
     
        {details && details.map((v)=>(
          
            // <tbody>
           <tr key={v.id}>
           <th scope="row">{v.id}</th>
           <td>{v.name}</td>
           <td>{v.salary}</td>
           <td>
             <button onClick={() => {handleEdit(v.id);}} className="btn btn-success px-4 ">Edit</button>
             <button className="btn btn-danger px-3 ms-3">Delete</button>
             <button onClick={() => {handleClick(v.id);}} className="btn btn-info px-3 ms-3">View</button>
           </td>
         </tr>
        //  </tbody>
        ))}
     
     
      </table>
  
    </div>
  );
}

export default ViewData;
