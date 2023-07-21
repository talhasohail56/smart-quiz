import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const Handler = () => {
    setIsClicked(true);
    navigate('/code');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsClicked(true); // Set isClicked to true when the button is clicked

    if (email === '') {
      setError('Please enter your email.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      // Perform your desired action when the form is filled with a valid email
      // For example, you can submit the form data to a server
      console.log('Form submitted:', email);
      navigate('/code');
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
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
          FORGOT <span style={{ color: 'gray' }}>YOUR ACCOUNT ?</span>
        </h2>
        <Card style={{ padding: '15px', marginBottom: '85px' }}>
          <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Card.Text>
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                We'll email you instructions on how to reset your password
              </p>
            </Card.Text>
            <form className="ui form" onSubmit={handleSubmit}>
              <div className="field" style={{ width: '100%' }}>
                <div className="ui input" style={{ width: '100%' }}>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    style={{
                      borderBottom: '1px solid gray',
                      borderTop: '0px',
                      borderLeft: '0px',
                      borderRight: '0px',
                      outline: 'none',
                      width: '100%',
                      marginLeft: '0',
                      fontSize: '16px',
                    }}
                    value={email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {(isClicked || error) && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
              <div className="button-container" style={{ marginTop: '20px', marginLeft: '0' }}>
                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '16px',
                    padding: '8px 12px',
                  }}
                >
                  RESET PASSWORD <FaArrowRight style={{ marginLeft: '5px' }} />
                </Button>
              </div>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
