import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import prof from "./prof.png";

function JobDesc() {
  const [hover, setHover] = useState(false);
  const { primaryColor } = useContext(ThemeContext);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    setSkills(["trees", "graph", "api", "hashmaps"]);
  }, []);
  return (
    <div
      className="bg-white mt-2 pt-3 ps-3 pb-2"
      style={{ borderRadius: "15px",height: "79vh", overflowY: "scroll" }}
    >
      <Row>
        <Col md={3}>
          <img
            src={prof}
            style={{
              height: "130px",
              width: "130px",
              borderRadius: "50%",
              border: "1px solid grey",
              padding: "3px",
            }}
            alt="profilepic"
          />
        </Col>
        <Col className="pt-1" md={5}>
          <p style={{ fontSize: "20px", fontWeight: "600" }}>Think360</p>
          <p style={{ fontSize: "13px", fontWeight: "500", color: "grey" }}>
            Back-end Software Engineer (Remote)
          </p>
        </Col>
        <Col md={3}>
          <Button
            style={{
              borderColor: primaryColor,
              color: hover ? "white" : primaryColor,
              backgroundColor: hover ? primaryColor : "white",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Apply now
          </Button>
        </Col>
      </Row>
      <Row className="mt-3 ms-4">
        <p style={{ fontWeight: "600", fontSize: "20px" }}>Job Description</p>
        <p style={{ fontSize: "14px" }}>
          You have to match the convenience of the gasoline car in order for
          people to buy an electric car." "In order to have clean air in cities,
          you have to go electric." "You should not show somebody something very
          cool and then not do it. At Tesla, any prototype that is shown to
          customers, the production must be better.
        </p>
        <p>
          <b>Experience Required:</b> 3+ years
        </p>
        <p>
          <b>Pay(Performance based):</b> 10,00,000 - 20,00,000 CTC
        </p>
        <p>
          <b>Apply Before:</b> 23/09/2023
        </p>
        <p className="mt-2">
          <b>Important pdf: </b>
          <a href="/#" style={{ color: primaryColor }}>
            {" "}
            document.pdf
          </a>
        </p>
        <p style={{ fontWeight: "600", fontSize: "20px" }}>Skills Required</p>
        <Row>
          {skills.map((skill, index) => (
            <Col key={index} style={{ display: "inline-block" }} md={4}>
              <div
                className="p-1 mt-2 d-flex justify-content-center"
                style={{
                  color: "white",
                  backgroundColor: "rgb(255,134,40,0.7)",
                  borderRadius: "20px",
                  fontWeight: "600",
                }}
              >
                {skill}
              </div>
            </Col>
          ))}
        </Row>
      </Row>
    </div>
  );
}

export default JobDesc;
