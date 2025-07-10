import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Stud from '../assets/stud.png';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Chip
} from '@mui/material';

const AddStaffPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
    dateOfJoin: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required';
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit phone number required';
    if (!formData.experience.trim() || isNaN(formData.experience)) newErrors.experience = 'Valid experience (years) required';
    if (!formData.skills.trim()) newErrors.skills = 'At least one skill is required';
    if (!formData.dateOfJoin.trim()) newErrors.dateOfJoin = 'Joining date is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const staffData = {
        ...formData,
        skills: formData.skills.split(',').map(s => s.trim()),
      };

      fetch("http://localhost:3001/staff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(staffData),
      })
        .then(res => {
          if (!res.ok) throw new Error("Failed to add staff");
          return res.json();
        })
        .then(() => {
          alert("Staff member added successfully!");
          navigate("/adminPage");
        })
        .catch(err => {
          console.error(err);
          alert("Something went wrong!");
        });
    }
  };

  return (
    <>
      <Navbar />
      <Box sx={{ minHeight: '100vh', background: '#f1f0f1', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4 }}>
        <Paper elevation={10} sx={{ padding: '40px 30px', borderRadius: '12px', maxWidth: 400, width: '100%' }}>
          <Box textAlign="center" mb={3}>
            <img src={Stud} alt="staff icon" style={{ width: 70, height: 70 }} />
            <Typography variant="h5" sx={{ mt: 2, color: '#222' }}>Add Staff Details</Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
            <TextField label="Name *" name="name" value={formData.name} onChange={(e) => handleChange(e.target.name, e.target.value)} error={!!errors.name} helperText={errors.name} size="small" />

            <TextField label="Email *" name="email" value={formData.email} onChange={(e) => handleChange(e.target.name, e.target.value)} error={!!errors.email} helperText={errors.email} size="small" />

            <TextField label="Phone Number *" name="phone" value={formData.phone} onChange={(e) => handleChange(e.target.name, e.target.value)} error={!!errors.phone} helperText={errors.phone} size="small" />

            <TextField label="Years of Experience *" name="experience" value={formData.experience} onChange={(e) => handleChange(e.target.name, e.target.value)} error={!!errors.experience} helperText={errors.experience} size="small" />

            <TextField
              label="Skills (comma separated) *"
              name="skills"
              value={formData.skills}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              error={!!errors.skills}
              helperText={errors.skills}
              size="small"
            />

            <TextField
              label="Date of Joining *"
              type="date"
              name="dateOfJoin"
              value={formData.dateOfJoin}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              InputLabelProps={{ shrink: true }}
              error={!!errors.dateOfJoin}
              helperText={errors.dateOfJoin}
              size="small"
            />

            <Button type="submit" variant="contained" color="primary" sx={{ fontWeight: 'bold', mt: 2, textTransform: 'none' }}>
              Submit Staff Details
            </Button>
          </Box>
        </Paper>
      </Box>
      <Footer />
    </>
  );
};

export default AddStaffPage;
