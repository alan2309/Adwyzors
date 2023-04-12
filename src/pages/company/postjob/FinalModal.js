import React from "react";
import { Modal } from "react-bootstrap";
import JobDesc from "../../common/Job/JobDesc";

function FinalModal({ lgShow, setLgShow, job }) {
  return (
    <div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Confirm Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <JobDesc />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default FinalModal;
