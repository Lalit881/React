import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  // console.log(users)

  const handlClick = (id) => {
    console.log(id);

    navigate("/edit/" + id);
  };
  return (
    <div>
      <div className="container">
        <h1>User Details</h1>
        <div className="my-2">
          <Link to="/create" className="btn btn-info">
            Add Users
          </Link>
        </div>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((items, i) => (
              // console.log(items.name)

              <tr key={items.id}>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>{items.phone}</td>

                <td>
                  {/* <button className='btn btn-info me-2'>View</button> */}
                  <button
                    onClick={() => {
                      handlClick(items.id);
                    }}
                    className="btn btn-success me-2"
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
