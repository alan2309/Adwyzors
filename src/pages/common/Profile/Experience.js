import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import Globe from "../../../components/img/globe.svg";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import styles from "./CoverPhoto.module.css";

function Experience({ expdata }) {
  const { textColor } = useContext(ThemeContext);

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
              {job.jobPeriod}
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
              {job.jobTotalPeriod}
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
            <MdModeEdit size={25} color={textColor} />
          </Col>
          <Col>
            {" "}
            <IoMdAdd size={30} color={textColor} />
          </Col>
        </Row>
        <Row>
          {expdata.length > 0 &&
            expdata.map((job, index) => {
              return <ExpCard job={job} index={index} />;
            })}
        </Row>
      </Container>
    </Row>
  );
}

export default Experience;
