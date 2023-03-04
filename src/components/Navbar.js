import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
  return (
    <div>
      <nav>
        <img
          src="https://lh3.googleusercontent.com/a-/ACB-R5QSSQdO8vQF7KYax_52Z1cN6DcE7WGXe-IONXRb=s80-p"
          alt="logo"
        />
        <span onClick={() => navigate("/create-user")}>+ Add User</span>
      </nav>
    </div>
  );
}
