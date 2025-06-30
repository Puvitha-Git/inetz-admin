import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import lock from '../assets/lock.jpeg';


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
    } else if (name === 'password') {
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
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f1f0f1, #f1f0f1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: `'Segoe UI', sans-serif`,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: '40px 30px',
          borderRadius: '12px',
          maxWidth: 400,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Box sx={{ mb: 2 }}>
          <img src={lock} alt="lock icon" style={{ width: 70, height: 70 }} />
        </Box>
        <Typography variant="h5" sx={{ mb: 1, color: '#222' }}>
          Staff Login
        </Typography>
        <Typography variant="body2" sx={{ color: '#666', mb: 3 }}>
          Welcome back! Please sign in to continue.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            textAlign: 'left',
          }}
        >
          <TextField
            label={
              <>
                Email Address <span style={{ color: 'red' }}>*</span>
              </>
            }
            variant="outlined"
            fullWidth
            name="email"
            value={email}
            onChange={handleEvent}
            error={Boolean(errors.email)}
            helperText={errors.email}
            size="small"
          />

          <TextField
            label={
              <>
                Password <span style={{ color: 'red' }}>*</span>
              </>
            }
            variant="outlined"
            fullWidth
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handleEvent}
            error={Boolean(errors.password)}
            helperText={errors.password}
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <FiEye /> : <FiEyeOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              fontWeight: 'bold',
              mt: 1,
              textTransform: 'none',
            }}
          >
            Sign In
          </Button>
        </Box>

        {message && (
          <Typography
            variant="body2"
            sx={{ color: '#ff4d4f', mt: 2, fontWeight: 'bold' }}
          >
            {message}
          </Typography>
        )}
        <Typography
          variant="caption"
          sx={{ color: '#888', display: 'block', mt: 3 }}
        >
          Please enter your staff credentials to access the dashboard.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Form;