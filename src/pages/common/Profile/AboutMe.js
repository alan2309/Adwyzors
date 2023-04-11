import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdModeEdit } from "react-icons/md";
import { ThemeContext } from "../../../context/Theme/ThemeContext";

function AboutMe() {
  const { primaryColor, textColor } = useContext(ThemeContext);

  return (
    <Row
      style={{
        boxShadow: "0px 10px 30px rgba(113, 123, 133, 0.05)",
        borderRadius: "12px",
        backgroundColor: "#faf9f9",
        margin: "10px 0",
      }}
    >
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
            <MdModeEdit size={25} color={textColor} />
          </Col>
        </Row>
        <Row>
          <Col style={{ color: textColor, paddingLeft: "10px" }}>
            Freelance UX/UI designer, 80+ projects in web design, mobile apps
            (iOS & android) and creative projects. Open to offers.
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
            READ MORE
          </p>{" "}
        </Row>
      </Container>
    </Row>
  );
}

export default AboutMe;
