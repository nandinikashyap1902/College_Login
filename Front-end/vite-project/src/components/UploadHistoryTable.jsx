import React, { useEffect, useState } from 'react';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;
import UploadHistoryRow from './UploadHistoryRow';

const UploadHistoryTable = () => {
  const [studentDetails, setStudentDetails] = useState([]);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const result = await axios.get(`${apiUrl}/api/uploadhistory`);
        setStudentDetails(result.data);
      } catch (error) {
        console.error('Error fetching upload history:', error);
      }
    }
    fetchDetails();
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Student</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentDetails.length > 0 ? (
            studentDetails.map(upload => (
              <UploadHistoryRow key={upload.id} upload={upload} />
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No upload history available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UploadHistoryTable;
