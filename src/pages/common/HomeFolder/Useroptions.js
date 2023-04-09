import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "./Useroptions.module.css";
import cx from "classnames";

const Useroptions = () => {

  const options = [
    { icon: <i className="fa-solid fa-chart-bar fa-lg"></i>, name: "Insights" },
    { icon: <i className="fa-solid fa-bookmark fa-lg"></i>, name: "Bookmarks" },
    { icon: <i className="fa-solid fa-gear fa-lg"></i>, name: "Settings" },
  ];

  return (
    <Container className='p-3 px-4'>
      {
        options.map((item, key) => (
          <Row key={key} className={cx('py-1', styles.objCol)}>
            <Col lg={1} className='py-1'>
              {item.icon}
            </Col>
            <Col className='d-flex align-items-center'>
              <div className='ps-2'>
                {item.name}
              </div>
            </Col>
          </Row>
        ))
      }
    </Container>
  )
}

export default Useroptions