import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser, getUserList } from '../localStorage/localStorage';

export default function SingleUser({ user, setUsers }) {
  const { id, fname, mname, lname,email,mobile,phone } = user;
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteUser(id);
    setUsers(getUserList());
  };
  return (
    <tr>
      <td>{`${fname} ${mname} ${lname}`}</td>
      <td>{email}</td>
      <td>{mobile}</td>
      <td>{phone}</td>
      <td className="action-buttons">
        <button onClick={() => navigate(`/view-user/${id}`)}>View</button>
        <button onClick={() => navigate(`/edit-user/${id}`)}>Edit</button>
        <button onClick={() => handleDelete()}>Delete</button>
      </td>
    </tr>
  );
}
