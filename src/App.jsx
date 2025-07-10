import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AddStudentPage from './pages/AddStudentPage';
import UsersPage from './pages/UsersPage';


function App() {
  return (
    
    <Routes>
      
      <Route path="/" element={<LoginPage />} />
      <Route path="/addstudent" element={<AddStudentPage />} />
      <Route path="/users" element={<UsersPage/>}/>
    
    </Routes>
  );
}

export default App;
