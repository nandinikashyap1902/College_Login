import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [resume, setResume] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'contactNumber':
        setContactNumber(value);
        break;
      default:
        break;
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files){
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('contactNumber', contactNumber);
    formData.append('resume', resume);

    try {
      const result = await axios.post(`${apiUrl}/api/Studentlogin`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }

  
    setName('');
    setEmail('');
    setContactNumber('');
    setResume('');
  };

  return (
    <div className="container mt-5">
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Number:</label>
          <input
            type="text"
            className="form-control"
            name="contactNumber"
            value={contactNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload Resume (PDF only):</label>
          <input
            type="file"
            className="form-control"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
