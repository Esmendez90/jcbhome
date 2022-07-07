import React from "react";
import "../../App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ImgComponent } from "../ImageComponent";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactListComponent } from "../ListComponent";
import { AccordionComponent } from "../Accordion";

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
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                id="xmark-container"
              >
                <FontAwesomeIcon icon={faXmark} />
              </Navbar.Toggle>
              <div>
                <Nav.Link href="/">HOME</Nav.Link>
              </div>
              <AccordionComponent
                header="ABOUT"
                firstLinkToPage="/myjourney"
                firstTabName="My journey"
                secondLinkToPage="/whykw"
                secondTabName="Why I chose Keller Williams"
              />
            
              <AccordionComponent
                header="SELLERS"
                firstLinkToPage="/seller-plan-to-success"
                firstTabName="Plan to success"
                secondLinkToPage="/seller-services"
                secondTabName="Marketing services"
              />

              <div className="myteam-container">
                <Nav.Link href="/myteam">MY TEAM</Nav.Link>
              </div>
            </Nav>

            <ContactListComponent />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Navigationbar;
