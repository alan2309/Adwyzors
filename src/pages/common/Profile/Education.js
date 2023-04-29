import React, { useContext, useState } from "react";
import { Col, Container, Row, Modal, Button, Form } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import Globe from "../../../components/img/globe.svg";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import styles from "./CoverPhoto.module.css";

function Education({ eduData, edit, postChange }) {
  const { textColor } = useContext(ThemeContext);
  const [show, setShow] = useState(false);
  const [edu, setEdu] = useState({
    eduImg: null,
    eduTitle: null,
    eduType: null,
    startDate: null,
    endDate: null,
    eduGrade: null,
    eduAchievements: null,
  });
  const eduChange = (e) => {
    setEdu({ ...edu, [e.target.name]: e.target.value });
  };

  const eduTimeline = (start, end) => {
    let d1 = new Date(start);
    let d2 = new Date(end);
    return `${d1.getFullYear()} - ${d2.getFullYear()}`;
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const EduCard = ({ edu, index }) => {
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
              backgroundImage: `url(${edu.eduImg || Globe})`,
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
            {edu.eduTitle}
          </Row>
          <Row style={{ marginBottom: "3px" }}>
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
              {edu.eduType}
            </Col>
          </Row>
          <Row style={{ marginBottom: "5px" }}>
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
              {eduTimeline(edu.startDate, edu.endDate)}
            </Col>
            <Col
              md={2}
              style={{
                padding: 0,
                color: "#0275B1",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "21px",
              }}
            >
              Grade: {edu.eduGrade}
              {edu.eduGrade > 10 ? "%" : ""}
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
              {edu.eduAchievements}
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
        <Modal.Header closeButton onClick={() => setEdu({})}>
          <Modal.Title>Add Education</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Institute Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Institute enrolled in..."
                value={edu.eduTitle}
                onChange={eduChange}
                name="eduTitle"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Degree</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: BTech-IT"
                value={edu.eduType}
                onChange={eduChange}
                name="eduType"
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
                    value={edu.startDate}
                    onChange={eduChange}
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
                    value={edu.endDate}
                    onChange={eduChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Marks/Grade</Form.Label>
              <Form.Control
                type="number"
                step="0.1"
                placeholder="Eg:7.5 or 80%"
                value={edu.eduGrade}
                onChange={eduChange}
                name="eduGrade"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your learnings and achievments"
                onChange={eduChange}
                value={edu.eduAchievements}
                name="eduAchievements"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              setEdu({});
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              let newProf = { education: [...eduData, edu] };
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
            Education
          </Col>
          <Col>
            {" "}
            {edit && (
              <MdModeEdit size={25} color={textColor} cursor={"pointer"} />
            )}
          </Col>
          <Col>
            {" "}
            {edit && (
              <IoMdAdd
                size={30}
                color={textColor}
                cursor={"pointer"}
                onClick={() => handleShow(true)}
              />
            )}
          </Col>
        </Row>
        <Row>
          {
            eduData.length > 0 ? (
              eduData.map((edu, index) => {
                return <EduCard edu={edu} index={index} />;
              })
            ) : (
              <>Add Your Education History</>
            ) 
          }
        </Row>
      </Container>
    </Row>
  );
}

export default Education;
