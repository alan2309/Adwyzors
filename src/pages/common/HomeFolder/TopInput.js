import cx from "classnames";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import styles from "./TopInput.module.css";

const TopInput = ({ handleShow }) => {
  const { textColor } = useContext(ThemeContext);

  const BottomLinks = () => {
    const links = [
      {
        name: "Photo",
        icon: <i className={cx(styles.iconCol, "fa-solid fa-image fa-lg")}></i>,
      },
      {
        name: "Video",
        icon: <i className={cx(styles.iconCol, "fa-solid fa-video fa-lg")}></i>,
      },
      {
        name: "Event",
        icon: (
          <i
            className={cx(styles.iconCol, "fa-solid fa-calendar-days fa-lg")}
          ></i>
        ),
      },
      {
        name: "Article",
        icon: (
          <i className={cx(styles.iconCol, "fa-solid fa-newspaper fa-lg")}></i>
        ),
      },
    ];

    return (
      <div className="d-flex justify-content-between align-items-center">
        {links.map((item, key) => (
          <Col
            className="d-flex align-items-center justify-content-center fs-6"
            key={key}
          >
            <div className="px-2">{item.icon}</div>
            <div className="px-2">{item.name}</div>
          </Col>
        ))}
      </div>
    );
  };

  return (
    <Container fluid className="p-0">
      <Container fluid className={cx(styles.greyTxt, "d-flex flex-column p-0")}>
        <Row className="d-flex p-3 pb-2 pt-4">
          <Col
            lg={1}
            className="text-end"
            style={{ display: "flex", alignItems: "center" }}
          >
            <i className={cx(styles.iconCol, "fa-solid fa-pen-clip fa-lg")}></i>
          </Col>
          <Col className="w-100">
            <button
              onClick={handleShow}
              type="button"
              className={cx(styles.input, "w-100 px-3 py-3 text-start")}
              style={{
                borderRadius: "50px",
                backgroundColor: "white",
                borderColor: textColor,
                border: `1px solid ${textColor}`,
                color: textColor,
              }}
            >
              Write Something...
            </button>
          </Col>
        </Row>
        <hr />
        <Container fluid className="p-2 pb-4">
          <BottomLinks />
        </Container>
      </Container>
    </Container>
  );
};

export default TopInput;
