import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";
import "./navbar.css";
const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand>
        <img id="logo" src="/images/logo.png" alt="programer" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              activeClass="active"
              to="aboutMe"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              activeClass="active"
              to="contact-div"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
