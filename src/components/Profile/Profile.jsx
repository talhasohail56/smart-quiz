import {
  MDBBtn, MDBCard, MDBCardBody,
  MDBCardImage, MDBCardText, MDBCol,
  MDBContainer, MDBRow
} from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Dashboardview from '../Dashboardview';
import Sidebar from '../Sidebar';
import Modal2 from './Modal2';
import "./Profile.css";

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  

  useEffect(() => {
    fetch("http://localhost:8004/user")
      .then(res => res.json())
      .then(data => {
        setUserData(data);
      });
  }, []);

  

    // Make a POST request to update the password
    
  

  

  return (
    <div className="flex overflow-scroll ">
    <div className="basis-[12%] h-[100vh]">
      <Sidebar />
    </div>
    <div className="basis-[88%] border overflow-scroll h-[100vh]">
      <Dashboardview />
      <div>
        <Outlet></Outlet>
      </div>


    
      <div style={{ backgroundColor: '#eee', width: '100%', height: '100vh'}}>
  <MDBContainer className="py-5">
    <MDBRow>
      <MDBCol lg="4">
        <MDBCard className="mb-4">
          <MDBCardBody className="text-center">
            <MDBCardImage 
              src={userData?.[0]?.image}
              alt="avatar"
              className="rounded-circle profile-image "
            />
            <h5 className="text-muted mb-1">{userData?.[0]?.name}</h5>
            <p className="text-muted mb-1">{userData?.[0]?.subject}</p>
            <div className="d-flex justify-content-center mb-2">
              <MDBBtn className="ms-1 ">
                Edit
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol lg="8">
        <MDBCard className="mb-4">
          <MDBCardBody>
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Name</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{userData?.[0]?.name}</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Email</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{userData?.[0]?.email}</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Birth-Date</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{userData?.[0]?.birthDate}</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Subject</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{userData?.[0]?.subject}</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Password</MDBCardText>
              </MDBCol>
              <MDBCol style={{display:"flex",justifyContent:"space-between" }} sm="9">
                <MDBCardText className="text-muted">******</MDBCardText>
                
                 <Modal2  />
               
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</div>

     
                    </div>
                    </div>
   
  );
}