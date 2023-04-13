import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import JobOpportunity from "./JobOpportunity";
import JobDesc from "./JobDesc";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import { Form } from "react-bootstrap";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import RoleConstants from "../../../constants/RoleConstants";

function Job({ changeSection }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(0);
  const { primaryColor, textColor } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    changeSection(1);
  }, [changeSection]);
  return (
    <div>
      <Row className="mt-3 mb-2 d-flex justify-content-center">
        <Col className="d-flex justify-content-between" md={3}>
          <Button
            style={{
              backgroundColor: active ? "white" : primaryColor,
              border: "none",
              color: active ? textColor : "white",
            }}
            onClick={() => setActive(false)}
          >
            Search Jobs
          </Button>
          <Button
            onClick={() => setActive(true)}
            style={{
              backgroundColor: active ? primaryColor : "white",
              border: "none",
              color: active ? "white" : textColor,
              display:
                user.userRole !== RoleConstants.EMPLOYEE ? "block" : "none",
            }}
          >
            My Postings
          </Button>
        </Col>

        <Col md={6} style={{ display: active ? "none" : "block" }}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              style={{
                borderColor: primaryColor,
                color: hover ? "white" : primaryColor,
                backgroundColor: hover ? primaryColor : "white",
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Search
            </Button>
          </Form>
        </Col>
        <Col md={4}>
          <div style={{ display: active ? "block" : "none" }}></div>
        </Col>
        <Col md={2}>
          <Button
            style={{
              borderColor: primaryColor,
              color: hover ? "white" : primaryColor,
              backgroundColor: hover ? primaryColor : "white",
              display: active ? "block" : "none",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => navigate("/postjob")}
          >
            Post a Job
          </Button>
        </Col>
      </Row>
      <Row className="mx-2 mt-1 d-flex justify-content-center">
        <Col
          className="mx p-2 bg-white"
          style={{ borderRadius: "15px" }}
          md={3}
        >
          <JobOpportunity />
        </Col>
        <Col md={6}>
          <JobDesc />
        </Col>
      </Row>
    </div>
  );
}

export default Job;
