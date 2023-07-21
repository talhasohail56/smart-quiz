import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Confirmation() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handler = () => {
    navigate('/TeacherSign-in');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === '') {
      setError('Please enter your password.');
    } else if (confirmPassword === '') {
      setError('Please enter your confirm password.');
    } else if (password !== confirmPassword) {
      setError('Password and confirm password do not match.');
    } else if (password.length < 6) {
      setError('Password should be at least 6 characters long.');
    } else {
      // Perform your desired action when the form is filled with valid input
      // For example, you can submit the form data to a server
      console.log('Form submitted:', password);
      navigate('/path/to/react');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError('');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '0 20px',
      }}
    >
      <div style={{ width: '100%', maxWidth: '550px' }}>
        <h2
          style={{
            textAlign: 'center',
            borderBottom: '1px solid gray',
            fontSize: '24px',
            marginBottom: '30px',
          }}
        >
          FORGOT <span style={{ color: 'gray' }}>YOUR PASSWORD ?</span>
        </h2>
        <Card style={{ padding: '15px', marginBottom: '85px' }}>
          <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Card.Text>
              <p style={{ fontSize: '16.5px' }}>
                
                <b>An Email containing the instructions on how to reset your password will be sent!</b>
                <b> </b>
              </p>
            </Card.Text>

            <div className="field" style={{ width: '100%', marginBottom: '20px' }}>
              <label>Password:</label>
              <div className="ui input" style={{ width: '100%' }}>
                <input
                  type="password"
                  placeholder="******"
                  style={{
                    width: '100%',
                    marginTop: '5px',
                    fontSize: '16px',
                  }}
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            <div className="field" style={{ width: '100%', marginBottom: '20px' }}>
              <label>Confirm Password:</label>
              <div className="ui input" style={{ width: '100%' }}>
                <input
                  type="password"
                  placeholder="******"
                  style={{
                    width: '100%',
                    marginTop: '5px',
                    fontSize: '16px',
                  }}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
            </div>
            {error && <div style={{ color: 'red', marginTop: '10px', fontSize: '16px' }}>{error}</div>}
            <div className="button-container" style={{ marginTop: '20px', marginLeft: '0' }}>
              <Button
                variant="primary"
                onClick={handleSubmit}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '16px',
                  padding: '8px 12px',
                  width: '100%',
                }}
              >
                RESET PASSWORD <FaArrowRight style={{ marginLeft: '5px' }} />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
