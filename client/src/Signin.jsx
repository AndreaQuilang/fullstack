import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    axios.post('http://localhost:3001/login', formData)
        .then(response => {
        // Handle successful response if needed
        console.log(response);
        if(response.data === "Success"){
            navigate('/home')
        }            
        })
        .catch(error => {
        // Handle error if needed
        console.error('Error occurred:', error);
        });
    console.log(formData);
    // Reset form fields
    setFormData({
      username: '',
      password: ''
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
        <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Log In</button>
        </form>
    </div>
  );
}

export default Signin;