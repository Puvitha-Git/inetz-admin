import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import lock from '../assets/lock.jpeg';
import './Form.css';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Form = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
  const handleEvent = (e) => {
  const { name, value } = e.target;
  if (name === 'email') {
    setEmail(value);
    setMessage('');
  } 
  else if (name === 'password') {
    setPassword(value);
    setMessage('');
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email';
    }

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
        <h2>Staff Login</h2>
        <p className="subtitle">Welcome back! Please sign in to continue.</p>
        <form onSubmit={handleSubmit}>
          <label>Email Address <span className="indicate">*</span></label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={email}
            className={errors.email ? 'input-error' : ''}
            onChange={handleEvent}
          />
          {errors.email && <p className="auth-message">{errors.email}</p>}

          <label>Password <span className="indicate">*</span></label>
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              value={password}
              className={errors.password ? 'input-error' : ''}
              onChange={handleEvent}
              style={{ flex: 1, paddingRight: '40px' }}
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '10px',
                cursor: 'pointer',
                fontSize: '18px',
                color: '#555'
              }}
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </span>
          </div>
          {errors.password && <p className="auth-message">{errors.password}</p>}

          <button type="submit">Sign In</button>
        </form>

        {message && <p className="auth-message">{message}</p>}
        <p className="note">Please enter your staff credentials to access the dashboard</p>
      </div>
    </div>
  );
};

export default Form;
