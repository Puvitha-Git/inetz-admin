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
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const StaffPage = () => {
  const [staff, setStaff] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    fetch("http://localhost:3001/staff")
      .then((res) => res.json())
      .then((data) => {
        setStaff(data);
        setLoading(false);
      });
  }, []);

  const filteredStaff = staff.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Fixed Navbar */}
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <Navbar />
      </Box>

      {/* Sidebar + Main */}
      <Box sx={{ display: "flex", flex: 1, mt: "64px" }}>
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
            Admin Panel
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
              <ListItemText primary="Our Staff" />
            </ListItem>
            <ListItem button onClick={() => navigate("/addstaff")}>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Staff" />
            </ListItem>
            <ListItem button onClick={() => navigate("/users")}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Our Students" />
            </ListItem>
            <ListItem button onClick={() => navigate("/addstudent")}>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Students" />
            </ListItem>
            <ListItem button onClick={() => handleLogout()}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>

        {/* Main Scrollable Content */}
        <Box
          sx={{
            ml: "200px",
            flex: 1,
            overflowY: "auto",
            py: 3,
            px: 4,
            backgroundColor: "#f5f6fa",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", ml: 3 }}>
              Our Staff
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* Search */}
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
                }}
              >
                <SearchIcon color="action" />
                <TextField
                  variant="standard"
                  placeholder="Search staff"
                  InputProps={{ disableUnderline: true }}
                  fullWidth
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Box>

              {/* Add Button */}
              <Button
                variant="contained"
                sx={{ borderRadius: "25px" }}
                onClick={() => navigate("/addstaff")}
              >
                + NEW
              </Button>
            </Box>
          </Box>

          {/* Staff Table */}
          {loading ? (
            <Box display="flex" justifyContent="center" mt={4}>
              <CircularProgress />
            </Box>
          ) : (
            <Paper
              elevation={3}
              sx={{ borderRadius: 3, overflow: "auto", maxHeight: 450, ml: 2 }}
            >
              <Box sx={{ width: "max-content" }}>
                <Table stickyHeader sx={{ minWidth: 1100 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ minWidth: 150, backgroundColor: "#f5f6fa" }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        sx={{ minWidth: 200, backgroundColor: "#f5f6fa" }}
                      >
                        Email
                      </TableCell>
                      <TableCell
                        sx={{ minWidth: 130, backgroundColor: "#f5f6fa" }}
                      >
                        Phone
                      </TableCell>
                      <TableCell
                        sx={{ minWidth: 150, backgroundColor: "#f5f6fa" }}
                      >
                        Experience (Years)
                      </TableCell>
                      <TableCell
                        sx={{ minWidth: 250, backgroundColor: "#f5f6fa" }}
                      >
                        Skills
                      </TableCell>
                      <TableCell
                        sx={{ minWidth: 150, backgroundColor: "#f5f6fa" }}
                      >
                        Date of Joining
                      </TableCell>
                      <TableCell
                        sx={{ minWidth: 100, backgroundColor: "#f5f6fa" }}
                      >
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {filteredStaff.map((s) => (
                      <TableRow key={s.id}>
                        <TableCell>{s.name}</TableCell>
                        <TableCell>{s.email}</TableCell>
                        <TableCell>{s.phone}</TableCell>
                        <TableCell>{s.experience}</TableCell>
                        <TableCell>{s.skills.join(", ")}</TableCell>
                        <TableCell>{s.dateOfJoin}</TableCell>
                        <TableCell>
                          <IconButton
                          // onClick={() => navigate(`/editstaff/${s.id}`)}
                          >
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Paper>
          )}
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default StaffPage;
