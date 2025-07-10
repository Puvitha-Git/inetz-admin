import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AddStudentPage from './pages/AddStudentPage';
import UsersPage from './pages/UsersPage';
import AdminPage from './pages/AdminPage';
import AddStaffPage from './pages/AddStaffPage';

function App() {
  return (
    
    <Routes>
      
      <Route path="/" element={<LoginPage />} />
      <Route path="/addstudent" element={<AddStudentPage />} />
      <Route path="/users" element={<UsersPage/>}/>
      <Route path= "/adminPage" element={<AdminPage/>}/>
      <Route path="/addstaff" element={<AddStaffPage />} />

    </Routes>
  );
}

export default App;
