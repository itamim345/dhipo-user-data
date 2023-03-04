import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteUser, getUserById } from '../localStorage/localStorage';

export default function UserView() {
    const [userdetail, setUserDetail] = useState({})
    const navigate = useNavigate()
    const {id} = useParams();
    useEffect(() => {
      setUserDetail(getUserById(id))
    }, []);

    const handleDelete = () => {
      deleteUser(id);
      navigate("/")
    };
  return (
    <div>
      <div>
        <h1 onClick={() => navigate("/")}>Home</h1>
        <h2>User Details</h2>
        <div>
          <button onClick={() => navigate(`/edit-user/${id}`)}>Edit</button>
          <button onClick={() => handleDelete()}>Delete</button>
        </div>
      </div>
      <div>
        <h2>
          Name: {userdetail.fname} {userdetail.mname} {userdetail.lname}
        </h2>
        <h2>Name: {userdetail.email}</h2>
        <h2>Name: {userdetail.phone}</h2>
        <h2>Name: {userdetail.mobile}</h2>
      </div>
    </div>
  );
}
