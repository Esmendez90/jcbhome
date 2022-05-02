import React from "react";
import "../../App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ImgComponent } from "../ReusableComponents/index";
 import { faBars } from "@fortawesome/free-solid-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { ContactListComponent } from "../ListComponent/index";

function Navigationbar (){
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <ImgComponent
            imgContainerClass="logoImg-container"
            imgClass="logoImg"
            src="/images/logo.png"
            alt="jcb logo"
          />
        </Navbar.Brand>
        <div className="jcbTitle-container">
          <p className="jcbTitle">JCB REAL ESTATE SERVICES</p>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/services">SERVICES</Nav.Link>
            <Nav.Link href="/strategy">STRATEGY</Nav.Link>
          </Nav>
          <hr />
          <ContactListComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigationbar;
