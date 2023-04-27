import React, { useState, useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import prof from "./prof.png";
import { BiShare } from "react-icons/bi";

function JobDesc({ job, setModalShow }) {
  const [hover, setHover] = useState(false);
  const { primaryColor, textColor } = useContext(ThemeContext);
  return (
    <div
      className="bg-white mt-1 pt-3 ps-3 pb-2"
      style={{ borderRadius: "15px", height: "78vh", overflowY: "scroll" }}
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
        <Col className="pt-1 mt-2" md={5}>
          <p style={{ fontSize: "20px", fontWeight: "600" }}>{job.name}</p>
          <p style={{ fontSize: "13px", fontWeight: "500", color: "grey" }}>
            {job.title} ({job.job_type})
          </p>
        </Col>
        <Col md={3} className="mt-2">
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
        <Col md={1}>
          <BiShare
            className="mt-2"
            size={25}
            color={textColor}
            style={{ cursor: "pointer" }}
            onClick={() => setModalShow(true)}
          />
        </Col>
      </Row>
      <Row className="mt-3 ms-4">
        <p style={{ fontWeight: "600", fontSize: "20px" }}>Job Description</p>
        <p style={{ fontSize: "14px" }}>{job.desc}</p>
        <p>
          <b>Experience Required:</b> {job.experience}+ years
        </p>
        <p>
          <b>Pay(Performance based):</b> {job.ctc} CTC
        </p>
        <p>
          <b>Apply Before:</b> {job.deadline}
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
          {job.skills.map((skill, index) => (
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
