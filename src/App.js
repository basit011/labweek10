import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { toHaveFormValues } from '@testing-library/jest-dom/matchers';

function App() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    address: '',
    suite: '',
    city: '',
    province: '',
    postalCode: '',
    terms_condition: false
  })

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  }

  const handleCheckboxChange = (e) => {
    setValues({...values, [e.target.name]: e.target.checked })
  }

  const RestFun =() => {
    setValues({name: '', email: '', address: '', suite: '', city: '', province: '',
       postalCode: '', terms_condition: '',})
      
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValues(values); 
    console.log(values)
  }

  const [submittedValues, setSubmittedValues] = useState(null);

  return (
    <div className="container" >
      <h1> Data Entry Form </h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder='Full Name' required 
        onChange={(e) => handleChanges(e) } value={values.name} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder='Enter Email' required 
        onChange={(e) => handleChanges(e) } value={values.email} />

        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" placeholder='123 Main Street'
        onChange={(e) => handleChanges(e) } value={values.address} />

        <label htmlFor="suite">Suite</label>
        <input type="text" id="suite" name="suite" placeholder='Apartment studio, or floor' 
        onChange={(e) => handleChanges(e) } value={values.suite} />

        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city" placeholder='Toronto' 
        onChange={(e) => handleChanges(e) } value={values.city} />

        <label htmlFor="province">Province</label> 
        <select name="province" id="province" onChange={(e) => handleChanges(e)} value={values.province} >
          <option value="">Select Province</option>
          <option value="Alberta">Alberta</option>
          <option value="British Columbia ">British Columbia</option>
          <option value="Manitoba ">Manitoba</option>
          <option value="New Brunswick">New Brunswick</option>
          <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
          <option value="Nova Scotia">Nova Scotia</option>
          <option value="Prince Edward Island">Prince Edward Island</option>
          <option value="Quebec">Quebec</option>
          <option value="Saskatchewan">Saskatchewan</option>
          <option value="Northwest Territories">Northwest Territories</option>
          <option value="Ontario">Ontario</option>
          <option value="Nunavut">Nunavut</option>
          <option value="Yukon">Yukon</option>
        </select>

        <label htmlFor="postalCode">Postal Code</label>
        <input type="text" id="postalCode" name="postalCode" placeholder='Postal Code' required 
        onChange={(e) => handleChanges(e)} value={values.postalCode}/>

        <label htmlFor="terms_condition ">Agree terms & condition?</label>
        <input type="checkbox" id="terms_condition" name="terms_condition" required 
        onChange={(e) => handleCheckboxChange(e) } checked={values.terms_condition}/>


        <button type="reset" onClick={RestFun}>Reset</button>
        <button type="submit">Submit</button>
      </form>
      {submittedValues && (
        <div className="submitted-results">
          <h2>Submitted Information</h2>
          <p><strong>Email:</strong> {submittedValues.email}</p>
          <p><strong>Full Name:</strong> {submittedValues.name}</p>
          <p><strong>Address:</strong> {submittedValues.address}</p>
          <p><strong>Suite:</strong> {submittedValues.suite}</p>
          <p><strong>City:</strong> {submittedValues.city}</p>
          <p><strong>Province:</strong> {submittedValues.province}</p>
          <p><strong>Postal Code:</strong> {submittedValues.postalCode}</p>
         </div>
      )}
    </div>
  );
}

export default App;

