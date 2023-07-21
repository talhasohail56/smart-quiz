import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import './StudentTest.css';

function StudentTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8003/user')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestions(data);
        setTimeRemaining(parseInt(data[currentQuestion]?.time) * 60); // Convert time to seconds
      });
  }, []);

  useEffect(() => {
    if (timeRemaining > 0 && currentQuestion < questions.length) {
      const timer = setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && currentQuestion < questions.length) {
      changeQuestion();
    }
  }, [timeRemaining, currentQuestion, questions.length]);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(null);
      setTimeRemaining(parseInt(questions[currentQuestion + 1]?.time) * 60); // Convert time to seconds for the next question
    } else {
      setShowResult(true);
      postUserAnswers(); // Call the function to post user's answers when all questions are answered
    }
  };

  const updateScore = () => {
    if (questions[currentQuestion].correctAnswer === questions[currentQuestion].options[userAnswers[currentQuestion]]) {
      setScore(score + parseInt(questions[currentQuestion].marks));
    }
  };

  const formatTime = () => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleOptionClick = (optionIndex) => {
    if (timeRemaining > 0) {
      setClickedOption(optionIndex);
      setUserAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[currentQuestion] = optionIndex;
        return updatedAnswers;
      });
    }
  };

  const postUserAnswers = () => {
    const userAnswerData = questions.map((q, index) => {
      return {
        id: q.id,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        givenAnswer: q.options[userAnswers[index]],
        marks: q.marks,
        time: q.time,
      };
    });

    fetch('http://localhost:8005/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userAnswerData }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="quiz-app-body">
      <div style={{ display: 'flex' }} className="test">
        {questions.length > 0 && !showResult ? (
          <>
            <div className="question-info">
              <div className="marks-info">
                <h1 style={{ fontFamily: 'sans-serif', fontWeight: 'bold', marginLeft: '250px', marginTop: '20px' }}>
                  MARKS: {questions[currentQuestion].marks}
                </h1>
              </div>
            </div>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">{questions[currentQuestion].question}</span>
            </div>
            <div className="option-container">
              {questions[currentQuestion].options.map((option, i) => (
                <button
                  className={`option-btn ${clickedOption === i ? 'checked' : null}`}
                  key={i}
                  onClick={() => handleOptionClick(i)}
                  disabled={timeRemaining <= 0}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="time-info">Time Remaining: {formatTime()}</div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <input
                type="button"
                value="Next"
                id="next-button"
                onClick={changeQuestion}
                disabled={timeRemaining > 0 && clickedOption === null}
              />
            </div>
          </>
        ) : (
          <>
          <h1 style={{marginTop:'5%',fontSize:"2rem"}}>Result</h1>
          <div className="result">
            
            <MDBTable hover responsive="sm">
              <MDBTableHead>
                <tr >
                  <th>Question</th>
                  <th>Correct Answer</th>
                  <th>Given Answer</th>
                  <th>Marks</th>
                  <th>Time</th>
                  <th>Result</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {questions.map((q, index) => (
                  <tr key={index}>
                    <td>{q.question}</td>
                    <td>{q.correctAnswer}</td>
                    <td>{q.options[userAnswers[index]]}</td>
                    <td>{q.marks}</td>
                    <td>{q.time}</td>
                    <td>{q.options[userAnswers[index]] === q.correctAnswer ? 'Pass' : 'Fail'}</td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
            <p className="total-score">
              Total Score: {score} out of {questions.length}
            </p>
       
          </div>
          </> )}
      </div>
    </div>
   
  );
 
}

export default StudentTest;
