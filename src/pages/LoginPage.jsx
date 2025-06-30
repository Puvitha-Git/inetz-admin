import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Box from '@mui/material/Box';

const LoginPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Form />
      </Box>
      <Footer />
    </Box>
  );
};

export default LoginPage;