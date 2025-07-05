import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, TableRow, Paper, Typography,Table,TableHead,TableBody,TableCell } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Box p={3}>
  <Typography variant="h4" align="center">
    Students Details
  </Typography>

  {loading ? (
    <Box display="flex" justifyContent="center" mt={4}>
      <CircularProgress />
    </Box>
  ) : (
    <Paper elevation={3} sx={{ overflowX: 'auto' }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell><strong>Sno</strong></TableCell>
            <TableCell><strong>First Name</strong></TableCell>
            <TableCell><strong>Last Name</strong></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )}
</Box>

      <Footer />
    </>
  );
};

export default UsersPage;
