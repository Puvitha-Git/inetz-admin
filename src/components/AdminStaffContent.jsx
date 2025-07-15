// components/AdminStaffContent.jsx
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const AdminStaffContent = ({ staff, searchTerm, setSearchTerm, loading }) => {
  const navigate = useNavigate();

  const filteredStaff = staff.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        ml: "200px",
        flex: 1,
        overflowY: "auto",
        py: 3,
        px: 4,
        backgroundColor: "#f5f6fa",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            ml: 3,
            color: "#2c3e50",
            textShadow: "1px 1px #e0e0e0",
          }}
        >
          Our Staff
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
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
              sx={{ ml: 1 }}
            />
          </Box>

          <Button
            variant="contained"
            sx={{
              borderRadius: "25px",
              backgroundColor: "#283244",
              textTransform: "none",
              fontWeight: "bold",
              px: 3,
              boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
              "&:hover": {
                backgroundColor: "#1f2733",
              },
            }}
            onClick={() => navigate("/addstaff")}
          >
            + NEW
          </Button>
        </Box>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Paper
          elevation={3}
          sx={{
            borderRadius: 3,
            overflow: "auto",
            maxHeight: 450,
            ml: 2,
            backgroundColor: "#ffffff",
            boxShadow: "0 3px 10px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Box sx={{ width: "max-content" }}>
            <Table stickyHeader sx={{ minWidth: 1100 }}>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      backgroundColor: "#f0f2f5",
                      fontWeight: "bold",
                      fontSize: "0.95rem",
                      color: "#37474f",
                    }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#f0f2f5",
                      fontWeight: "bold",
                      fontSize: "0.95rem",
                      color: "#37474f",
                    }}
                  >
                    Email
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#f0f2f5",
                      fontWeight: "bold",
                      fontSize: "0.95rem",
                      color: "#37474f",
                    }}
                  >
                    Phone
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#f0f2f5",
                      fontWeight: "bold",
                      fontSize: "0.95rem",
                      color: "#37474f",
                    }}
                  >
                    Experience (Years)
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#f0f2f5",
                      fontWeight: "bold",
                      fontSize: "0.95rem",
                      color: "#37474f",
                    }}
                  >
                    Skills
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#f0f2f5",
                      fontWeight: "bold",
                      fontSize: "0.95rem",
                      color: "#37474f",
                    }}
                  >
                    Date of Joining
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#f0f2f5",
                      fontWeight: "bold",
                      fontSize: "0.95rem",
                      color: "#37474f",
                    }}
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredStaff.map((s) => (
                  <TableRow
                    key={s.id}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#f9fafc",
                        cursor: "pointer",
                        transition: "0.2s ease-in-out",
                      },
                    }}
                  >
                    <TableCell>{s.name}</TableCell>
                    <TableCell>{s.email}</TableCell>
                    <TableCell>{s.phone}</TableCell>
                    <TableCell>{s.experience}</TableCell>
                    <TableCell>{s.skills.join(", ")}</TableCell>
                    <TableCell>{s.dateOfJoin}</TableCell>
                    <TableCell>
                      <IconButton
                        sx={{
                          color: "#1976d2",
                          "&:hover": {
                            backgroundColor: "#e3f2fd",
                          },
                        }}
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
  );
};

export default AdminStaffContent;
