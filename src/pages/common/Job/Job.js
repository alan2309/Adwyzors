import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";
import JobOpportunity from "./JobOpportunity";
import JobDesc from "./JobDesc";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import { Form } from "react-bootstrap";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import RoleConstants from "../../../constants/RoleConstants";
import axiosInstance from "../../../axios";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

function MyVerticallyCenteredModal(props) {
  const url = `http://localhost:3000/c/jobs?jobId=${props.id}`;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Share With......
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <WhatsappShareButton url={url}>
          <WhatsappIcon round />
        </WhatsappShareButton>

        <FacebookShareButton
          //  url={url}
          url="www.google.com"
          hashtag={"#hashtag"}
          description={"Job Opening"}
        >
          <FacebookIcon round />
        </FacebookShareButton>

        <TwitterShareButton
          title={"Job Opening at"}
          url={url}
          hashtags={["hashtag1", "hashtag2"]}
        >
          <TwitterIcon round />
        </TwitterShareButton>
      </Modal.Body>
    </Modal>
  );
}

function Job({ changeSection }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(0);
  const [index, setIndex] = useState(0);
  const [jobs, setJobs] = useState([]);
  const { primaryColor, textColor } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    changeSection(1);
    const data = async () =>
      await axiosInstance.get("/jobs/all").then((res) => {
        setJobs(res.data);
      });
    data();
  }, [changeSection]);

  const viewJob = (id) => {
    setIndex(id);
  };
  return (
    <div>
      <MyVerticallyCenteredModal
        show={modalShow}
        id={jobs[index]._id}
        onHide={() => setModalShow(false)}
      />
      <Row className="mt-3 mb-2 d-flex justify-content-center">
        <Col className="d-flex justify-content-between" md={3}>
          <Button
            style={{
              backgroundColor: active ? "white" : primaryColor,
              border: "none",
              color: active ? textColor : "white",
            }}
            onClick={() => setActive(false)}
          >
            Search Jobs
          </Button>
          <Button
            onClick={() => setActive(true)}
            style={{
              backgroundColor: active ? primaryColor : "white",
              border: "none",
              color: active ? "white" : textColor,
              display:
                user.userRole !== RoleConstants.EMPLOYEE ? "block" : "none",
            }}
          >
            My Postings
          </Button>
        </Col>

        <Col md={6} style={{ display: active ? "none" : "block" }}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              style={{
                borderColor: primaryColor,
                color: hover ? "white" : primaryColor,
                backgroundColor: hover ? primaryColor : "white",
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Search
            </Button>
          </Form>
        </Col>
        <Col md={4}>
          <div style={{ display: active ? "block" : "none" }}></div>
        </Col>
        <Col md={2}>
          <Button
            style={{
              borderColor: primaryColor,
              color: hover ? "white" : primaryColor,
              backgroundColor: hover ? primaryColor : "white",
              display: active ? "block" : "none",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => navigate("/postjob")}
          >
            Post a Job
          </Button>
        </Col>
      </Row>
      {jobs.length !== 0 ? (
        <Row className="mx-2 mt-1 d-flex justify-content-center">
          <Col
            className="mx p-2 bg-white"
            style={{ borderRadius: "15px" }}
            md={3}
          >
            <JobOpportunity jobs={jobs} viewJob={viewJob} />
          </Col>
          <Col md={6}>
            <JobDesc setModalShow={setModalShow} job={jobs[index]} />
          </Col>
        </Row>
      ) : (
        <>No Jobs Posted Yet</>
      )}
    </div>
  );
}

export default Job;
