import React, { useContext, useState } from "react";
import { Button, Col, Row, Modal, Form } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import styles from "./CoverPhoto.module.css";

function ProfilePicData({
  edit,
  prof,
  prof2,
  postChange,
  profChange,
  setProf2,
}) {
  const { primaryColor, textColor } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                {prof.cname ? "Display Name" : "First Name"}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={prof2.cname ? prof2.cname : prof2.fname}
                value={prof2.cname ? prof2.cname : prof2.fname}
                onChange={profChange}
                name={prof2.cname ? "cname" : "fname"}
                autoFocus
              />
            </Form.Group>
            {prof2.cname && prof2.fname === undefined ? (
              <></>
            ) : (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lname"
                  placeholder={prof2.lname}
                  onChange={profChange}
                  value={prof2.lname}
                />
              </Form.Group>
            )}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="desc"
                rows={3}
                placeholder={prof2.desc}
                onChange={profChange}
                value={prof2.desc}
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
      <Col
        id={styles.proCol}
        md={4}
        lg={3}
        style={{ margin: 0, paddingRight: "0" }}
      >
        {" "}
        <div
          className={styles.pic}
          style={{
            backgroundImage:
              "url(https://media.licdn.com/dms/image/C5603AQERTD_EeJiGlA/profile-displayphoto-shrink_800_800/0/1661816468423?e=1686787200&v=beta&t=J5x0Fk6u_DyXGtgnQqh8vAjPXf1WLylDATD07O7NeMg)",
          }}
          id="profile_pic"
        ></div>
      </Col>
      <Col
        id={styles.proColData}
        md={8}
        lg={9}
        style={{ margin: 0, padding: 0 }}
      >
        <Row style={{ margin: 0, padding: 0 }}>
          <p
            style={{
              padding: 0,
              color: primaryColor,
              marginBottom: "1px",
              marginTop: "5px",
              fontSize: "14px",
            }}
          >
            {" "}
            {prof.isOpenToWork ? "#OpenToWork" : ""}
          </p>
          <Col md={9} style={{ margin: 0, padding: 0 }}>
            <h4
              style={{
                color: textColor,
                marginBottom: "8px",
                fontSize: "24px",
                fontWeight: "bolder",
              }}
            >
              {prof.cname ? prof.cname : prof.fname + " " + prof.lname}
            </h4>
            <h4
              style={{
                color: textColor,
                marginBottom: "5px",
                fontSize: "15px",
              }}
            >
              {prof.desc ? prof.desc : "Write a Caption...."}
            </h4>
          </Col>
          <Col md={3}>
            <Row
              style={{ float: "right", paddingRight: "5%", cursor: "pointer" }}
            >
              <Col>
                <Row>
                  {edit ? (
                    <MdModeEdit
                      size={25}
                      color={textColor}
                      onClick={handleShow}
                    />
                  ) : (
                    <></>
                  )}
                </Row>
                <Row>
                  {" "}
                  <Button
                    style={{
                      border: "none",
                      boxShadow: "0px 10px 30px rgba(113, 123, 133, 0.05)",
                      borderRadius: "12px",
                      color: textColor,
                      margin: "8px 0",
                      backgroundColor: "white",
                      width: "100%",
                      position: "relative",
                    }}
                    type="button"
                    className="btn btn-block"
                  >
                    <FiDownload size={25} color={textColor}></FiDownload>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ProfilePicData;
