import React, { useContext, useState } from "react";
import { Col, Container, Row, Button, Form, Modal } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import Globe from "../../../components/img/globe.svg";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import styles from "./CoverPhoto.module.css";

function Experience({ edit, expData, postChange }) {
  const { textColor } = useContext(ThemeContext);
  const [show, setShow] = useState(false);
  const [exp, setExp] = useState({
    jobImg: null,
    jobTitle: null,
    jobCompany: null,
    jobLocation: null,
    startDate: null,
    endDate: null,
    jobExperience: null,
    skills: [],
  });
  const expChange = (e) => {
    setExp({ ...exp, [e.target.name]: e.target.value });
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const jobTimeline = (start, end) => {
    let d1 = new Date(start);
    let d2 = new Date(end);

    return `${monthNames[d1.getMonth()]},${d1.getFullYear()} - ${
      monthNames[d2.getMonth()]
    },${d2.getFullYear()}`;
  };

  const calcTime = (start, end) => {
    var date2 = new Date(start);
    var date1 = new Date(end);
    // alert(start+" "+end)
    const monthDiff = date1.getMonth() - date2.getMonth();
    const yearDiff = date1.getYear() - date2.getYear();
    let diffMonths = monthDiff + yearDiff * 12;
    // alert(diffMonths)
    let yrs = parseInt(diffMonths / 12);
    let mos = diffMonths % 12;
    let diff = `${yrs > 0 ? `${yrs}yrs` : " "} ${mos}mos`;
    return diff;
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ExpCard = ({ job, index }) => {
    return (
      <Row key={index}>
        <div
          id={styles.expPic}
          style={{
            padding: 0,
            display: "flex",
            justifyContent: "center",
            width: "10%",
          }}
        >
          <div
            className={styles.jobPic}
            style={{
              backgroundImage: `url(${job.jobImg || Globe})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            id="profile_pic"
          ></div>
        </div>
        <div
          id={styles.expPicData}
          style={{ padding: 0, marginBottom: "17px" }}
        >
          <Row
            style={{
              color: textColor,
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Roboto",
              lineHeight: "24px",
              marginBottom: "5px",
            }}
          >
            {job.jobTitle}
          </Row>
          <Row style={{ marginBottom: "3px" }}>
            <Col
              md={2}
              style={{
                padding: 0,
                color: textColor,
                fontFamily: "Roboto",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "21px",
              }}
            >
              {job.jobCompany}
            </Col>
            <Col
              md={3}
              style={{
                padding: 0,
                color: textColor,
                fontFamily: "Roboto",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "21px",
              }}
            >
              <GoLocation size={13} /> {job.jobLocation}
            </Col>
          </Row>
          <Row style={{ marginBottom: "5px" }}>
            <Col
              md={3}
              style={{
                padding: 0,
                color: textColor,
                fontFamily: "Roboto",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "21px",
              }}
            >
              {jobTimeline(job.startDate, job.endDate)}
              {/* {job.jobPeriod} */}
            </Col>
            <Col
              md={3}
              style={{
                padding: 0,
                color: "#0275B1",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "21px",
              }}
            >
              {calcTime(job.startDate, job.endDate)}
              {/* {job.jobTotalPeriod} */}
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                padding: 0,
                color: textColor,
                fontFamily: "Roboto",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "21px",
              }}
            >
              {job.jobExperience}
            </Col>
          </Row>
        </div>
        <p style={{ border: "1px solid #F4F4F4" }}></p>
      </Row>
    );
  };

  return (
    <Row
      style={{
        boxShadow: "0px 10px 30px rgba(113, 123, 133, 0.05)",
        borderRadius: "12px",
        //  backgroundColor:"rgba(242, 243, 245, 0.25);"
        backgroundColor: "#faf9f9",
        margin: "10px 0",
      }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton onClick={() => setExp({})}>
          <Modal.Title>Add Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Job Role..."
                value={exp.jobTitle}
                onChange={expChange}
                name="jobTitle"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company you are working in"
                value={exp.jobCompany}
                onChange={expChange}
                name="jobCompany"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Company Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="company located at..."
                value={exp.jobLocation}
                onChange={expChange}
                name="jobLocation"
              />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="deadline">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder=""
                    name="startDate"
                    value={exp.startDate}
                    onChange={expChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="deadline">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder=""
                    name="endDate"
                    value={exp.endDate}
                    onChange={expChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your experience and learnings"
                onChange={expChange}
                value={exp.jobExperience}
                name="jobExperience"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              setExp({});
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              let newProf = { experience: [...expData, exp] };
              postChange(newProf);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Container style={{ padding: "0px 20px 10px 20px" }}>
        <Row style={{ marginBottom: "15px", paddingTop: "20px" }}>
          <Col
            md={10}
            style={{
              color: textColor,
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Experience
          </Col>
          <Col>
            {" "}
            {edit ? (
              <MdModeEdit cursor={"pointer"} size={25} color={textColor} />
            ) : (
              <></>
            )}
          </Col>
          <Col>
            {" "}
            {edit ? (
              <IoMdAdd
                cursor={"pointer"}
                size={30}
                onClick={handleShow}
                color={textColor}
              />
            ) : (
              <></>
            )}
          </Col>
        </Row>
        <Row>
          {edit ? (
            expData.length > 0 ? (
              expData.map((job, index) => {
                return <ExpCard job={job} index={index} />;
              })
            ) : (
              <>Add Your Education History</>
            )
          ) : (
            <>No Education Information</>
          )}
        </Row>
      </Container>
    </Row>
  );
}

export default Experience;
