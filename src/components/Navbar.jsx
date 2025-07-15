import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import logo from '../assets/logo.png';

const Logo = styled('img')(({ theme }) => ({
  width: 80,
  height: 50,
  marginLeft: 40,
  paddingTop: 0,
  [theme.breakpoints.down('sm')]: {
    width: 60,
    height: 40,
  },
}));

const PortalButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgb(251, 136, 4)',
  color: '#fff',
  marginRight: 30,
  marginTop: -5,
  borderRadius: 12,
  fontWeight: 600,
  fontSize: 16,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#d24900d0',
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: 10,
    fontSize: 14,
    padding: '6px 12px',
  },
}));

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={4}
      sx={{
        background: 'linear-gradient(90deg, #fff)',
        color: '#000',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        fontFamily: `'Segoe UI', sans-serif`,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <Logo src={logo} alt="Logo" />
        </Box>
        <PortalButton variant="contained">Portal</PortalButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
