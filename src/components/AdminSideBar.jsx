
import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const AdminSideBar = ({ handleLogout }) => {
  const navigate = useNavigate();




  return (
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
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );
};

export default AdminSideBar;
