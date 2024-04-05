import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Signup() {
    const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', formData)
        .then(response => {
        // Handle successful response if needed
        console.log(response);
        navigate('/login')
        })
        .catch(error => {
        // Handle error if needed
        console.error('Error occurred:', error);
        });
    // Reset form fields
    setFormData({
        username: '',
        email: '',
        password: '',
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
          <h2> Sign Up </h2>
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
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
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
          <div className="d-grid gap-2 mb-3">
             <button type="submit" className="btn btn-primary">Sign Up</button>
             <Link to="/login">Already have an account? Sign in here.</Link>
           
            </div>
        </form>
     
    </div>
  );
}

export default Signup;