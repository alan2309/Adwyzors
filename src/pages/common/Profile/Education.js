import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import Globe from "../../../components/img/globe.svg";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import styles from "./CoverPhoto.module.css";

function Education({ eduData }) {
  const { textColor } = useContext(ThemeContext);

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
              {edu.eduPeriod}
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
            <MdModeEdit size={25} color={textColor} />
          </Col>
          <Col>
            {" "}
            <IoMdAdd size={30} color={textColor} />
          </Col>
        </Row>
        <Row>
          {eduData.map((edu, index) => {
            return <EduCard edu={edu} index={index} />;
          })}
        </Row>
      </Container>
    </Row>
  );
}

export default Education;
