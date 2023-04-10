import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeUser from "./HomeFolder/HomeUser";
import HomeContainer from "./HomeFolder/HomeContainer";
import Useroptions from "./HomeFolder/Useroptions";
import HomeDiscussion from "./HomeFolder/HomeDiscussion";
import TopInput from "./HomeFolder/TopInput";

function Home() {
  return (
    <div className="bg-grey">
      <Container>
        <Row>
          <Col lg={4}
            className="p-3 py-4 d-flex flex-column gap-4"
          >
            <HomeContainer>
              <HomeUser />
            </HomeContainer>

            <HomeContainer>
              <Useroptions />
            </HomeContainer>

            <HomeContainer>
              <HomeDiscussion />
            </HomeContainer>
          </Col>

          <Col className="p-3 d-flex flex-column gap-4">

            <HomeContainer>
              <TopInput />
            </HomeContainer>

            <HomeContainer>
              <TopInput />
            </HomeContainer>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
