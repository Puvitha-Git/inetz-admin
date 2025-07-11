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
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", ml: 3 }}>
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

          <Button
            variant="contained"
            sx={{ borderRadius: "25px" }}
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
          sx={{ borderRadius: 3, overflow: "auto", maxHeight: 450, ml: 2 }}
        >
          <Box sx={{ width: "max-content" }}>
            <Table stickyHeader sx={{ minWidth: 1100 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ backgroundColor: "#f5f6fa" }}>Name</TableCell>
                  <TableCell sx={{ backgroundColor: "#f5f6fa" }}>Email</TableCell>
                  <TableCell sx={{ backgroundColor: "#f5f6fa" }}>Phone</TableCell>
                  <TableCell sx={{ backgroundColor: "#f5f6fa" }}>
                    Experience (Years)
                  </TableCell>
                  <TableCell sx={{ backgroundColor: "#f5f6fa" }}>Skills</TableCell>
                  <TableCell sx={{ backgroundColor: "#f5f6fa" }}>
                    Date of Joining
                  </TableCell>
                  <TableCell sx={{ backgroundColor: "#f5f6fa" }}>Actions</TableCell>
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
  );
};

export default AdminStaffContent;
