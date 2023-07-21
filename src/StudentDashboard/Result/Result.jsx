import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';

import Header from '../../SmartQuiz/components/Header';
import './Result.css'; // Import the stylesheet

function Result() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8020/user") // Replace with your backend API endpoint
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
    <Header/>
    <div style={{marginLeft:"10%",marginRight:"10%"}} >
    <div className="result-table-container">

      <MDBTable align="middle" className="view-result-table">
        <MDBTableHead>
          <tr>
            <th scope="col">Subject</th>
            <th scope="col">Teacher</th>
            <th scope="col">Date</th>
            <th scope="col">Total Marks</th>
            <th scope="col">Score</th>
            <th scope="col">Percentage</th>
            <th scope="col">Status</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((user, index) => {
            const totalMarks = parseInt(user.TotalMarks);
            const obtainedMarks = parseInt(user.ObtainedMarks);
            const percentage = (obtainedMarks / totalMarks) * 100;
            const status = percentage >= 50 ? 'PASS' : 'FAIL';
            const rowClass = status === 'PASS' ? 'view-result-pass-row' : 'view-result-fail-row';
            const progressBarColor = status === 'PASS' ? '#98fb98' : '#ff6961';
            
            return (
              <tr key={index} className={rowClass}>
                <td>{user.Subject}</td>
                <td>{user.Teacher}</td>
                <td>{user.Date}</td>
                <td>{totalMarks}</td>
                <td>{obtainedMarks}</td>
                <td>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${percentage}%`, backgroundColor: progressBarColor }}
                      ></div>
                  </div>
                  <span className="percentage-label">{percentage.toFixed(2)}%</span>
                </td>
                <td>{status}</td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
    </div>
          </>
  );
}

export default Result;
