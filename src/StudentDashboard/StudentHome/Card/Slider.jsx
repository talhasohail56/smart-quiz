import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle
} from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
  
  export default function SliderStudent() {
    const [teachers, setTeachers] = useState([]);
  
    useEffect(() => {
      fetchTeachers();
    }, []);
  
    const fetchTeachers = () => {
      fetch('http://localhost:8019/user')
        .then((response) => response.json())
        .then((data) => setTeachers(data))
        .catch((error) => console.error('Error fetching teachers:', error));
    };
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 9,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    const calculateCardWidth = () => {
      const slideCount = Math.min(teachers.length, settings.slidesToShow);
      const containerWidth = document.querySelector('.slider-container')?.offsetWidth;
      if (containerWidth && slideCount > 0) {
        const cardMargin = 20; // Adjust the margin between cards as needed
        return `${(containerWidth - (slideCount - 1) * cardMargin) / slideCount}px`;
      }
      return '80px'; // Default card width
    };
  
    return (
      <div>
        <div style={{ height: '100px' }}>
          <h1 style={{ fontSize: '38px',  padding:"1rem",fontWeight:"600", marginTop: '40px' }}>Students also take these Quiz</h1>
        </div>
        <MDBCard style={{  backgroundColor: "rgb(44 40 85)", padding: '20px 0', height: '250px' }}>
          <div className="slider-container">
            <Slider {...settings}>
              {teachers.map((teacher) => (
                <div key={teacher.id} style={{ margin: '0 10px' }}>
                  <MDBCard
                   
                    style={{
                      width: calculateCardWidth(),
                      height: '200px',
                      borderRadius: '12px',
                      backgroundColor: '#f9f9f9',
                      transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
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
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        transition: 'box-shadow 0.3s ease-in-out',
                      }}
                    >
                      <MDBCardTitle style={{ marginBottom: '0.5rem', marginTop: '10px' }}>
                        <h2
                          style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
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
                            width: '60px',
                            height: '20px',
                            fontSize: '0.8rem',
                            borderRadius: '4px',
                            background: '#4a4a4a',
                            color: '#fff',
                            transition: 'background 0.3s ease-in-out',
                            padding: '0',
                          }}
                          href="#"
                          className="btn"
                        >
                          Try
                        </MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              ))}
            </Slider>
          </div>
        </MDBCard>
      </div>
    );
  }
  