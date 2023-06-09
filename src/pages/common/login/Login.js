import React from "react";
import LoginBox from "./LoginBox";
import styles from "./Login.module.css";
import { Col, Row } from "react-bootstrap";
import LoginImg from "../../../components/img/Login.svg";
import Background from "../../../components/img/Background.svg";

function Login() {
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
          <img className={styles.loginimg} src={LoginImg} alt="" />
        </Col>
        <Col>
          {" "}
          <LoginBox />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
