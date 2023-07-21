import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { FcQuestions } from 'react-icons/fc';
import { Outlet, useNavigate } from 'react-router-dom';
import Dashboardview from '../Dashboardview';
import Sidebar from '../Sidebar';

import "./ViewQuiz.css";

function ViewQuiz() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8003/user")
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data);
      });
  }, []);

  const getOptionLabel = (index) => {
    return String.fromCharCode(97 + index) + ')';
  }

  return (


    <div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh]">
          <Dashboardview />
          <div>
            <Outlet></Outlet>
          </div>

         
          <div className="quiz-container">
          <h1 className="quiz-heading">QUESTIONS</h1>
          <div className="questions-container">
            {data.map((item, index) => (
              <div className="question-card" key={item.id}>
                <h4 style={{display:"flex" ,fontWeight: "bolder",fontSize:"25px"}}><FcQuestions size={35} className="question-icon" />{index + 1}: {item.question}</h4>
                <ul className="options-list">
                  <div className="options-container">
                    {item.options.map((option, optionIndex) => (
                      <li key={optionIndex}>{getOptionLabel(optionIndex)} {option}</li>
                    ))}
                  </div>
                </ul>
                <p><b>CORRECT ANSWER:</b> {item.correctAnswer}</p>
                <p><b>TIME:</b> {item.time}</p>
                <p><b>Marks:</b> {item.marks}</p>
              </div>
            ))}
          </div>
          <Button onClick={() => navigate("/EditQuiz")} className="edit-button" variant="primary" size="lg">
            Edit
          </Button>
        </div>
      </div>

        </div>


    
    
      
    
  );
}

export default ViewQuiz;
