import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Stud from '../assets/stud.png';

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
      console.log('Main Domain:', domain);
      console.log('Specific Domain:', specificDomain);
      alert('Certificate ready to download!');
      
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <div className="form-box">
          <div className="form-icon">
            <img src={Stud} alt="student icon" className="lock" />
          </div>
          <h2>Add Student Details</h2>
          <form onSubmit={handleSubmit}>
            <label>Student Name <span className="indicate">*</span></label>
            <input
              type="text"
              placeholder="Enter name"
              value={studentName}
              onChange={(e) => {
                setStudentName(e.target.value);
                if (e.target.value.trim()) setErrors(prev => ({ ...prev, studentName: '' }));
              }}
            />
            {errors.studentName && <p className="error">{errors.studentName}</p>}

            <label>Register Number <span className="indicate">*</span></label>
            <input
              type="text"
              placeholder="Enter register number"
              value={registerNo}
              onChange={(e) => {
                setRegisterNo(e.target.value);
                if (e.target.value.trim()) setErrors(prev => ({ ...prev, registerNo: '' }));
              }}
            />
            {errors.registerNo && <p className="error">{errors.registerNo}</p>}

            <label>College Name <span className="indicate">*</span></label>
            <input
              type="text"
              placeholder="Enter college name"
              value={collegeName}
              onChange={(e) => {
                setCollegeName(e.target.value);
                if (e.target.value.trim()) setErrors(prev => ({ ...prev, collegeName: '' }));
              }}
            />
            {errors.collegeName && <p className="error">{errors.collegeName}</p>}

            <label>Department <span className="indicate">*</span></label>
            <input
              type="text"
              placeholder="Enter department"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                if (e.target.value.trim()) setErrors(prev => ({ ...prev, department: '' }));
              }}
            />
            {errors.department && <p className="error">{errors.department}</p>}

            <label>Email <span className="indicate">*</span></label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (/\S+@\S+\.\S+/.test(e.target.value)) setErrors(prev => ({ ...prev, email: '' }));
              }}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label>Preferred Domain <span className="indicate">*</span></label>
            <select
              value={type}
              onChange={(e) => {
                const val = e.target.value;
                setType(val);
                setDuration('');
                setDomain('');
                setSpecificDomain('');
                if (val) setErrors(prev => ({ ...prev, type: '' }));
              }}
            >
              <option value="" disabled hidden>Course or Internship</option>
              <option value="Course">Course</option>
              <option value="Internship">Internship</option>
            </select>
            {errors.type && <p className="error">{errors.type}</p>}

            {type && (
              <>
                <label>Duration <span className="indicate">*</span></label>
                <select
                  value={duration}
                  onChange={(e) => {
                    const val = e.target.value;
                    setDuration(val);
                    setDomain('');
                    setSpecificDomain('');
                    if (val) setErrors(prev => ({ ...prev, duration: '' }));
                  }}
                >
                  <option value="" disabled hidden>Select Duration</option>
                  {getDurationOptions().map((d, i) => (
                    <option key={i} value={d}>{d}</option>
                  ))}
                </select>
                {errors.duration && <p className="error">{errors.duration}</p>}
              </>
            )}

            {duration && (
              <>
                <label>Main Domain <span className="indicate">*</span></label>
                <select
                  value={domain}
                  onChange={(e) => {
                    const val = e.target.value;
                    setDomain(val);
                    setSpecificDomain('');
                    if (val) setErrors(prev => ({ ...prev, domain: '' }));
                  }}
                >
                  <option value="" disabled hidden>Select Domain</option>
                  {getDomainOptions().map((d, i) => (
                    <option key={i} value={d}>{d}</option>
                  ))}
                </select>
                {errors.domain && <p className="error">{errors.domain}</p>}
              </>
            )}

            {domain && getSpecificDomains().length > 0 && (
              <>
                <label>Specific Domain <span className="indicate">*</span></label>
                <select
                  value={specificDomain}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSpecificDomain(val);
                    if (val) setErrors(prev => ({ ...prev, specificDomain: '' }));
                  }}
                >
                  <option value="" disabled hidden>Select Specific Domain</option>
                  {getSpecificDomains().map((d, i) => (
                    <option key={i} value={d}>{d}</option>
                  ))}
                </select>
                {errors.specificDomain && <p className="error">{errors.specificDomain}</p>}
              </>
            )}

            <button type="submit">Download Certificate</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddStudentPage;
