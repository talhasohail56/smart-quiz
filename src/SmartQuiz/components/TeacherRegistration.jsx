import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage, MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import pic from "../Assets/1.avif";
import Header from "./Header";


function TeacherRegistration() {
  const navigate = useNavigate();
 
  const [UserName, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [Password, passwordchange] = useState("");
  const [subject, subjectChange] = useState("");
  const [month, monthchange] = useState("may");
  const [day, daychange] = useState("1");
  const [year, yearchange] = useState("1990");
  const [gender, genderchange] = useState("male");
  const [errors, setErrors] = useState({});
  const subjects = [
    { label: "Subject 1", value: "1" },
    { label: "Subject 2", value: "2" },
    { label: "Subject 3", value: "3" },
    { label: "Subject 4", value: "4" },
    { label: "Subject 5", value: "5" },
    { label: "Subject 6", value: "6" },
  ];
  
  const IsValidate = () => {
    let IsProceed = true;
    let Validationerrors = {};

    if (UserName.trim() === "") {
      IsProceed = false;
      Validationerrors.UserName = "Name should not be empty";
    }
    if (email.trim() === "") {
      IsProceed = false;
      Validationerrors.email = "Email should not be empty";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      Validationerrors.email = "Email is invalid";
      IsProceed = false;
    }
    if (!Password) {
      Validationerrors.Password = "Password is required";
      IsProceed = false;
    } else if (Password.length < 4) {
      Validationerrors.Password = "Password must be more than 4 characters";
      IsProceed = false;
    } else if (Password.length > 10) {
      Validationerrors.Password = "Password cannot exceed more than 10 characters";
      IsProceed = false;
    }
    if (!subject) {
      Validationerrors.subject = "Please select a subject";
      IsProceed = false;
    }

    setErrors(Validationerrors);
    return IsProceed;
  }
  const handleSubjectChange = (e) => {
    subjectChange(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  
    let data = { UserName,subject, email, Password,month ,day,year};
    if (IsValidate()) {
      console.log(data);
      fetch("http://localhost:8006/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          
          navigate("/TeacherSign-in");
        })
        .catch((err) => {
          toast.error("failed: " + err.message);
        });
    }
  };

  return (
    <><Header/>

    <MDBContainer fluid>
      <form onSubmit={handleSubmit} noValidate>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Teacher Registration
                </p>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    value={UserName}
                    onChange={(e) => namechange(e.target.value)}
                    label="Your Name"
                    id="form1"
                    type="text"
                    className="w-100"
                    />
                </div>
                {errors.UserName && <p className="error-message mt-1">{errors.UserName}</p>}
                
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    required
                    value={email}
                    onChange={(e) => emailchange(e.target.value)}
                    label="Your Email"
                    id="form2"
                    type="email"
                  />
                </div>
                {errors.email && <p className="error-message mt-1">{errors.email}</p>}
                
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    value={Password}
                    onChange={(e) => passwordchange(e.target.value)}
                    label="Password"
                    id="form3"
                    type="password"
                    />
                </div>
                {errors.Password && <p className="error-message mt-1">{errors.Password}</p>}
                
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="calendar me-3" size="lg" />
                  <div className="d-flex">
                    <select
                      value={month}
                      onChange={(e) => monthchange(e.target.value)}
                      className="form-select me-2"
                      >
                      <option value="January">Jan</option>
                      <option value="February">Feb</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">Aug</option>
                      <option value="September">Sep</option>
                      <option value="October">Oct</option>
                      <option value="November">Nov</option>
                      <option value="December">Dec</option>
                    </select>
                    <select
                      value={day}
                      onChange={(e) => daychange(e.target.value)}
                      className="form-select me-2"
                      >
                       <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                
                    </select>
                    <select
                      value={year}
                      onChange={(e) => yearchange(e.target.value)}
                      className="form-select"
                      >
                      <option value="1990">1990</option>
                      <option value="1991">1991</option>
                      <option value="1992">1992</option>
                      <option value="1993">1993</option>
                      <option value="1994">1994</option>
                      <option value="1995">1995</option>
                      <option value="1996">1996</option>
                      <option value="1997">1997</option>
                      <option value="1998">1998</option>
                      <option value="1999">1999</option>
                      <option value="2000">2000</option>
                      <option value="2001">2001</option>
                      <option value="2002">2002</option>
                      <option value="2003">2003</option>
                      <option value="2004">2004</option>
                      <option value="2005">2005</option>
                      <option value="2006">2006</option>
                      <option value="2007">2007</option>
                      <option value="2008">2008</option>
                      <option value="2009">2009</option>
                      <option value="2010">2010</option>
                      <option value="2011">2011</option>
                      <option value="2012">2012</option>
                      <option value="2013">2013</option>
                      <option value="2014">2014</option>
                      <option value="2015">2015</option>
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                    </select>
                  </div>
                </div>
                
    <div className="d-flex flex-row align-items-center mb-4">
      <MDBIcon fas icon="book me-3" size="lg" />
      <select
        value={subject}
        onChange={handleSubjectChange}
        className="form-select me-2"
        >
        <option value="">Select a Subject</option>
        {subjects.map((subject) => (
          <option key={subject.value} value={subject.value}>
            {subject.label}
          </option>
        ))}
      </select>
    </div>
    {errors.subject && <p className="error-message mt-1">{errors.subject}</p>}
                
                <div className="mb-4">
                  <div className="d-flex">
                    <div className="form-check me-4">
                      <input
                        className="form-check-input"
                        checked={gender === "male"}
                        onChange={(e) => genderchange(e.target.value)}
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        />
                        <label className="form-check-label" htmlFor="male">
                          Male
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          checked={gender === "female"}
                          onChange={(e) => genderchange(e.target.value)}
                          type="radio"
                          name="gender"
                          id="female"
                          value="female"
                          />
                        <label className="form-check-label" htmlFor="female">
                          Female
                        </label>
                        
                      </div>
                    </div>
                  </div>
                  
      
                  
                  <MDBBtn type="submit" className="mb-4" size="lg">
                    Register
                  </MDBBtn>
                </MDBCol>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                  >
                  <MDBCardImage src={pic} fluid />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </form>
      </MDBContainer>
                  </>
        );
      }
      
      export default TeacherRegistration