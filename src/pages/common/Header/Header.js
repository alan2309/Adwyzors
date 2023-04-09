import React from "react";
import { Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import Home from "../../img/Home.svg";
import Jobs from "../../img/Jobs.svg";
import Profile from "../../img/Profile.svg";
import Logo from "../../img/logo.svg";
import Messages from "../../img/messages.svg";
import Notification from "../../img/noti.svg";
import "./Header.css";

function Header() {
  return (
    <Navbar sticky="top" expand="lg">
      <Container style={{ margin: "0 15%" }}>
        <Navbar.Brand
          href="#home"
          style={{
            fontFamily: "Merriweather",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "30px",
            color: "#28363D",
          }}
        >
          <img
            src={Logo}
            alt="brandLogo"
            style={{ width: "58.96px", height: "30px" }}
          />{" "}
          Adwyzors
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto topnav-centered">
            <Row>
              <Col>
                <Nav.Link href="#features">
                  <img
                    style={{ width: "28px", height: "28px" }}
                    alt="img"
                    src={Home}
                  />
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="#features">
                  <img
                    style={{ width: "28px", height: "28px" }}
                    alt="img"
                    src={Jobs}
                  />
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="#features">
                  <img
                    style={{ width: "28px", height: "28px" }}
                    alt="img"
                    src={Messages}
                  />
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="#features">
                  <img
                    style={{ width: "40px", height: "28px" }}
                    alt="img"
                    src={Notification}
                  />
                </Nav.Link>
              </Col>

              <Col>
                <Nav.Link href="#features">
                  <img
                    style={{ width: "28px", height: "28px" }}
                    alt="img"
                    src={Profile}
                  />
                </Nav.Link>
              </Col>
            </Row>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              disabled
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
