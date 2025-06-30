import React, { useState } from 'react';
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
  const [studentName, setStudentName] = useState('');
  const [registerNo, setRegisterNo] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [domain, setDomain] = useState('');
  const [specificDomain, setSpecificDomain] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errors, setErrors] = useState({});

  const courseDurations = ['3 Months', '6 Months'];
  const internshipDurations = ['15 Days', '1 Month', '3 Months'];

  const courseDomains = [
    'Web Technology',
    'Mobile Apps',
    'Artificial Intelligence',
    'Digital Marketing',
    'Software Testing'
  ];

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
    'IoT': ['Embedded IoT ']
  };

  const getDurationOptions = () =>
    type === 'Course' ? courseDurations : type === 'Internship' ? internshipDurations : [];

  const getDomainOptions = () =>
    type === 'Course' ? courseDomains : type === 'Internship' ? internshipDomains : [];

  const getSpecificDomains = () => {
    if (type === 'Course') return courseSpecificDomains[domain] || [];
    if (type === 'Internship') return internshipSpecificDomains[domain] || [];
    return [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!studentName.trim()) newErrors.studentName = 'Student Name is required';
    if (!registerNo.trim()) newErrors.registerNo = 'Register Number is required';
    if (!collegeName.trim()) newErrors.collegeName = 'College Name is required';
    if (!department.trim()) newErrors.department = 'Department is required';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid Email is required';
    if (!type) newErrors.type = 'Please select Course or Internship';
    if (!duration) newErrors.duration = 'Please select a duration';
    if (!startDate) newErrors.startDate = 'Start Date is required';
    if (!endDate) newErrors.endDate = 'End Date is required';
    if (!domain) newErrors.domain = 'Please select a main domain';
    if (!specificDomain) newErrors.specificDomain = 'Please select a specific domain';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Student Name:', studentName);
      console.log('Register No:', registerNo);
      console.log('College Name:', collegeName);
      console.log('Department:', department);
      console.log('Email:', email);
      console.log('Type:', type);
      console.log('Duration:', duration);
      console.log('Start Date:', startDate);
      console.log('End Date:', endDate);
      console.log('Main Domain:', domain);
      console.log('Specific Domain:', specificDomain);
      alert('Certificate ready to download!');
    }
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg,#f1f0f1, #f1f0f1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 4,
          fontFamily: `'Segoe UI', sans-serif`,
        }}
      >
        <Paper
          elevation={10}
          sx={{
            p: 4,
            width: '100%',
            maxWidth: 600,
            borderRadius: 2,
          }}
        >
          <Box textAlign="center" mb={3}>
            <img src={Stud} alt="student icon" style={{ width: 70, height: 70 }} />
            <Typography variant="h5" sx={{ mt: 2, color: '#222' }}>
              Add Student Details
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Student Name"
              name="studentName"
              value={studentName}
              onChange={(e) => {setStudentName(e.target.value)
                setErrors('');
              }
              }
              error={!!errors.studentName}
              helperText={errors.studentName}
              size="small"
            />

            <TextField
              label="Register Number"
              name="registerNo"
              value={registerNo}
              onChange={(e) => {setRegisterNo(e.target.value);
                setErrors('');
              }
              }
              error={!!errors.registerNo}
              helperText={errors.registerNo}
              size="small"
            />

            <TextField
              label="College Name"
              name="collageName"
              value={collegeName}
              onChange={(e) => {setCollegeName(e.target.value);
                setErrors('');
              }
              }
              error={!!errors.collegeName}
              helperText={errors.collegeName}
              size="small"
            />

            <TextField
              label="Department"
              name="department"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setErrors('');
              }
              }
              error={!!errors.department}
              helperText={errors.department}
              size="small"
            />

            <TextField
              label="Email"
              name="email"
              
              value={email}
              onChange={(e) => 
                {setEmail(e.target.value);
                setErrors('');
              }}
              error={!!errors.email}
              helperText={errors.email}
              size="small"
              
            />

            <FormControl fullWidth size="small" error={!!errors.type}>
              <InputLabel>Preferred Domain *</InputLabel>
              <Select
                value={type}
                label="Preferred Domain *"
                onChange={(e) => {
                  setType(e.target.value);
                  setDuration('');
                  setStartDate('');
                  setEndDate('');
                  setDomain('');
                  setSpecificDomain('');
                  if (e.target.value) setErrors((prev) => ({ ...prev, type: '' }));
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Course">Course</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
              </Select>
              {errors.type && <FormHelperText>{errors.type}</FormHelperText>}
            </FormControl>

            {type && (
              <FormControl fullWidth size="small" error={!!errors.duration}>
                <InputLabel>Duration *</InputLabel>
                <Select
                  value={duration}
                  label="Duration *"
                  onChange={(e) => {
                    setDuration(e.target.value);
                    setStartDate('');
                    setEndDate('');
                    setDomain('');
                    setSpecificDomain('');
                    if (e.target.value) setErrors((prev) => ({ ...prev, duration: '' }));
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {getDurationOptions().map((d, i) => (
                    <MenuItem key={i} value={d}>
                      {d}
                    </MenuItem>
                  ))}
                </Select>
                {errors.duration && <FormHelperText>{errors.duration}</FormHelperText>}
              </FormControl>
            )}

            {duration && (
              <>
                <TextField
                  label="Start Date"
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                    if (e.target.value) setErrors((prev) => ({ ...prev, startDate: '' }));
                  }}
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.startDate}
                  helperText={errors.startDate}
                  size="small"
                  fullWidth
                />

                <TextField
                  label="End Date"
                  type="date"
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                    if (e.target.value) setErrors((prev) => ({ ...prev, endDate: '' }));
                  }}
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.endDate}
                  helperText={errors.endDate}
                  size="small"
                  fullWidth
                />
              </>
            )}

            {duration && (
              <FormControl fullWidth size="small" error={!!errors.domain}>
                <InputLabel>Main Domain *</InputLabel>
                <Select
                  value={domain}
                  label="Main Domain *"
                  onChange={(e) => {
                    setDomain(e.target.value);
                    setSpecificDomain('');
                    if (e.target.value) setErrors((prev) => ({ ...prev, domain: '' }));
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {getDomainOptions().map((d, i) => (
                    <MenuItem key={i} value={d}>
                      {d}
                    </MenuItem>
                  ))}
                </Select>
                {errors.domain && <FormHelperText>{errors.domain}</FormHelperText>}
              </FormControl>
            )}

            {domain && getSpecificDomains().length > 0 && (
              <FormControl fullWidth size="small" error={!!errors.specificDomain}>
                <InputLabel>Specific Domain *</InputLabel>
                <Select
                  value={specificDomain}
                  label="Specific Domain *"
                  onChange={(e) => {
                    setSpecificDomain(e.target.value);
                    if (e.target.value) setErrors((prev) => ({ ...prev, specificDomain: '' }));
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {getSpecificDomains().map((d, i) => (
                    <MenuItem key={i} value={d}>
                      {d}
                    </MenuItem>
                  ))}
                </Select>
                {errors.specificDomain && <FormHelperText>{errors.specificDomain}</FormHelperText>}
              </FormControl>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ fontWeight: 'bold', mt: 2, textTransform: 'none' }}
            >
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