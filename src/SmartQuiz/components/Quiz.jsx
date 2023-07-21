import { MDBCarousel, MDBCarouselItem, MDBCol, MDBRow } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import { BiSolidSchool } from "react-icons/bi";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import st1 from "../Assets/st1.jpg";
import st2 from "../Assets/st2.jpg";
import st3 from "../Assets/st3.jpg";
import student from "../Assets/student.avif";
import teacher from "../Assets/teacher.avif";
import "../styles/Quiz.css";
import "../styles/QuizH.scss";
import Header from "./Header";


import React from "react";

function Quiz() {
  const navigate=useNavigate();
  return (

    
    <  >
    <Header/>
    <div className="main">
    <MDBCarousel   fade>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src={st3}
        alt="..."
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src={st2}
        alt="..."
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src={st1}
        alt="..."
      >
     
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </MDBCarouselItem>
    </MDBCarousel>
      <MDBRow >
        <div className=" main1">
          <img style={{ width: "500px",mixBlendMode:"multiply" }} id="1" src={teacher} alt="img1" />
          

          <MDBCol col="6" className="mb-5">
           
              <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                <h2 class="mb-4">ATTENTION STUDENTS!!</h2>
                <p class="small mb-0">
                  we are the gateway to endless possibilities and the catalyst
                  for Welcome to Smart Quiz - Your Ultimate Learning Companion!
                  Are you ready to take your studying experience to the next
                  level? Look no further! With Smart Quiz, you'll discover a
                  world of interactive learning, designed to empower students
                  like you to excel in your studies. Let's get started on your
                  learning journey today!
                 
                </p>
                <Button className="register" onClick={()=>navigate("/StudentSign-up")} style={{ margin: "2rem" }} variant="primary" size="lg">
            Register
          </Button>
              </div>
           
          </MDBCol>
        </div>
      </MDBRow>
      <MDBRow>
        <div className=" main2">
          <MDBCol col="6" className="mb-5">
            
              <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                <h2 class="mb-4">ARE YOU A TEACHER?</h2>
                <p class="small mb-0">
                  Are you an educator looking to revolutionize your teaching
                  methods and engage your students like never before? Look no
                  further! Smart Quiz is the ultimate platform designed to
                  empower teachers like you with comprehensive resources and
                  interactive tools. Let's embark on a transformative teaching
                  experience together! 
                  </p>
                  <Button onClick={()=>navigate("/TeacherSign-up")} style={{ margin: "2rem" }} variant="primary" size="lg">
            Register
          </Button>
                  
              
              </div>
           
          </MDBCol>
          
          <img style={{ width: "500px",mixBlendMode:"multiply" }} id="2" src={student} alt="img2" />
        </div>
      </MDBRow>
      </div>
      <div className="home4" >
          <div className="brands">
            <h1>PARTNERS</h1>
            <article>
            <div id="icons" style={{animationDelay:"0.3s"}} >
                <FaUniversity/>
                <p>Fast</p>

              </div>
              <div style={{animationDelay:"0.5s"}} >
                <LiaUniversitySolid/>
                <p>UBIT</p>

              </div>
              <div style={{animationDelay:"0.7s"}} >
                <BiSolidSchool/>
                <p>OXFORD</p>

              </div>
              <div style={{animationDelay:"0.1Ss"}} >
                <FaSchool/>
                <p>NUST</p>

              </div>
            </article>
          </div>
        </div>
    </>
  );
}

export default Quiz;
