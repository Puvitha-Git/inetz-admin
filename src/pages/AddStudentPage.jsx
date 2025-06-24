import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Stud from '../assets/stud.png';


const AddStudentPage = () => {
    
  const [studentName, setStudentName] = useState('');
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [domain, setDomain] = useState('');
  const [specificDomain, setSpecificDomain] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Name:', studentName);
    console.log('Type:', type);
    console.log('Duration:', duration);
    console.log('Main Domain:', domain);
    console.log('Specific Domain:', specificDomain);
  };

  const courseDurations = ['3 Months', '6 Months', '1 Year'];
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
    'Web Development': ['Java Internship', 'MERN Stack Internship', 'Python Internship'],
    'AI': ['Artificial Intelligence Internship'],
    'IoT': ['Embedded IoT Internship']
  };

  const getDurationOptions = () => {
    if (type === 'Course') return courseDurations;
    if (type === 'Internship') return internshipDurations;
    return [];
  };

  const getDomainOptions = () => {
    if (type === 'Course') return courseDomains;
    if (type === 'Internship') return internshipDomains;
    return [];
  };

  const getSpecificDomains = () => {
    if (type === 'Course') return courseSpecificDomains[domain] || [];
    if (type === 'Internship') return internshipSpecificDomains[domain] || [];
    return [];
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <div className="form-box">
            <div className="form-icon">
                <img src={Stud} alt="lock icon" className="lock" />
            </div>
          <h2>Add Student Details</h2>
          <form onSubmit={handleSubmit}>
            <label>Student Name *</label>
            <input
              type="text"
              placeholder="Enter name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />

            <label>Interested in *</label>
            <select
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                setDuration('');
                setDomain('');
                setSpecificDomain('');
              }}
              required
            >
              <option value="" disabled hidden>Course or Internship</option>
              <option value="Course">Course</option>
              <option value="Internship">Internship</option>
            </select>

            {type && (
              <>
                <label>Duration *</label>
                <select
                  value={duration}
                  onChange={(e) => {
                    setDuration(e.target.value);
                    setDomain('');
                    setSpecificDomain('');
                  }}
                  required
                >
                  <option value="" disabled hidden>Select Duration</option>
                  {getDurationOptions().map((d, i) => (
                    <option key={i} value={d}>{d}</option>
                  ))}
                </select>
              </>
            )}

            {duration && (
              <>
                <label>Main Domain *</label>
                <select
                  value={domain}
                  onChange={(e) => {
                    setDomain(e.target.value);
                    setSpecificDomain('');
                  }}
                  required
                >
                  <option value="" disabled hidden>Select Domain</option>
                  {getDomainOptions().map((d, i) => (
                    <option key={i} value={d}>{d}</option>
                  ))}
                </select>
              </>
            )}

            {domain && getSpecificDomains().length > 0 && (
              <>
                <label>Specific Domain *</label>
                <select
                  value={specificDomain}
                  onChange={(e) => setSpecificDomain(e.target.value)}
                  required
                >
                  <option value="" disabled hidden>Select Specific Domain</option>
                  {getSpecificDomains().map((d, i) => (
                    <option key={i} value={d}>{d}</option>
                  ))}
                </select>
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
