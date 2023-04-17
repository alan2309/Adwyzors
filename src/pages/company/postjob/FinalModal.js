import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import VerifyJob from "./VerifyJob";
import { postJobCall } from "../../../apiCalls";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function FinalModal({ lgShow, setLgShow, job }) {
  const { primaryColor } = useContext(ThemeContext);
  const { dispatch, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    // title: null,
    // comp_name: null,
    // comp_web: null,
    // exp: 0,
    // location: null,
    // email: null,
    // job_type: null,
    // skills: ["frontend", "backend", "ui/ux", "cyber-sec"],
    // salary_min: 0,
    // salary_max: 0,
    // deadline: null,
    // desc: null,
    // pdf: null,

    let data = {
      title: job.title,
      company_link: job.comp_web,
      company_id: user._id,
      company_pic: user.profilePicture,
      desc: job.desc,
      ctc: `${job.salary_min}-${job.salary_max}`,
      skills: job.skills,
      experience: job.exp,
      location: job.location,
      email: user.email,
      job_type: job.job_type,
      deadline: job.deadline,
      pdf: "testtt",
    };
    console.log(data);
    const err = await postJobCall(data, dispatch);
    if (!err) {
      alert("success");
      navigate("/c/jobs");
    } else {
      alert(err);
      console.log(err);
    }
  };
  return (
    <div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header style={{ height: "10vh" }} closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Confirm Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <VerifyJob job={job} />
        </Modal.Body>
        <Modal.Footer style={{ height: "10vh" }}>
          <Button
            style={{ backgroundColor: primaryColor }}
            onClick={submitHandler}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FinalModal;
