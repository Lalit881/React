import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  editUser } from "./UserReducer";
import { useNavigate, useParams } from "react-router-dom";

let i = 4;

function Edituser() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();

  // console.log(userId);

  const users = useSelector((state) => state.users);
  // console.log(users);

  const existingUser = users.filter((item)=>{
    return item.id == userId
  })
  // console.log(existingUser[0]);//{id: 3, name: 'Lalit', email: 'l@gmail.com', phone: 987987}

//   arr = [1,2,3]
//   const [a,b,c] = arr;


  const {id,name,email,phone} = existingUser[0];

  const [uid, setId] = useState(userId);
  const [uname, setuName] = useState(name);
  const [uemail, setuEmail] = useState(email);
  const [uphone, setuPhone] = useState(phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editUser({id: userId,name:uname,email:uemail,phone:uphone}))
    navigate('/home');

    
  };
  return (
    <div>
      <div className="container w-50 text-start">
        <form onSubmit={handleSubmit}>
          <div>
            <label>ID</label>
            <input
              disabled={"disabled"}
              value={uid}
              className="form-control"
              type="text"
            ></input>
          </div>

          <div className="form-group">
            <label>Name</label>
            <input
              value={uname}
              onChange={(e) => {
                setuName(e.target.value);
              }}
              className="form-control"
              type="text"
            ></input>

            {name.length == 0 && (
              <span className="text-danger">* Enter Name</span>
            )}
          </div>

          <div>
            <label>Email</label>
            <input
              value={uemail}
              onChange={(e) => {
                setuEmail(e.target.value);
              }}
              className="form-control"
              type="text"
            ></input>
          </div>

          <div>
            <label>Phone</label>
            <input
              value={uphone}
              onChange={(e) => {
                setuPhone(e.target.value);
              }}
              className="form-control"
              type="text"
            ></input>
          </div>

          <div>
            <button className="btn btn-success my-3" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edituser;
