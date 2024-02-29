import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




function View() {
  const [details, setDetails] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:5500/employees")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDetails(data);
      })
  }, []);


  const handleDelete =(detailId)=>{

    fetch(`http://localhost:5500/employees/${detailId}`,{
        method: 'DELETE',
        headers: {"content-type":"application/json"},
        
    })
    .then((res)=>{
        if(res)
        {
            alert("deleted..!");
            // navigate('/Form')
            return res.json()
            
        }
    })
    .then((data) => {
        setDetails(data);
        // console.log(data)
      })
  }

  const handleView =(detailId)=>{
    navigate('/viewdata/'+detailId)
  }

  const handleEdit =(detailId)=>{
    navigate('/editdata/'+detailId)
  }

  const handleReg =()=>{
    navigate('/')
  }


  return (
      <div className="container mt-5">
    <form>
    <table  className="table table-dark table-hover ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">NAME</th>
            <th scope="col">SALARY</th>
            <th scope="col">ACTION</th>
            <th scope="col"><button onClick={handleReg} className="btn btn-outline-info">Reg:Form</button></th>
          </tr>
        </thead>
        <tbody>
          {details &&
            details.map((v) => (
              <tr>
                <th scope="row">{v.id}</th>
                <td>{v.name}</td>
                <td>{v.salary}</td>
                <td colSpan={2}>
                  <button onClick={()=>{handleEdit(v.id)}} className="btn btn-success ps-4 pe-4 me-2">Edit</button>
                  <button onClick={()=>{handleDelete(v.id)}} className="btn btn-danger ms-2">Delete</button>
                  <button onClick={()=>{handleView(v.id)}}  className="btn btn-info ps-3 pe-3 ms-3">View</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </form>
    </div>
  );
}
export default View;
