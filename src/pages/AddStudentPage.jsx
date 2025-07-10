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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormHelperText,
} from '@mui/material';

const AddStudentPage = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    registerNo: '',
    collegeName: '',
    department: '',
    email: '',
    type: '',
    duration: '',
    domain: '',
    specificDomain: '',
    startDate: '',
    endDate: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const courseDurations = ['3 Months', '6 Months'];
  const internshipDurations = ['15 Days', '1 Month', '3 Months'];

  const courseDomains = ['Web Technology', 'Mobile Apps', 'Artificial Intelligence', 'Digital Marketing', 'Software Testing'];
  const internshipDomains = ['Web Development', 'IoT', 'AI'];

  const courseSpecificDomains = {
    'Web Technology': ['React.js', 'Angular', 'MERN Stack', 'MEAN Stack', 'PHP Full Stack'],
    'Mobile Apps': ['React Native', 'Flutter', 'Python', 'Java', 'Kotlin'],
    'Artificial Intelligence': ['AI', 'Machine Learning', 'Deep Learning', 'Data Science'],
    'Digital Marketing': ['Digital Marketing Course'],
    'Software Testing': ['Manual Testing', 'Java Selenium', 'Python Selenium']
  };

  const internshipSpecificDomains = {
    'Web Development': ['Java Full Stack', 'MERN Full Stack', 'Python Full Stack'],
    'AI': ['Artificial Intelligence', 'Data Science', 'Python'],
    'IoT': ['Embedded IoT']
  };

  const getDurationOptions = () =>
    formData.type === 'Course' ? courseDurations :
    formData.type === 'Internship' ? internshipDurations : [];

  const getDomainOptions = () =>
    formData.type === 'Course' ? courseDomains :
    formData.type === 'Internship' ? internshipDomains : [];

  const getSpecificDomains = () => {
    if (formData.type === 'Course') return courseSpecificDomains[formData.domain] || [];
    if (formData.type === 'Internship') return internshipSpecificDomains[formData.domain] || [];
    return [];
  };

  const handleChange = (name, value) => {
    let newFormData = { ...formData, [name]: value };

    if (name === 'type') {
      newFormData = { ...newFormData, duration: '', startDate: '', endDate: '', domain: '', specificDomain: '' };
    }
    if (name === 'duration') {
      newFormData = { ...newFormData, startDate: '', endDate: '', domain: '', specificDomain: '' };
    }
    if (name === 'domain') {
      newFormData = { ...newFormData, specificDomain: '' };
    }

    setFormData(newFormData);
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.studentName.trim()) newErrors.studentName = 'Student Name is required';
    if (!formData.registerNo.trim()) newErrors.registerNo = 'Register Number is required';
    if (!formData.collegeName.trim()) newErrors.collegeName = 'College Name is required';
    if (!formData.department.trim()) newErrors.department = 'Department is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required';
    if (!formData.type) newErrors.type = 'Please select Course or Internship';
    if (!formData.duration) newErrors.duration = 'Please select a duration';
    if (!formData.startDate) newErrors.startDate = 'Start Date is required';
    if (!formData.endDate) newErrors.endDate = 'End Date is required';
    if (!formData.domain) newErrors.domain = 'Please select a main domain';
    if (!formData.specificDomain) newErrors.specificDomain = 'Please select a specific domain';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // POST request to json-server
      fetch("http://localhost:3001/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
        .then(res => {
          if (!res.ok) throw new Error("Failed to add student");
          return res.json();
        })
        .then(data => {
          alert("Student added successfully!");
          navigate("/users");
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
      <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg,#f1f0f1, #f1f0f1)', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4 }}>
        <Paper elevation={10} sx={{ padding: '40px 30px', borderRadius: '12px', maxWidth: 400, width: '100%' }}>
          <Box textAlign="center" mb={3}>
            <img src={Stud} alt="student icon" style={{ width: 70, height: 70 }} />
            <Typography variant="h5" sx={{ mt: 2, color: '#222' }}>Add Student Details</Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
            <TextField label="Student Name *" name="studentName" value={formData.studentName} onChange={(e) => handleChange(e.target.name, e.target.value)} error={!!errors.studentName} helperText={errors.studentName} size="small" />
            <TextField label="Register No *" name="registerNo" value={formData.registerNo} onChange={(e) => handleChange(e.target.name, e.target.value)} error={!!errors.registerNo} helperText={errors.registerNo} size="small" />
            <TextField label="College Name *" name="collegeName" value={formData.collegeName} onChange={(e) => handleChange(e.target.name, e.target.value)} error={!!errors.collegeName} helperText={errors.collegeName} size="small" />
            <TextField label="Department *" name="department" value={formData.department} onChange={(e) => handleChange(e.target.name, e.target.value)} error={!!errors.department} helperText={errors.department} size="small" />
            <TextField label="Email Id *" name="email" value={formData.email} onChange={(e) => handleChange(e.target.name, e.target.value)} error={!!errors.email} helperText={errors.email} size="small" />

            <FormControl fullWidth size="small" error={!!errors.type}>
              <InputLabel>Preferred Domain *</InputLabel>
              <Select name="type" value={formData.type} label="Preferred Domain *" onChange={(e) => handleChange(e.target.name, e.target.value)}>
                <MenuItem value="Course">Course</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
              </Select>
              {errors.type && <FormHelperText>{errors.type}</FormHelperText>}
            </FormControl>

            {formData.type && (
              <FormControl fullWidth size="small" error={!!errors.duration}>
                <InputLabel>Duration *</InputLabel>
                <Select name="duration" value={formData.duration} label="Duration *" onChange={(e) => handleChange(e.target.name, e.target.value)}>
                  {getDurationOptions().map((d) => (
                    <MenuItem key={d} value={d}>{d}</MenuItem>
                  ))}
                </Select>
                {errors.duration && <FormHelperText>{errors.duration}</FormHelperText>}
              </FormControl>
            )}

            {formData.duration && (
              <>
                <TextField label="Start Date" type="date" name="startDate" value={formData.startDate} onChange={(e) => handleChange(e.target.name, e.target.value)} InputLabelProps={{ shrink: true }} error={!!errors.startDate} helperText={errors.startDate} size="small" fullWidth />
                <TextField label="End Date" type="date" name="endDate" value={formData.endDate} onChange={(e) => handleChange(e.target.name, e.target.value)} InputLabelProps={{ shrink: true }} error={!!errors.endDate} helperText={errors.endDate} size="small" fullWidth />
              </>
            )}

            {formData.duration && (
              <FormControl fullWidth size="small" error={!!errors.domain}>
                <InputLabel>Main Domain *</InputLabel>
                <Select name="domain" value={formData.domain} label="Main Domain *" onChange={(e) => handleChange(e.target.name, e.target.value)}>
                  {getDomainOptions().map((d) => (
                    <MenuItem key={d} value={d}>{d}</MenuItem>
                  ))}
                </Select>
                {errors.domain && <FormHelperText>{errors.domain}</FormHelperText>}
              </FormControl>
            )}

            {formData.domain && getSpecificDomains().length > 0 && (
              <FormControl fullWidth size="small" error={!!errors.specificDomain}>
                <InputLabel>Specific Domain *</InputLabel>
                <Select name="specificDomain" value={formData.specificDomain} label="Specific Domain *" onChange={(e) => handleChange(e.target.name, e.target.value)}>
                  {getSpecificDomains().map((d) => (
                    <MenuItem key={d} value={d}>{d}</MenuItem>
                  ))}
                </Select>
                {errors.specificDomain && <FormHelperText>{errors.specificDomain}</FormHelperText>}
              </FormControl>
            )}

            <Button type="submit" variant="contained" color="primary" sx={{ fontWeight: 'bold', mt: 2, textTransform: 'none' }}>
              Submit Student Details
            </Button>
          </Box>
        </Paper>
      </Box>
      <Footer />
    </>
  );
};

export default AddStudentPage;
