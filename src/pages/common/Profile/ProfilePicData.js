import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
import { AuthContext } from "../../../context/AuthContext";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import styles from "./CoverPhoto.module.css";

function ProfilePicData() {
  const { primaryColor, textColor } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  return (
    <Row>
      <Col
        id={styles.proCol}
        md={4}
        lg={3}
        style={{ margin: 0, paddingRight: "0" }}
      >
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
      <Col
        id={styles.proColData}
        md={8}
        lg={9}
        style={{ margin: 0, padding: 0 }}
      >
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
              UI/UX Designer | Student | Winner at XYZ College | Rank 12 All
              over India
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
                      boxShadow: "0px 10px 30px rgba(113, 123, 133, 0.05)",
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
                    <FiDownload size={25} color={textColor}></FiDownload>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ProfilePicData;
