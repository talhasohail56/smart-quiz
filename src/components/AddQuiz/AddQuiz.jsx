
import Sidebar from '../Sidebar';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
const AddQuiz = () => {
    const [questions, setQuestions] = useState([
        { question: '', options: ['', '', '', ''], correctAnswer: '', time: '1', marks: '1' }
      ]);
    
      const [errorMessages, setErrorMessages] = useState([]);
    
      const handleQuestionChange = (index, event) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].question = event.target.value;
        setQuestions(updatedQuestions);
      };
    
      const handleOptionChange = (questionIndex, optionIndex, event) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options[optionIndex] = event.target.value;
        setQuestions(updatedQuestions);
      };
    
      const handleCorrectAnswerChange = (index, event) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].correctAnswer = event.target.value;
        setQuestions(updatedQuestions);
      };
    
      const handleTimeChange = (index, event) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].time = event.target.value;
        setQuestions(updatedQuestions);
      };
    
      const handleMarksChange = (index, event) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].marks = event.target.value;
        setQuestions(updatedQuestions);
      };
    
      const addQuestion = () => {
        const updatedQuestions = [
          ...questions,
          { question: '', options: ['', '', '', ''], correctAnswer: '', time: '1', marks: '1' }
        ];
        setQuestions(updatedQuestions);
      };
    
      const deleteQuestion = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(index, 1);
        setQuestions(updatedQuestions);
      };
    
      const handleSubmit = () => {
        const errorMessages = [];
    
        questions.forEach((question, index) => {
          if (question.question.trim() === '') {
            errorMessages.push({ field: `question_${index}`, message: 'Question is required' });
          }
    
          question.options.forEach((option, optionIndex) => {
            if (option.trim() === '') {
              errorMessages.push({
                field: `option_${index}_${optionIndex}`,
                message: `Option ${String.fromCharCode(65 + optionIndex)} is required`
              });
            }
          });
    
          if (question.correctAnswer.trim() === '') {
            errorMessages.push({ field: `correctAnswer_${index}`, message: 'Correct Answer is required' });
          }
    
          if (question.time.trim() === '') {
            errorMessages.push({ field: `time_${index}`, message: 'Time is required' });
          }
    
          if (question.marks.trim() === '') {
            errorMessages.push({ field: `marks_${index}`, message: 'Marks is required' });
          }
        });
    
        setErrorMessages(errorMessages);
    
        if (errorMessages.length === 0) {
          questions.forEach((question, index) => {
            fetch('http://localhost:8001/user', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(question),
            })
              .then((response) => {
                if (response.ok) {
                  console.log(`Question ${index + 1} added successfully`);
                } else {
                  console.error(`Failed to add Question ${index + 1}`);
                }
              })
              .catch((error) => {
                console.error(`Failed to add Question ${index + 1}:`, error);
              });
          });
        }
      };
  return (
    <div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh]">
        
        <MDBContainer>
        <MDBRow className="justify-content-center mt-4">
          <MDBCol md="8">
            <MDBCard>
              <MDBCardBody>
                <h2 className="text-center mb-4">Add Quiz</h2>
                {questions.map((question, index) => (
                  <MDBCard key={index} className="mb-4">
                    <MDBCardBody>
                      <MDBCardText>
                        <div className="mb-3">
                          <MDBInput
                            label={`Question ${index + 1}`}
                            type="text"
                            value={question.question}
                            onChange={(e) => handleQuestionChange(index, e)}
                            className={errorMessages.some((error) => error.field === `question_${index}`) ? 'is-invalid' : ''}
                          />
                          {errorMessages
                            .filter((error) => error.field === `question_${index}`)
                            .map((error, errorIndex) => (
                              <div key={errorIndex} className="invalid-feedback">
                                {error.message}
                              </div>
                            ))}
                        </div>
                        {question.options.map((option, optionIndex) => (
                          <div key={optionIndex} className="mb-3">
                            <MDBInput
                              label={`Option ${String.fromCharCode(65 + optionIndex)}`}
                              type="text"
                              value={option}
                              onChange={(e) => handleOptionChange(index, optionIndex, e)}
                              className={
                                errorMessages.some((error) => error.field === `option_${index}_${optionIndex}`)
                                  ? 'is-invalid'
                                  : ''
                              }
                            />
                            {errorMessages
                              .filter((error) => error.field === `option_${index}_${optionIndex}`)
                              .map((error, errorIndex) => (
                                <div key={errorIndex} className="invalid-feedback">
                                  {error.message}
                                </div>
                              ))}
                          </div>
                        ))}
                        <div className="mb-3">
                          <label htmlFor={`time_${index}`} className="form-label">
                            Time (in seconds)
                          </label>
                          <select
                            id={`time_${index}`}
                            className={errorMessages.some((error) => error.field === `time_${index}`) ? 'is-invalid' : ''}
                            value={question.time}
                            onChange={(e) => handleTimeChange(index, e)}
                          >
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                            <option value="6">Six</option>
                            <option value="7">Seven</option>
                            <option value="8">Eight</option>
                          </select>
                          {errorMessages
                            .filter((error) => error.field === `time_${index}`)
                            .map((error, errorIndex) => (
                              <div key={errorIndex} className="invalid-feedback">
                                {error.message}
                              </div>
                            ))}
                        </div>
                        <div className="mb-3">
                          <label htmlFor={`marks_${index}`} className="form-label">
                            Marks
                          </label>
                          <select
                            id={`marks_${index}`}
                            className={errorMessages.some((error) => error.field === `marks_${index}`) ? 'is-invalid' : ''}
                            value={question.marks}
                            onChange={(e) => handleMarksChange(index, e)}
                          >
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                            <option value="6">Six</option>
                            <option value="7">Seven</option>
                            <option value="8">Eight</option>
                          </select>
                          {errorMessages
                            .filter((error) => error.field === `marks_${index}`)
                            .map((error, errorIndex) => (
                              <div key={errorIndex} className="invalid-feedback">
                                {error.message}
                              </div>
                            ))}
                        </div>
                        <div className="mb-3">
                          <label htmlFor={`correctAnswer_${index}`} className="form-label">
                            Correct Answer
                          </label>
                          <MDBInput
                            type="text"
                            id={`correctAnswer_${index}`}
                            value={question.correctAnswer}
                            onChange={(e) => handleCorrectAnswerChange(index, e)}
                            className={errorMessages.some((error) => error.field === `correctAnswer_${index}`) ? 'is-invalid' : ''}
                          />
                          {errorMessages
                            .filter((error) => error.field === `correctAnswer_${index}`)
                            .map((error, errorIndex) => (
                              <div key={errorIndex} className="invalid-feedback">
                                {error.message}
                              </div>
                            ))}
                        </div>
                      </MDBCardText>
                      <MDBBtn className="center" color="danger" onClick={() => deleteQuestion(index)}>
                        Delete Question
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                ))}
               
                <div style={{display:"flex",justifyContent:"space-between"}} className="text-center mt-4">
                <MDBBtn color="primary" onClick={addQuestion}>
                  Add 
                </MDBBtn>
                  <MDBBtn color="primary" onClick={handleSubmit}>
                    Submit
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
        
        </div>
        </div>
  )
}

export default AddQuiz
