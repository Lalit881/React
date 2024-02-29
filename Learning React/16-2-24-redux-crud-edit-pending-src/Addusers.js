import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./UserReducer";
import { useNavigate } from "react-router-dom";

let i = 4;

function Addusers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUser({ id: i++, name, email, phone }));
    navigate("/home");
  };
  return (
    <div>
      <div className="container w-50 text-start">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              type="text"
            ></input>
          </div>

          <div>
            <label>Phone</label>
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="form-control"
              type="text"
            ></input>
          </div>

          <div>
            <button className="btn btn-success my-3" type="submit">
              Add user
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addusers;
