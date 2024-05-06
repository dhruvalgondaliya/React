import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/" id="new">Home</Link></Nav.Link>
            <Nav.Link><Link to="/AboutUs" id="new">About Us</Link></Nav.Link>
            <Nav.Link><Link to="/ContactUs" id="new">Contact Us</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <NavDropdown title="User" id="navbarScrollingDropdown" className='User'>
          <NavDropdown.Item><Link to="/SignUp" id='new'>Sign Up</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to="/Login" id='new'>Login</Link></NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default NavBar;