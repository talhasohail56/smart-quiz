import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle
} from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import './Card.css';

export default function Card() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = () => {
    fetch('http://localhost:8017/user')
      .then((response) => response.json())
      .then((data) => setTeachers(data))
      .catch((error) => console.error('Error fetching teachers:', error));
  };

  return (
    <div>
      <div style={{ height: '120px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginTop: '40px' }}>Hi Mughira</h1>
      </div>
      <MDBCard style={{ margin: '0 11rem', backgroundColor: "#5072A7" }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '2rem',
            backgroundColor: "rgb(222, 222, 222)",
            borderRadius: '8px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            transition: 'box-shadow 0.3s ease-in-out',
          }}
        >
          {teachers.map((teacher) => (
            <MDBCard
              className="Recommend"
              key={teacher.id}
              style={{
                width: '159px',
                height: '200px',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'box-shadow 0.3s ease-in-out',
                backgroundColor: "#f9f9f9", // Lighter color for inner card
              }}
            >
              <MDBCardImage
                src={teacher.Pic}
                style={{ height: '90px', width: '90px', borderRadius: '50%', margin: '0 auto', marginTop: '10px' }}
                position="center"
                alt="Teacher Image"
              />
              <MDBCardBody
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '0 0.8rem', // Added padding
                }}
              >
                <MDBCardTitle style={{ marginBottom: '0.5rem', marginTop: '10px' }}>
                  <h2
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: '1.5rem',
                      lineHeight: '1.2',
                      margin: '0',
                      color: '#333',
                      textTransform: 'capitalize',
                    }}
                  >
                    {teacher.Name}
                  </h2>
                </MDBCardTitle>
                <MDBCardText>
                  <p
                    style={{
                      textAlign: 'center',
                      fontWeight: '400',
                      fontSize: '1rem',
                      color: '#555',
                      margin: '0',
                    }}
                  >
                    Subject: {teacher.Subject}
                  </p>
                </MDBCardText>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <MDBBtn
  style={{
    width: '80px',
    height: '20px',
    fontSize: '0.8rem',
    borderRadius: '4px',
    background: '#4a4a4a', // Adjusted color
    color: '#fff',
    transition: 'background 0.3s ease-in-out',
    padding: '0', // Added padding
  }}
  href="#"
  className="btn"
>
  Try
</MDBBtn>

                </div>
              </MDBCardBody>
            </MDBCard>
          ))}
        </div>
      </MDBCard>
    </div>
  );
}
