import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Logo from "../../img/logo.svg";

import "./BasicHeader.css";

function BasicHeader() {
  return (
    <Navbar className="transparent navbar-inverse">
      <Container style={{ margin: "0 3%" }} className="navbar-inner">
        <Navbar.Brand
          href="#home"
          style={{
            fontFamily: "Merriweather sans-serif",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "35px",
            lineHeight: "50px",
            color: "#28363D",
          }}
        >
          <img
            src={Logo}
            alt="brandLogo"
            style={{ width: "69px", height: "50px" }}
          />{" "}
          Adwyzors
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BasicHeader;
