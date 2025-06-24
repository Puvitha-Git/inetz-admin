import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AddStudentPage from './pages/AddStudentPage';

function App() {
  return (
    
    <Routes>
      
      <Route path="/" element={<LoginPage />} />
      <Route path="/add-student" element={<AddStudentPage />} />
      
    </Routes>
  );
}

export default App;
