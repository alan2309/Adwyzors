import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import CompForm from "./CompForm";
import JobForm from "./JobForm";
import Skills from "./Skills";
import FinalModal from "./FinalModal";

function PostJob({ changeSection }) {
  const [section, setSection] = useState(0);
  const [lgShow, setLgShow] = useState(false);
  const [job, setJob] = useState({
    title: null,
    comp_name: null,
    comp_web: null,
    exp: 0,
    location: null,
    email: null,
    job_type: "on-site",
    skills: [],
    salary_min: 0,
    salary_max: 0,
    deadline: null,
    desc: null,
    pdf: null,
  });
  useEffect(() => {
    changeSection(1);
  }, [changeSection]);
  const changeHandler = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div
      className="bg-grey p-4 d-flex justify-content-end"
      style={{ alignContent: "center" }}
    >
      <Row>
        <Col className="mx-2" md={4}>
          <Row
            className="bg-white"
            style={{ cursor: "pointer", borderRadius: "15px" }}
          >
            <Col
              className="m-3"
              onClick={(e) => {
                setSection(0);
              }}
              md={12}
            >
              Company Details
            </Col>
            <Col
              className="m-3"
              onClick={(e) => {
                setSection(1);
              }}
              md={12}
            >
              Job Details
            </Col>
            <Col
              className="m-3"
              onClick={(e) => {
                setSection(2);
              }}
              md={12}
            >
              Skill Required
            </Col>
          </Row>
        </Col>
        <Col md={7}>
          <Row
            className="bg-white"
            style={{ height: "82vh", width: "50vw", borderRadius: "15px" }}
          >
            <Col
              className="comp_details"
              style={{
                padding: "20px",
                display: section === 0 ? "block" : "none",
              }}
            >
              <CompForm
                job={job}
                changeHandler={changeHandler}
                setSection={setSection}
              />
            </Col>
            <Col
              className="job_details"
              style={{ display: section === 1 ? "block" : "none" }}
            >
              <JobForm
                job={job}
                changeHandler={changeHandler}
                setSection={setSection}
              />
            </Col>
            <Col
              className="skills"
              style={{ display: section === 2 ? "block" : "none" }}
            >
              <Skills
                job={job}
                changeHandler={changeHandler}
                setJob={setJob}
                setLgShow={setLgShow}
              />
            </Col>
            <FinalModal job={job} lgShow={lgShow} setLgShow={setLgShow} />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default PostJob;
