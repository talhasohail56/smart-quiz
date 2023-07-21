
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentLogin from "./Components/LoginStudent";

import "./App.css";
import Header from "./Components/Header";
import Pic from "./Components/Pic";
import Quiz from "./Components/Quiz";
import StudentRegistration from "./Components/RegistrationStudent";
import StudentTest from "./Components/StudentDash/StudentTest";
import TeacherLogin from "./Components/TeacherLogin";
import TeacherRegistration from "./Components/TeacherRegistration";
import AddQuiz from "./Components/Teachersdash/AddQuiz";
import Profile from "./Components/Teachersdash/Profile";
import Reviews from "./Components/Teachersdash/Reviews";
import ViewQuiz from "./Components/Teachersdash/ViewQuiz";
import ViewQuizEdit from "./Components/Teachersdash/ViewQuizEdit";
import ViewResult from "./Components/Teachersdash/ViewResult";
import "./Styles/QuizH.scss";



import { ToastContainer } from "react-toastify";
import "./Styles/Login.css";
function App() {

 
  return (
 
    // <nav style={{backgroundColor:" #4057ed"}} className="navbar navbar-expand-lg navbar-light fixed-top">
<>
      <ToastContainer>      </ToastContainer>
    <Router>
      <Header/>
    
          <Routes>
            <Route  path="/"  element={<Quiz />} />
            <Route path="/StudentSign-in" element={<StudentLogin />} />
            <Route path="/TeacherSign-in" element={<TeacherLogin />} />
            <Route path="/StudentSign-up" element={<StudentRegistration />} />
            <Route path="/TeacherSign-up" element={<TeacherRegistration />} />
            <Route path="/AddQuiz" element={<AddQuiz />} />
           < Route path="/Profile" element={<Profile />} />
           < Route path="/ViewQuiz" element={<ViewQuiz />} />
           < Route path="/ViewQuizEdit" element={<ViewQuizEdit />} />
           < Route path="/Reviews" element={<Reviews />} />
           < Route path="/ViewResult" element={<ViewResult />} />
           < Route path="/Pic" element={<Pic />} />
           < Route path="/StudentTest" element={<StudentTest />} />
        
          </Routes>
          
       </Router>
       </>

       
       );
      }
      
export default App;
