import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeUser from "./HomeUser";
import HomeContainer from "./HomeContainer";
import Useroptions from "./Useroptions";
import HomeDiscussion from "./HomeDiscussion";

function Home({ changeSection }) {
  useEffect(() => {
    changeSection(0);
  }, [changeSection]);
  return (
    <div className="bg-grey">
      <Container>
        <Row>
          <Col lg={4} className="p-3 d-flex flex-column gap-4">
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
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
