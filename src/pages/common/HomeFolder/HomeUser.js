import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HomeUser = ({
  img = "#",
  name = "Alankrit Arya",
  designation = "Developer",
}) => {
  return (
    <Container className="p-3">
      <Container fluid>
        <Row>
          <Col lg={3} className="p-0">
            <img src={img} alt="profile-img" srcset="" />
          </Col>
          <Col lg={8} className="p-0">
            <div>
              <h1 className="fs-6">{name}</h1>
            </div>
            <div>
              <h6 className="lead fs-6">{designation}</h6>
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
