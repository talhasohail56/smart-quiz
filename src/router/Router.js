import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import App from '../App'
import AddQuiz from '../components/AddQuiz/AddQuiz'
import Main from '../components/Main'
import ProfilePage from '../components/Profile/Profile'
import Reviews from '../components/Reviews/Reviews'
import ViewQuiz from '../components/ViewQuiz/ViewQuiz'
import ViewResult from '../components/ViewResult/ViewResult'
import Code from "../SmartQuiz/components/forgotpass/Code"
import Confirmation from '../SmartQuiz/components/forgotpass/Confrimation'
import ForgotPassword from '../SmartQuiz/components/forgotpass/ForgotPassword'
import StudentLogin from '../SmartQuiz/components/LoginStudent'
import Quiz from '../SmartQuiz/components/Quiz'
import StudentRegistration from '../SmartQuiz/components/RegistrationStudent'
import TeacherLogin from "../SmartQuiz/components/TeacherLogin"
import TeacherRegistration from '../SmartQuiz/components/TeacherRegistration'
import Result from '../StudentDashboard/Result/Result'
import Subjects from '../StudentDashboard/Selection/Subjects'
import TeacherModal from '../StudentDashboard/Selection/TeacherModal'
import Home from '../StudentDashboard/StudentHome/Home'
import StudentTest from '../StudentDashboard/StudentTest'

const Router = () => {
    return (
        <div>
            <ToastContainer>      </ToastContainer>
            <BrowserRouter>
                <Routes>
                    <Route path="/Dashboard" element={<App />}>
                        <Route index element={<Main />} />
                        
                    </Route>
                    
                        
                        
                    
                    <Route path="/Reviews" element={<Reviews />}></Route>
                    <Route path="/AddQuiz" element={<AddQuiz />}></Route>
                    <Route path="/ViewResult" element={<ViewResult />}></Route>
                    <Route path="/ViewQuiz" element={<ViewQuiz />}></Route>
                    <Route path="/ProfilePage" element={<ProfilePage />}></Route>




                    //main web//
                  
                    <Route  path="/"  element={<Quiz />} />
            <Route path="/StudentSign-in" element={<StudentLogin />} />
            <Route path="/TeacherSign-in" element={<TeacherLogin />} />
            <Route path="/StudentSign-up" element={<StudentRegistration />} />
            <Route path="/TeacherSign-up" element={<TeacherRegistration />} />



            //Student//
            <Route path="/StudentTest" element={<StudentTest />} />
            <Route path="/TeacherModal/:id" element={<TeacherModal />} />
            <Route path="/Subjects" element={<Subjects/>} />
               



                <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/Code" element={<Code />} />
            <Route path="/Confirmation" element={<Confirmation/>} />
            <Route path="/Result" element={<Result/>} />
            <Route path="/Home" element={<Home/>} />
            
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router