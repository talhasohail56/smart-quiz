import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar style={{ backgroundImage:'blue', position: "relative"
    ,zIndex:" 2"}}  expand="lg" className="bg-body-tertiary ">
      <Container fluid>
      <Navbar.Brand>
            <Link  to="/">Quiz</Link>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
            <NavLink>
            <Link style={{color:"black"}} to="/StudentSign-in" >Student Login</Link>
            </NavLink>
            <NavLink>
            <Link style={{color:"black"}} to="/TeacherSign-in" >Teacher Login</Link>
            </NavLink>
            <NavLink>
            <Link style={{color:"black"}} to="/Subjects" >StartQuiz</Link>
            </NavLink>
            <NavLink>
          <Link style={{color:"black"}} to="/Result" >Result</Link>
            </NavLink>
            
           
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;