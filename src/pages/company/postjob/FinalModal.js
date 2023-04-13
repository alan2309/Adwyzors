import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import VerifyJob from "./VerifyJob";

function FinalModal({ lgShow, setLgShow, job }) {
  const { primaryColor } = useContext(ThemeContext);
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
          <VerifyJob />
        </Modal.Body>
        <Modal.Footer style={{ height: "10vh" }}>
          <Button style={{ backgroundColor: primaryColor }}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FinalModal;
