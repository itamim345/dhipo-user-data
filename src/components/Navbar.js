import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
  return (
    <div>
      <nav>
        <h3>Dhipo</h3>
        <h3 onClick={() => navigate("/create-user")}>+</h3>
      </nav>
    </div>
  );
}
