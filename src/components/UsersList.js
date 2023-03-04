import React, { useEffect, useState } from 'react';
import { getUserList } from '../localStorage/localStorage';
import Navbar from './Navbar';
import SingleUser from './SingleUser';

export default function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      setUsers(getUserList())
    }, []);
  return (
    <div>
      <Navbar />
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <SingleUser user={user} key={user.id} setUsers={setUsers}/>
            ))}
          </tbody>
        </table>
      ) : (
        <h3>No Users</h3>
      )}
    </div>
  );
}
