import React from "react";
import "../../App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ImgComponent } from "../ImageComponent";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactListComponent } from "../ListComponent/index";

function Navigationbar() {
  return (
    <>
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
            <p className="jcbTitle">
              <span>JCB</span>
              <br />
              REAL ESTATE SERVICES
            </p>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div>
                <Nav.Link href="/">HOME</Nav.Link>
              </div>
              <div>
                <Nav.Link href="/about">ABOUT</Nav.Link>
              </div>
              <div>
                <Nav.Link href="/services">SERVICES</Nav.Link>
              </div>
              <div>
                <Nav.Link href="/strategy">STRATEGY</Nav.Link>
              </div>
              <div className="myteam-container">
                <Nav.Link href="/team">MY TEAM</Nav.Link>
              </div>
            </Nav>
            <hr />
            <ContactListComponent />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Navigationbar;
