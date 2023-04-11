import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
import HomeContainer from "../HomeFolder/HomeContainer";
import styles from "./CoverPhoto.module.css";

import { AuthContext } from "../../../context/AuthContext";
import { ThemeContext } from "../../../context/Theme/ThemeContext";

function Profile() {
  const { primaryColor, textColor } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

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
                  <Row>
                    <Col md={3} style={{ margin: 0, paddingRight: "0" }}>
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
                    <Col md={9} style={{ margin: 0, padding: 0 }}>
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
                          #OpenToWork
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
                            {user.fname} {user.lname}
                          </h4>
                          <h4
                            style={{
                              color: textColor,
                              marginBottom: "5px",
                              fontSize: "15px",
                            }}
                          >
                            UI/UX Designer | Student | Winner at XYZ College |
                            Rank 12 All over India
                          </h4>
                        </Col>
                        <Col md={3}>
                          <Row style={{ float: "right", paddingRight: "5%" }}>
                            <Col>
                              <Row>
                                <MdModeEdit size={25} color={textColor} />
                              </Row>
                              <Row>
                                {" "}
                                <Button
                                  style={{
                                    border: "none",
                                    boxShadow:
                                      "0px 10px 30px rgba(113, 123, 133, 0.05)",
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
                                  <FiDownload
                                    size={25}
                                    color={textColor}
                                  ></FiDownload>
                                </Button>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  {/*<UserDetails/>*/}
                  {/*<AboutMe/>*/}
                  <Row
                    style={{
                      boxShadow: "0px 10px 30px rgba(113, 123, 133, 0.05)",
                      borderRadius: "12px",
                      //  backgroundColor:"rgba(242, 243, 245, 0.25);"
                      backgroundColor: "#F2F3F540",
                    }}
                  >
                    <Container style={{ padding: "20px" }}>
                      <Row style={{ marginBottom: "10px" }}>
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
                          Freelance UX/UI designer, 80+ projects in web design,
                          mobile apps (iOS & android) and creative projects.
                          Open to offers.
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
                  {/*<Experience/>*/}
                  {/*<Education/>*/}
                </Container>
              </Container>
            </HomeContainer>
          </Col>
          <Col lg={4} className="p-3 py-4 d-flex flex-column gap-4">
            <HomeContainer>
              <Container className="p-3 px-4 d-flex flex-column gap-3">
                asd
              </Container>
            </HomeContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
