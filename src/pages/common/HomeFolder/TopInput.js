import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import cx from "classnames";
import styles from "./TopInput.module.css";

const TopInput = () => {


  const BottomLinks = () => {
    const links = [
      { name: "Photo", icon: <i className={cx(styles.iconCol, "fa-solid fa-image fa-lg")}></i> },
      { name: "Video", icon: <i className={cx(styles.iconCol, "fa-solid fa-video fa-lg")}></i> },
      { name: "Event", icon: <i className={cx(styles.iconCol, "fa-solid fa-calendar-days fa-lg")}></i> },
      { name: "Article", icon: <i className={cx(styles.iconCol, "fa-solid fa-newspaper fa-lg")}></i> },
    ];

    return (
      <div className='d-flex justify-content-between align-items-center'>
        {
          links.map((item, key) => (
            <Col className='d-flex align-items-center justify-content-center fs-6' key={key}>
              <div className='px-2'>{item.icon}</div>
              <div className='px-2'>{item.name}</div>
            </Col>
          ))
        }
      </div>
    )
  }

  return (
    <Container fluid className='p-0'>

      <Container fluid className={cx(styles.greyTxt, 'd-flex flex-column p-0')}>
        <Row className='d-flex p-3 pb-2 pt-4'>
          <Col lg={1} className='text-end'>
            <i className={cx(styles.iconCol, "fa-solid fa-pen-clip fa-lg")}></i>
          </Col>
          <Col className='w-100'>
            <input placeholder='Write Something...' type="text" className={cx(styles.input, 'w-100 px-3')} />
          </Col>
        </Row>
        <hr />
        <Container fluid className='p-2 pb-4'>
          <BottomLinks />
        </Container>
      </Container>

    </Container>
  )
}

export default TopInput