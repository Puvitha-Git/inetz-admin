import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import lock from '../assets/lock.jpeg';
import './Form.css';

const Form = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const EMAIL = 'inetz@admin.com';
  const PASSWORD = 'inetz123';

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const hasNumber = /\d/.test(password);
    return hasNumber;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    //checking email
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    //checking password
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      newErrors.password = 'Please enter a valid password';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

  
    setErrors({});
    //checking credentials 

    if (email === EMAIL && password === PASSWORD) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/add-student');
    } else {
      setMessage('Invalid email or password');
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
          <label>Email Address <span className="indicate">*</span></label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            className={errors.email ? 'input-error' : ''}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="auth-message">{errors.email}</p>}

          <label>Password <span className="indicate">*</span></label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            className={errors.password ? 'input-error' : ''}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="auth-message">{errors.password}</p>}

          <button type="submit">Sign In</button>
        </form>
        {message && <p className="auth-message">{message}</p>}
        <p className="note">Please enter your admin credentials to access the dashboard</p>
      </div>
    </div>
  );
};

export default Form;
