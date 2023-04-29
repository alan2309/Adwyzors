import React, { useContext, useState } from "react";
import { Col, Container, Row, Button, Modal, Form } from "react-bootstrap";
import { MdModeEdit } from "react-icons/md";
import { ThemeContext } from "../../../context/Theme/ThemeContext";

function AboutMe({ edit, prof, prof2, postChange, profChange, setProf2 }) {
  const { primaryColor, textColor } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Row
      style={{
        boxShadow: "0px 10px 30px rgba(113, 123, 133, 0.05)",
        borderRadius: "12px",
        backgroundColor: "#faf9f9",
        margin: "10px 0",
      }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>About Me</Form.Label>

              <Form.Control
                as="textarea"
                rows={6}
                placeholder={prof2.about}
                value={prof2.about}
                onChange={profChange}
                name="about"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              setProf2({ ...prof });
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              postChange(prof2);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Container style={{ padding: "0px 20px 10px 20px" }}>
        <Row style={{ marginBottom: "10px", paddingTop: "20px" }}>
          <Col
            md={11}
            style={{
              color: textColor,
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            About Me
          </Col>
          <Col>
            {" "}
            {edit ? (
              <MdModeEdit
                cursor={"pointer"}
                size={25}
                color={textColor}
                onClick={handleShow}
              />
            ) : (
              <></>
            )}
          </Col>
        </Row>
        <Row>
          <Col style={{ color: textColor, paddingLeft: "10px" }}>
            {prof.about
                ? prof.about
                : "Write Something About Yourself"
             }
            {/* Freelance UX/UI designer, 80+ projects in web design, mobile apps
            (iOS & android) and creative projects. Open to offers. */}
          </Col>
        </Row>
        <Row>
          <p
            style={{
              padding: 0,
              paddingLeft: "10px",
              color: primaryColor,
              marginBottom: "1px",
              marginTop: "5px",
              fontSize: "14px",
            }}
          >
            {prof.about ? "READ MORE" : ""}
          </p>{" "}
        </Row>
      </Container>
    </Row>
  );
}

export default AboutMe;
