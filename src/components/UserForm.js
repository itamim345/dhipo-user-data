import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useUserform from '../hooks/useUserform';
import { addUser, editUser, getUserById } from '../localStorage/localStorage';

export default function UserForm() {
    const {inputValues, handleChangeInput, setForm} = useUserform({
        fname: "",
        mname: "",
        lname: ""
    });
    const navigate = useNavigate()
    const {id} = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValues);
        id ? editUser(id, inputValues) : addUser(inputValues);
        navigate("/")
    }

    

    useEffect(() => {
        if(id){
            const user = getUserById(id);
            setForm(user);
        }
    }, [id]);
  return (
    <div className="form-container">
      <h2>{id ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={inputValues.fname}
            onChange={handleChangeInput}
            required
          />

          <label htmlFor="mname">Middle Name</label>
          <input
            type="text"
            name="mname"
            id="mname"
            value={inputValues.mname}
            onChange={handleChangeInput}
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            id="lname"
            value={inputValues.lname}
            onChange={handleChangeInput}
          />
        </div>

        <div className="contact-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={inputValues.email}
            onChange={handleChangeInput}
          />

          <label htmlFor="mobile">Mobile</label>
          <input
            type="number"
            name="mobile"
            id="mobile"
            value={inputValues.mobile}
            onChange={handleChangeInput}
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={inputValues.phone}
            onChange={handleChangeInput}
          />
        </div>

        <div className="address-container">
          <label htmlFor="add1">Address 1</label>
          <input
            type="text"
            name="add1"
            id="add1"
            value={inputValues.add1}
            onChange={handleChangeInput}
          />

          <label htmlFor="add2">Address 2</label>
          <input
            type="text"
            name="add2"
            id="add2"
            value={inputValues.add2}
            onChange={handleChangeInput}
          />
        </div>

        <div className="address-container-2">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={inputValues.city}
            onChange={handleChangeInput}
          />

          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            id="state"
            value={inputValues.state}
            onChange={handleChangeInput}
          />
        </div>
        <input type="submit" value={id ? "Edit User" : "Add User"} />
      </form>
    </div>
  );
}
