import cx from "classnames";
import React from "react";
import { Col, Container } from "react-bootstrap";
import styles from "./HomeChat.module.css";

const HomeChat = () => {
  return (
    <Container className={cx("p-3 px-4", styles.mainCont)}>
      <Col lg={1} className="py-1"></Col>
      <Col className="d-flex align-items-center">
        <div className="ps-4">Hello</div>
      </Col>
    </Container>
  );
};

export default HomeChat;
