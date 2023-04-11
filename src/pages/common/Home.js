import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeContainer from "./HomeFolder/HomeContainer";
import HomeDiscussion from "./HomeFolder/HomeDiscussion";
import HomeFeed from "./HomeFolder/HomeFeed";
import HomeUser from "./HomeFolder/HomeUser";
import TopInput from "./HomeFolder/TopInput";
import Useroptions from "./HomeFolder/Useroptions";

function Home() {
  return (
    <div className="">
      <Container className="px-5">
        <Row className="px-5">
          <Col lg={4} className="p-3 py-4 d-flex flex-column gap-4">
            <HomeContainer>
              <HomeUser />
            </HomeContainer>

            <div
              className="sticky-top d-flex flex-column gap-4"
              style={{ top: "6rem" }}
            >
              <HomeContainer>
                <Useroptions />
              </HomeContainer>

              <HomeContainer>
                <HomeDiscussion />
              </HomeContainer>
            </div>

            {/* <div className={cx(styles.fixedBottom)} style={{ width: "22.55%" }}>
              <div className={cx(styles.bottomDiv, "bg-white shadow-lg")}>
                <HomeChat />
              </div>
            </div> */}
          </Col>

          {/* Right Home Side */}

          <Col className="p-3 py-4 d-flex flex-column gap-4">
            <HomeContainer>
              <TopInput />
            </HomeContainer>

            <HomeFeed />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
