import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import userImage from "../../../images/user-image.png";

const HomeUser = ({
  img = "#",
  name = "Person",
  designation = "Developer",
}) => {
  return (
    <Container className="p-3">
      <Container fluid>
        <Row>
          <Col lg={2} className="p-0 flex-center-center">
            <img
              src={img || userImage}
              alt="profile-img"
              srcSet=""
              className="rounded-circle img-fluid"
              style={{
                borderRadius: "100%",
                minWidth: "40px",
                minHeight: "40px",
                boxShadow: "0px 1px 1px darkgrey",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </Col>
          <Col></Col>
          <Col lg={8} className="p-0 d-flex align-items-center">
            <div>
              <div>
                <h1 className="fs-6 m-0">{name}</h1>
              </div>
              <div>
                <div className="lead fs-6">{designation}</div>
              </div>
            </div>
          </Col>
          <Col className="d-flex align-items-center justify-content-center p-0">
            <i className="fa-solid fa-angle-down"></i>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomeUser;
