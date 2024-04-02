
import axios from 'axios';
import React from 'react';
const apiUrl = import.meta.env.VITE_API_URL;
const UploadHistoryRow = ({ upload }) => {
  const { student, date, time, resumeUrl } = upload;

  const handleView = async() => {
   const result= await axios.get(`${apiUrl}/api/view-resume/:resumeUrl`)
  };

  const handleDownload = async(r) => {
    console.log(r);
    await axios.get(`${apiUrl}/api/download-resume/${resumeUrl}`)
  };

  return (
    <tr>
      <td>{student}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>
        <button onClick={handleView}>View</button>
        <button onClick={()=>handleDownload(resumeUrl)}>Download</button>
      </td>
    </tr>
  );
};

export default UploadHistoryRow;
