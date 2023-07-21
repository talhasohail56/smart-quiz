
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import vg from "../Assets/1.avif";
import "../styles/Login.css";
import Header from "./Header";

function TeacherLogin() {
  const [UserName, updateName] = useState('');
  const [Password, updatePassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate=useNavigate();

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
       let data={UserName,Password}
      console.log("fecth above")
      fetch(" http://localhost:8006/user",{
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      } )
        .then((res) => {
          console.log("after fetch")
          return res.json();
        })
        .then((resp) => {
          console.log(resp)
          if (Object.keys(resp).length === 0) {
            console.log("email not found");
          } else {
            if (resp.Password === Password) {
              console.log("login succesfull");
              navigate("/Dashboard")
            } else {
             console.error("wrong password");
            }
          }
        })
        .catch((err) => {
          console.log("login failed due to " + err.message);
        });
      }
    };
    const validate = () => {
      let result = true;
      let validationErrors = {};
    if (UserName === null || UserName === "") {
      result = false;
      
      validationErrors.UserName = "username should not be empty";
    } 
    if (!Password) {
      validationErrors.Password = "Password is required";
      result = false;
    }
    setErrors(validationErrors);
    return result;
  };
  
  return (
      <><Header/>
    <MDBContainer className="my-5 gradient-form">
      <form onSubmit={ProceedLogin} noValidate>
        <MDBRow>
          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img
                  src={vg}
                  style={{ width: "185px" }}
                  alt="logo"
                  />
                <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
              </div>

              <p>Please login to your account</p>

              <MDBInput
                value={UserName}
                onChange={(e) => updateName(e.target.value)}
                wrapperClass="mb-4"
                label="Username"
                id="form1"
                type="text"
                />
              <p style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.UserName}{" "}
              </p>

              <MDBInput
                value={Password}
                onChange={(e) => updatePassword(e.target.value)}
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
                />
              <p style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.Password}{" "}
              </p>

              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn type="submit" className="mb-4 w-100 gradient-custom-2">
                  Sign in
                </MDBBtn>
                <button className="text-muted" onClick={()=>navigate("/ForgotPassword")}>
                  Forgot password?
                </button>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <MDBBtn onClick={()=>navigate("/TeacherSign-up")} className="mx-2" color="primay">
                REGISTER
                </MDBBtn>
              </div>
            </div>
          </MDBCol>

          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a company</h4>
                <p class="small mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </form>
    </MDBContainer>
                </>
  );
}

export default TeacherLogin;
