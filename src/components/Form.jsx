import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import lock from '../assets/lock.jpeg';
import './Form.css';

const Form = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const EMAIL = 'inetz@admin';
  const PASSWORD = 'inetz123';

  const handleSubmit = (e) => {
    e.preventDefault();
      
    if (email === EMAIL && password === PASSWORD) {
      navigate('/add-student');
    } else {
      setMessage('Invalid email or password ');
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <div className="form-icon">
          <img src={lock} alt="lock icon" className="lock" />
        </div>
        <h2>Admin Login</h2>
        <p className="subtitle">Welcome back! Please sign in to continue.</p>
        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign In</button>
        </form>
        {message && <p className="auth-message">{message}</p>}
        <p className="note">Please enter your admin credentials to access the dashboard</p>
      </div>
    </div>
  );
};

export default Form;
