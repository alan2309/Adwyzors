import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import prof from "../../common/Job/prof.png";

function VerifyJob({ job }) {
  const { primaryColor } = useContext(ThemeContext);
  return (
    <div
      className="bg-white mt-1 pt-3 ps-3 pb-2"
      style={{ borderRadius: "15px", height: "63vh", overflowY: "scroll" }}
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
            {job.title} ({job.job_type})
          </p>
        </Col>
      </Row>
      <Row className="mt-3 ms-4">
        <p style={{ fontWeight: "600", fontSize: "20px" }}>Job Description</p>
        <p style={{ fontSize: "14px" }}>{job.desc}</p>
        <p>
          <b>Experience Required:</b> {job.exp}+ years
        </p>
        <p>
          <b>Pay(Performance based):</b> {job.salary_min} - {job.salary_max} CTC
        </p>
        <p>
          <b>Apply Before:</b> {job.deadline}
        </p>
        <p className="mt-2">
          <b>Important pdf: </b>
          <a href="/#" style={{ color: primaryColor }}>
            {" "}
            {job.pdf}
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
export default VerifyJob;
