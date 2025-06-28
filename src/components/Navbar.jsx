import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; 
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <button className="admin-button"> Portal</button>

    </header>
  );
};

export default Navbar;
