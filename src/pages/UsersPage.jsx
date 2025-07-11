// pages/UsersPage.jsx
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StaffSideBar from "../components/StaffSideBar";
import UsersMainContent from "../components/UsersMainContent";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    fetch("http://localhost:3001/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <Navbar />
      </Box>

      <Box sx={{ display: "flex", flex: 1, mt: "64px" }}>
        <StaffSideBar handleLogout={handleLogout} />
        <UsersMainContent
          students={students}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          loading={loading}
        />
      </Box>

      <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default UsersPage;
