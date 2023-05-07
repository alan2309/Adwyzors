import React, { useContext } from "react";
import { Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi";
import { HiHome, HiOutlineBriefcase } from "react-icons/hi";
import { AuthContext } from "../../../context/AuthContext";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import Logo from "../../img/logo.svg";
import RoleConstants from "../../../constants/RoleConstants";
import RouteConstants from "../../../constants/RouteConstants";
function Header({ section }) {
  const { user, dispatch } = useContext(AuthContext);
  const { primaryColor, textColor } = useContext(ThemeContext);

  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={{
        backgroundColor: "white",
        boxShadow: "0px 1px 1px lightgrey",
        border: "solid 1px white",
      }}
    >
      <Container style={{ margin: "0 10%" }}>
        <Navbar.Brand
          href={RouteConstants.HOME_PAGE}
          style={{
            fontFamily: "Merriweather",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "30px",
            color: primaryColor,
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
            <Row
              style={{
                float: "none",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                gap: "12px",
              }}
            >
              <Col className="d-flex gap-2">
                <Nav.Link href={RouteConstants.HOME_PAGE}>
                  <HiHome
                    size={28}
                    color={section === 0 ? primaryColor : textColor}
                  />
                </Nav.Link>
              </Col>
              <Col className="d-flex" style={{ marign: "0 113px" }}>
                <Nav.Link
                  href={
                    user.userRole === RoleConstants.EMPLOYEE
                      ? "/jobs"
                      : "/c/jobs/all"
                  }
                >
                  <HiOutlineBriefcase
                    size={28}
                    color={section === 1 ? primaryColor : textColor}
                  />
                </Nav.Link>
              </Col>
              <Col className="d-flex" style={{ gap: "23px" }}>
                <Nav.Link href={RouteConstants.MESSAGING_PAGE}>
                  <i
                    className="fa-regular fa-comment-dots fs-4"
                    style={{ color: section === 2 ? primaryColor : textColor }}
                  ></i>
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link
                  href={
                    user.userRole === RoleConstants.ADMIN
                      ? RouteConstants.ADMIN_NOTIFICATION_PAGE
                      : RouteConstants.NOTIFICATION_PAGE
                  }
                >
                  <i
                    className="fa-regular fa-bell fs-4"
                    style={{ color: section === 3 ? primaryColor : textColor }}
                  ></i>
                </Nav.Link>
              </Col>

              <Col>
                <Nav.Link href={`/${user.username}`}>
                  <i
                    className="fa-regular fa-user fs-4"
                    style={{ color: section === 4 ? primaryColor : textColor }}
                  ></i>
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link
                  onClick={async (e) => {
                    await dispatch({ type: "LOGOUT", payload: null });
                    window.location.assign("/");
                  }}
                >
                  <FiLogOut size={28} color="#3f5e60" />
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
