// components/StaffSideBar.jsx
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

const StaffSideBar = ({ handleLogout }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "fixed",
        top: "64px",
        bottom: "64px",
        width: "200px",
        backgroundColor: "#fff",
        borderRight: "1px solid #e0e0e0",
        p: 2,
        overflowY: "auto",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: "#FB8804",
          mb: 3,
          textAlign: "center",
          fontSize: "1.4rem",
        }}
      >
        Staff Panel
      </Typography>

      <List>
        <ListItem
          button
          onClick={() => navigate("/")}
          sx={{
            borderRadius: "10px",
            mb: 1,
            transition: "all 0.3s",
            "&:hover": {
              backgroundColor: "rgba(251, 136, 4, 0.1)",
              transform: "scale(1.02)",
            },
          }}
        >
          <ListItemIcon sx={{ color: "#FB8804", minWidth: "36px" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            primaryTypographyProps={{ fontSize: "1rem", fontWeight: 500 }}
          />
        </ListItem>

        <ListItem
          button
          selected
          sx={{
            borderRadius: "10px",
            mb: 1,
            backgroundColor: "rgba(251, 136, 4, 0.15)",
            "&:hover": {
              backgroundColor: "rgba(251, 136, 4, 0.25)",
            },
          }}
        >
          <ListItemIcon sx={{ color: "#FB8804", minWidth: "36px" }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText
            primary="My Students"
            primaryTypographyProps={{ fontSize: "1rem", fontWeight: 500 }}
          />
        </ListItem>

        <ListItem
          button
          onClick={() => navigate("/addstudent")}
          sx={{
            borderRadius: "10px",
            mb: 1,
            transition: "all 0.3s",
            "&:hover": {
              backgroundColor: "rgba(251, 136, 4, 0.1)",
              transform: "scale(1.02)",
            },
          }}
        >
          <ListItemIcon sx={{ color: "#FB8804", minWidth: "36px" }}>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText
            primary="Add Student"
            primaryTypographyProps={{ fontSize: "1rem", fontWeight: 500 }}
          />
        </ListItem>

        <ListItem
          button
          onClick={handleLogout}
          sx={{
            mt: 3,
            borderRadius: "10px",
            backgroundColor: "#ffebee",
            "&:hover": {
              backgroundColor: "#ffcdd2",
            },
          }}
        >
          <ListItemIcon sx={{ color: "#d32f2f", minWidth: "36px" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              fontSize: "1rem",
              fontWeight: 500,
              color: "#d32f2f",
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default StaffSideBar;
