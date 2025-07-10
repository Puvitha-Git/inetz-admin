import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      });
  }, []);

  const filteredStudents = students.filter((student) =>
    student.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Fixed Navbar */}
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <Navbar />
      </Box>

      {/* Page Body (Sidebar + Main Content) */}
      <Box sx={{ display: "flex", flex: 1, mt: "64px" /* navbar height */ }}>
        {/* Sidebar */}
        <Box
          sx={{
            position: "fixed",
            top: "64px",
            bottom: "64px",
            width: "200px",
            backgroundColor: "#f0f2f5",
            borderRight: "1px solid #ddd",
            p: 2,
            overflowY: "auto",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#2f4fbd", mb: 2 }}
          >
            Staff Panel
          </Typography>
          <List>
            <ListItem button onClick={() => navigate("/")}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button selected>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="My Students" />
            </ListItem>
            <ListItem button onClick={() => navigate("/addstudent")}>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Student" />
            </ListItem>
          </List>
        </Box>

        {/* Main Scrollable Content */}
        <Box
          sx={{
            ml: "200px", // margin-left same as sidebar width
            flex: 1,
            overflowY: "auto",
            py: 3,
            px: 4,
            backgroundColor: "#f5f6fa",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" ,mb:3}}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 ,marginLeft: 3}}>
            Our Students
          </Typography>
         

          {/* Search Bar */}
          
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "30px",
                pl: 2,
                pr: 1,
                width: "300px",
                backgroundColor: "#fff",
                ml:35,
              }}
            >
              <SearchIcon color="action" />
              <TextField
                variant="standard"
                placeholder="Student name"
                InputProps={{ disableUnderline: true }}
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Box>
            <Button
              variant="contained"
              sx={{ borderRadius: "25px" }}
              onClick={() => navigate("/addstudent")}
            >
              + NEW
            </Button>
          </Box>

          {/* Table */}
          {loading ? (
            <Box display="flex" justifyContent="center" mt={4}>
              <CircularProgress />
            </Box>
          ) : (
            <Paper elevation={3} sx={{ overflowX: "auto", borderRadius: 3 }}>
              <Table>
                <TableHead sx={{ backgroundColor: "#f1f3f6" }}>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Register No</TableCell>
                    <TableCell>College Name</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Email Id</TableCell>
                    <TableCell>Preferred Domain</TableCell>
                    <TableCell>Duration</TableCell>
                    <TableCell>Start Date</TableCell>
                    <TableCell>End Date</TableCell>
                    <TableCell>Main Domain</TableCell>
                    <TableCell>Specific Domain</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.studentName}</TableCell>
                      <TableCell>{student.registerNo}</TableCell>
                      <TableCell>{student.collegeName}</TableCell>
                      <TableCell>{student.department}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.type}</TableCell>
                      <TableCell>{student.duration}</TableCell>
                      <TableCell>{student.startDate}</TableCell>
                      <TableCell>{student.endDate}</TableCell>
                      <TableCell>{student.domain}</TableCell>
                      <TableCell>{student.specificDomain}</TableCell>
                      <TableCell>
                        <IconButton
                        // onClick={() => navigate(`/editstudent/${student.id}`)}
                        >
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          )}
        </Box>
      </Box>

      {/* Fixed Footer */}
      <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default UsersPage;
