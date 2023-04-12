import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import Globe from "../../../components/img/globe.svg";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import styles from "./Job.module.css";

const jobdata = [
  {
    jobImg:
      "https://media.licdn.com/dms/image/C560BAQE9wp87-KDfwg/company-logo_100_100/0/1657054972290?e=1689206400&v=beta&t=ZSewmc1etlM4cn7RNGjJ6GUqtt2gYrWx1_bteolA4wU",
    jobTitle: "Back-end Software Engineer",
    jobCompany: "Think360",
    jobLocation: "Remote",
    jobPostedAgo: "3 hrs ago",
  },
  {
    jobImg:
      "https://media.licdn.com/dms/image/C560BAQGzaKzBYzdDvw/company-logo_100_100/0/1656682279077?e=1689206400&v=beta&t=LyK_bdRUVUh7OttEL5CO3VUyt09EqXKyFtyu-xXivEg",
    jobTitle: "UX/UI designer",
    jobCompany: "Upwork",
    jobLocation: "Mumbai, Maharashtra, India",
    jobPostedAgo: "13 hrs ago",
  },
  {
    jobImg:
      "https://media.licdn.com/dms/image/C560BAQE9wp87-KDfwg/company-logo_100_100/0/1657054972290?e=1689206400&v=beta&t=ZSewmc1etlM4cn7RNGjJ6GUqtt2gYrWx1_bteolA4wU",
    jobTitle: "Back-end Software Engineer",
    jobCompany: "Think360",
    jobLocation: "Remote",
    jobPostedAgo: "3 hrs ago",
  },
  {
    jobImg:
      "https://media.licdn.com/dms/image/C560BAQGzaKzBYzdDvw/company-logo_100_100/0/1656682279077?e=1689206400&v=beta&t=LyK_bdRUVUh7OttEL5CO3VUyt09EqXKyFtyu-xXivEg",
    jobTitle: "UX/UI designer",
    jobCompany: "Upwork",
    jobLocation: "Mumbai, Maharashtra, India",
    jobPostedAgo: "13 hrs ago",
  },
];

const JobCard = ({ job, index }) => {
  const { textColor } = useContext(ThemeContext);

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
      <div id={styles.expPicData} style={{ padding: 0, marginBottom: "17px" }}>
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
          {job.jobTitle}
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
            {job.jobCompany}
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
            <GoLocation size={13} /> {job.jobLocation}
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
            {job.jobPostedAgo}
          </Col>
        </Row>
      </div>
      <p style={{ border: "1px solid #F4F4F4" }}></p>
    </Row>
  );
};

function JobOpportunity() {
  const { primaryColor } = useContext(ThemeContext);
  return (
    <Row>
      <Row
        style={{
          backgroundColor: primaryColor,
          borderRadius: "12px 12px 0 0",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "white",
            fontWeight: "500",
            textAlign: "center",
            margin: 0,
            padding: "10px 0",
          }}
        >
          Job Opportunities
        </p>
      </Row>
      <Row
        style={{
          height: "67vh",
          overflowY: "scroll",
          scrollbarColor: "white",
          margin: "10px",
          padding: "5px 0 0px 0",
        }}
      >
        {jobdata.length > 0 &&
          jobdata.map((job, index) => {
            return <JobCard job={job} index={index} />;
          })}
      </Row>
    </Row>
  );
}

export default JobOpportunity;
