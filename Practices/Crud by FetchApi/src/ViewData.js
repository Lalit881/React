import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ViewData(){
    const {vid} = useParams();
    // console.log(vid);
    const [detail,setDetail] = useState("");

    useEffect(()=>{
        
        fetch("http://localhost:5500/employees/"+vid)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setDetail(data);
        })

    },[])
    
    // console.log(detail)

    return(
        <div className="container col-6 mt-5">
        <table  className="table table-dark table-hover ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">DETAILS</th>
              </tr>
            </thead>
            <tbody>
                  <tr>
                    <th scope="row">ID</th>
                    <td>{detail.id}</td>
                  </tr>
                <tr>
                    <th>NAME</th>
                    <td>{detail.name}</td>
                </tr>
                <tr>
                    <th>SALARY</th>
                    <td>{detail.salary}</td>
                </tr>
            </tbody>
          </table>
        </div>
    )
}

export default ViewData;