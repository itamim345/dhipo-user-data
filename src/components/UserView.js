import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUser, getUserById } from "../localStorage/localStorage";

export default function UserView() {
  const [userdetail, setUserDetail] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setUserDetail(getUserById(id));
  }, []);

  const handleDelete = () => {
    deleteUser(id);
    navigate("/");
  };
  return (
    <div>
      <div className="user-header">
        <img
          onClick={() => navigate("/")}
          src="https://lh3.googleusercontent.com/a-/ACB-R5QSSQdO8vQF7KYax_52Z1cN6DcE7WGXe-IONXRb=s80-p"
          alt="logo"
        />
        <h2>User Details</h2>
        <div className="user-buttons">
          <button onClick={() => navigate(`/edit-user/${id}`)}>Edit</button>
          <button onClick={() => handleDelete()}>Delete</button>
        </div>
      </div>

      <div className="user-main">
        <div className="personal-info">
          <h3>Personal Info</h3>
          <hr />
          <p>
            <strong>Name:</strong>
            {` ${userdetail.fname} ${userdetail.mname} ${userdetail.lname}`}
          </p>
          <p>
            <strong>Email: </strong>
            {userdetail.email}
          </p>
          <p>
            <strong>Phone: </strong>
            {userdetail.phone}
          </p>
          <p>
            <strong>Mobile: </strong>
            {userdetail.mobile}
          </p>
        </div>
        <div className="address-info">
          <h3>Address Info</h3>
          <hr />
          <p>
            <strong>Address 1: </strong>
            {userdetail.add1}
          </p>
          <p>
            <strong>Address 2: </strong>
            {userdetail.add2}
          </p>
          <p>
            <strong>City: </strong>
            {userdetail.city}
          </p>
          <p>
            <strong>State: </strong>
            {userdetail.state}
          </p>
          <p>
            <strong>Country: </strong>
            {userdetail.country}
          </p>
        </div>
      </div>
    </div>
  );
}
