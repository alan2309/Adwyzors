import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeContainer from "../HomeFolder/HomeContainer";
import styles from "./CoverPhoto.module.css";

import JobOpportunity from "../Job/JobOpportunity";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import ProfilePicData from "./ProfilePicData";

function Profile() {
  const expdata = [
    {
      jobImg: "",
      jobTitle: "Freelance UX/UI designer",
      jobCompany: "Self Employed",
      jobLocation: "Around the world",
      jobPeriod: "Jun 2016 — Present",
      jobTotalPeriod: "3 yrs 3 mos",
      jobExperience:
        "Work with clients and web studios as freelancer.  Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.",
    },
    {
      jobImg:
        "https://assets-global.website-files.com/603fea6471d9d8559d077603/6092b7514135708162a4be92_Favicon%20256.png",
      jobTitle: "UX/UI designer",
      jobCompany: "Upwork",
      jobLocation: "International",
      jobPeriod: "Jun 2019 — Present",
      jobTotalPeriod: "3 mos",
      jobExperience:
        "New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design, UX research.",
    },
  ];
  const eduData = [
    {
      eduImg: "",
      eduTitle: "Jai Hind College",
      eduType: "Bachelors in Commercial Applications",
      eduPeriod: "2016 — 2018",
      eduGrade: "9.34",
      eduAchievements: "Prize won in XYZ",
    },
    {
      eduImg:
        "https://assets-global.website-files.com/603fea6471d9d8559d077603/6092b7514135708162a4be92_Favicon%20256.png",
      eduTitle: "Jai Hind College",
      eduType: "Bachelors in Commercial Applications",
      eduPeriod: "2019 — 2023",
      eduGrade: "8.67",
      eduAchievements: "Prize won in XYZ",
    },
  ];

  return (
    <div className="">
      <Container className="px-5">
        <Row className="px-1">
          <Col lg={8} className="p-3 py-4 d-flex flex-column gap-4">
            {" "}
            <HomeContainer>
              <Container
                style={{ padding: 0, margin: 0 }}
                className="d-flex flex-column gap-3"
              >
                {/*<CoverPhoto/>*/}

                <div
                  className={styles.top}
                  style={{
                    backgroundImage:
                      "url(https://media.licdn.com/dms/image/D5616AQHy2R5tyt2YUA/profile-displaybackgroundimage-shrink_350_1400/0/1672782784673?e=1686787200&v=beta&t=wFUNxYB_AKXLUFeIfE8TI79DmqYQsLx01S_i0i6a3TU)",
                  }}
                ></div>
                <Container>
                  <ProfilePicData />

                  <AboutMe />
                  <Experience expdata={expdata} />
                  <Education eduData={eduData} />
                </Container>
              </Container>
            </HomeContainer>
          </Col>
          <Col lg={4} className="p-3 py-4 d-flex flex-column gap-4">
            <HomeContainer>
              <Container className="p-3 px-4 d-flex flex-column gap-3">
                <JobOpportunity />
              </Container>
            </HomeContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
