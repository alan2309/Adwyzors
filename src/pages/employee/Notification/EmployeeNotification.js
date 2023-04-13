import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeContainer from "../../common/HomeFolder/HomeContainer";
import styles from "./Notification.module.css";
import Globe from "../../../components/img/globe.svg";
import { SlOptions } from "react-icons/sl";

import { ThemeContext } from "../../../context/Theme/ThemeContext";
const NotiDataEarlier = [
  {
    notiImg: "",
    notiTitle: "You appeared in 9 searches this week",
    notiTime: "12 hrs ago",
  },
  {
    notiImg: "",
    notiTitle: "Audrey Alexander and 10 others viewed your profile",
    notiTime: "12 hrs ago",
  },
];
const NotiDataRecent = [
  {
    notiImg: "",
    notiTitle: "You appeared in 9 searches this week",
    notiTime: "12 hrs ago",
  },
  {
    notiImg: "",
    notiTitle: "Audrey Alexander and 10 others viewed your profile",
    notiTime: "12 hrs ago",
  },
  {
    notiImg: "",
    notiTitle:
      "Eduardo Russel and 4 others liked your post «1,000 connections! My network growth, so many»",
    notiTime: "12 hrs ago",
  },
];

const NotificationCard = ({ noti, index }) => {
  const { textColor } = useContext(ThemeContext);

  return (
    <Row
      className={styles.rowDiv}
      key={index}
      style={{ margin: "5px 0 10px 0", padding: "10px 20px" }}
    >
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
            backgroundImage: `url(${noti.notiImg || Globe})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          id="profile_pic"
        ></div>
      </div>
      <div id={styles.expPicData} style={{ padding: 0, marginBottom: "0px" }}>
        <Row
          style={{
            color: textColor,
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "Roboto",
            lineHeight: "27px",
            marginBottom: "2px",
            paddingTop: "5px",
          }}
        >
          {noti.notiTitle}
        </Row>
        <Row style={{ marginBottom: "3px" }}>
          <Col
            md={2}
            style={{
              padding: 0,
              color: textColor,
              fontFamily: "Roboto",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "18px",
            }}
          >
            {noti.notiTime}
          </Col>
        </Row>
      </div>
      <div
        id={styles.expPicData1}
        style={{
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "10%",
        }}
      >
        <SlOptions size={20} color={textColor} />
      </div>
    </Row>
  );
};
function EmployeeNotification({ changeSection }) {
  const { primaryColor, textColor } = useContext(ThemeContext);

  useEffect(() => {
    changeSection(3);
  }, [changeSection]);
  return (
    <div className="">
      <Container className="px-5">
        <Row className="px-1" style={{ margin: "0 20px" }}>
          <Col lg={4} className="p-3 py-4 d-flex flex-column gap-3">
            {" "}
            <Container
              className={"shadow-sm"}
              style={{
                backgroundColor: primaryColor,
                borderRadius: "22px",
                padding: "15px 30px",
                color: "white",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "21px",
              }}
            >
              NOTIFICATION
            </Container>
            <Container
              className={"shadow-sm"}
              style={{
                backgroundColor: "white",
                borderRadius: "22px",
                padding: "15px 30px",
                color: textColor,
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "21px",
              }}
            >
              NOTIFICATION SETTINGS
            </Container>
          </Col>
          <Col lg={8} className="p-3 py-4 d-flex flex-column gap-4">
            {" "}
            <HomeContainer>
              <Container
                style={{ padding: 0, margin: 0 }}
                className="d-flex flex-column gap-3"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    marginBottom: "2px",
                    marginTop: "8px",
                  }}
                >
                  <span
                    style={{
                      borderBottom: "1px solid rgb(224, 224, 224)",
                      flexGrow: 1,
                      display: "flex",
                    }}
                  />
                  <span
                    style={{
                      margin: "1% 30px",
                      color: "rgb(119, 119, 119)",
                      fontSize: "14px",
                    }}
                  >
                    RECENT
                  </span>
                  <span
                    style={{
                      borderBottom: "1px solid rgb(224, 224, 224)",
                      flexGrow: 1,
                      display: "flex",
                    }}
                  />
                </div>
                <Container style={{ padding: 0, margin: 0 }}>
                  {NotiDataRecent.length > 0 &&
                    NotiDataRecent.map((noti, index) => {
                      return <NotificationCard noti={noti} index={index} />;
                    })}
                </Container>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    marginBottom: "2px",
                    marginTop: "8px",
                  }}
                >
                  <span
                    style={{
                      borderBottom: "1px solid rgb(224, 224, 224)",
                      flexGrow: 1,
                      display: "flex",
                    }}
                  />
                  <span
                    style={{
                      margin: "1% 30px",
                      color: "rgb(119, 119, 119)",
                      fontSize: "14px",
                    }}
                  >
                    EARLIER
                  </span>
                  <span
                    style={{
                      borderBottom: "1px solid rgb(224, 224, 224)",
                      flexGrow: 1,
                      display: "flex",
                    }}
                  />
                </div>
                <Container style={{ padding: 0, margin: 0 }}>
                  {NotiDataEarlier.length > 0 &&
                    NotiDataEarlier.map((noti, index) => {
                      return <NotificationCard noti={noti} index={index} />;
                    })}
                </Container>
              </Container>
            </HomeContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EmployeeNotification;
