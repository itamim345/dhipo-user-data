import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser, getUserList } from '../localStorage/localStorage';

export default function SingleUser({ user, setUsers }) {
  const { id, fname, mname, lname } = user;
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteUser(id);
    setUsers(getUserList());
  };
  return (
    <tr>
      <td>{fname}</td>
      <td>{mname}</td>
      <td>{lname}</td>
      <td>
        <button>View</button>
        <button onClick={() => navigate(`/edit-user/${id}`)}>Edit</button>
        <button onClick={() => handleDelete()}>Delete</button>
      </td>
    </tr>
  );
}
