import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Code() {
  const [code, setCode] = useState(['', '', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [codeData, setCodeData] = useState([]); // New state variable for code data
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  useEffect(() => {
    fetch("http://localhost:8010/code")
      .then((response) => response.json())
      .then((data) => {
        const initialCode = data.code || ['','','','','','',''];
        setCode(initialCode);
        setCodeData(data); // Update code data state with fetched JSON data
      })
      .catch((error) => console.error("Error fetching code:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredCode = code.join('');

    if (enteredCode === '') {
      setError('Please enter your 7-digit code.');
    } else if (enteredCode.length !== 7 || isNaN(Number(enteredCode))) {
      setError('Please enter a valid 7-digit code.');
    } else {
      setError(''); // Clear the error message if the code is valid

      // Perform your desired action when the form is filled with a valid code
      // For example, you can compare the entered code with the code from the JSON file
      const matchingCode = codeData.find((item) => item.number === enteredCode);
      if (matchingCode) {
        console.log('Code is correct');
        navigate('/Confirmation');
      } else {
        setError('Incorrect code entered. Please try again.'); // Set error message for incorrect code
      }
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (value.length <= 1 && /^\d*$/.test(value)) {
      const updatedCode = [...code];
      updatedCode[index] = value;
      setCode(updatedCode);

      // Move to the next input box when a digit is entered
      if (value.length === 1 && index < code.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && code[index] === '') {
      const updatedCode = [...code];
      updatedCode[index - 1] = '';
      setCode(updatedCode);

      // Move to the previous input box when backspace is pressed on an empty input
      if (index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 p-3">
      <div style={{ maxWidth: '450px', width: '100%' }}>
        <h2 className="text-center mb-4">
          FORGOT <span style={{ color: 'gray' }}>YOUR ACCOUNT ?</span>
        </h2>
        <Card className="p-3 mb-5">
          <Card.Body>
            <Card.Text>
              <b>ENTER YOUR 7 DIGIT VERIFICATION CODE:</b>
            </Card.Text>
            <form onSubmit={handleSubmit}>
              <div className="d-flex justify-content-center mb-3">
                {code.map((digit, index) => (
                  <div className="input-group mx-1" key={index}>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={digit}
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleBackspace(e, index)}
                      maxLength="1"
                      className="form-control text-center"
                      style={{ width: '40px', minWidth: '40px', maxWidth: '40px' }}
                      ref={(input) => {
                        inputRefs.current[index] = input;
                      }}
                    />
                  </div>
                ))}
              </div>
              {error && <div className="text-danger mb-3">{error}</div>}
              <div className="d-grid">
                <Button variant="primary" onClick={handleSubmit} className="d-flex align-items-center" style={{ width: '50%'}}>
                  RESET PASSWORD <FaArrowRight className="ms-2 " />
                </Button>
              </div>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
