import React from "react";
import { Col, Row } from "react-bootstrap";
import Background from "../../../components/img/Background.svg";
import LoginImg from "../../../components/img/Login.svg";
import SignUpBox from "./SignUpBox";
import styles from "./Signup.module.css";

function Signup() {
  return (
    <div
      style={{
        padding: "0 120px",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Row style={{}}>
        <Col>
          <img className={styles.signupimg} src={LoginImg} alt="" />
        </Col>
        <Col>
          {" "}
          <SignUpBox />
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
