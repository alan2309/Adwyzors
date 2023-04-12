import React, { useContext, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import JobOpportunity from "./JobOpportunity";
import JobDesc from "./JobDesc";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import { Form } from "react-bootstrap";

function Job() {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(0);
  const { primaryColor, textColor } = useContext(ThemeContext);
  return (
    <div>
      <Row className="mt-3 mb-1 d-flex justify-content-center">
        <Col className="d-flex justify-content-between p" md={3}>
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
            }}
          >
            My Postings
          </Button>
        </Col>

        <Col md={6}>
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
      </Row>
      <Row className="mx-2 d-flex justify-content-center">
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
