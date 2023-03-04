import React from 'react';
import Navbar from './Navbar';

export default function UsersList() {
  return (
    <div>
    <Navbar/>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
        </thead>
      </table>
    </div>
  );
}
