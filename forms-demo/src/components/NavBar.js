import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="links">
              <Link style={{marginRight: '10px'}} to="/">Home</Link>
              <Link style={{marginRight: '10px'}} to="/about">About</Link>
              <Link style={{marginRight: '10px'}} to="/addMovie">AddMovie</Link>
              <Link style={{marginRight: '10px'}} to="/login">Login</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
