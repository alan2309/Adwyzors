import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Globe from "../../../components/img/globe.svg";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import { GoLocation } from "react-icons/go";
import styles2 from "../../common/Job/Job.module.css";

function JobPostings({ myJobs, edit }) {
  const navigate = useNavigate();
  const { textColor } = useContext(ThemeContext);

  const JobCard = ({ job, index }) => {
    return (
      <Row key={index} style={{ cursor: "pointer" }}>
        <div
          id={styles2.expPic}
          style={{
            padding: 0,
            display: "flex",
            justifyContent: "center",
            width: "10%",
          }}
        >
          <div
            className={styles2.jobPic}
            style={{
              backgroundImage: `url(${job.company_pic || Globe})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            id="profile_pic"
          ></div>
        </div>
        <div
          id={styles2.expPicData}
          style={{ padding: 0, marginBottom: "17px" }}
        >
          <Row
            style={{
              color: "#0275B1",
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Roboto",
              lineHeight: "24px",
              marginBottom: "5px",
            }}
          >
            {job.title}
          </Row>
          <Row style={{ marginBottom: "3px" }}>
            <Col
              md={4}
              style={{
                padding: 0,
                color: textColor,
                fontFamily: "Roboto",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "21px",
              }}
            >
              {job.name}
            </Col>
          </Row>
          <Row style={{ color: "grey" }}>
            <Col
              style={{
                padding: 0,
                fontFamily: "Roboto",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "21px",
              }}
            >
              <GoLocation size={13} /> {job.location}
            </Col>
          </Row>
          <Row style={{ marginBottom: "3px" }}>
            <Col
              style={{
                padding: 0,
                color: "#3F5E60",
                fontFamily: "Roboto",
                fontSize: "13px",
                fontWeight: "400",
                lineHeight: "21px",
              }}
            >
              13hrs ago
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
            Jobs Posted
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
                onClick={() => navigate("/postjob")}
              />
            )}
          </Col>
        </Row>
        <Row>
          {myJobs.length > 0 ? (
            myJobs.map((edu, index) => {
              return <JobCard job={edu} index={index} />;
            })
          ) : (
            <>No Jobs Posted</>
          )}
        </Row>
      </Container>
    </Row>
  );
}

export default JobPostings;
