import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import './ViewResult.css'; // Import the stylesheet

function ViewResult() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="view-result-container ">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      
      <div className="result-table-container">
        <MDBTable align='middle' className='view-result-table'>
          <MDBTableHead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Total Marks</th>
              <th scope='col'>Obtained Marks</th>
              <th scope='col'>Percentage</th>
              <th scope='col'>Status</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data.map((user, index) => {
              const totalMarks = parseInt(user.Marks);
              const obtainedMarks = parseInt(user.ObtainMarks);
              const percentage = (obtainedMarks / totalMarks) * 100;
              const status = percentage >= 50 ? "PASS" : "FAIL";
              const rowClass = status === "PASS" ? "view-result-pass-row" : "view-result-fail-row";
              const progressBarColor = status === "PASS" ? "#98fb98" : "#ff6961";

              return (
                
                <tr key={index} className={rowClass}>
                <td>{user.Name}</td>
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
  );
}

export default ViewResult;
