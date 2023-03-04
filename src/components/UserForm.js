import React from 'react';
import useUserform from '../hooks/useUserform';

export default function UserForm() {
    const {inputValues, handleChangeInput} = useUserform();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValues);
    }
  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" id="fname" value={inputValues.name} onChange={handleChangeInput}/>

          <label htmlFor="mname">First Name</label>
          <input type="text" name="mname" id="mname" value={inputValues.mname} onChange={handleChangeInput}/>

          <label htmlFor="lname">First Name</label>
          <input type="text" name="lname" id="lname" value={inputValues.lname} onChange={handleChangeInput}/>
        </div>

        {/* <div className="contact">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="mobile">Mobile</label>
          <input type="number" name="mobile" id="mobile" />

          <label htmlFor="phone">Phone</label>
          <input type="number" name="phone" id="phone" />
        </div> */}

        {/* <div className="address">
          <label htmlFor="add1">Address 1</label>
          <input type="text" name="add1" id="add1" />

          <label htmlFor="add2">Address 2</label>
          <input type="text" name="add2" id="add2" />

          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" />

          <label htmlFor="state">State</label>
          <input type="text" name="state" id="state" />
        </div> */}
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
}
