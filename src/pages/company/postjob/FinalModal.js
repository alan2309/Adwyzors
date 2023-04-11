import React from 'react';
import { Modal,Form,Button,Row,Col } from 'react-bootstrap';

function FinalModal({lgShow,setLgShow,job}) {
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
          <Row>
            <Col md={6}>
        <Form>
      <Form.Group className="mb-3" controlId="jobtitle">
        <Form.Label>Job title</Form.Label>
        <Form.Control type="text" placeholder="" name='title' value={job.title}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="companyName">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="text" placeholder="" name='comp_name' value={job.comp_name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="companyEmail">
        <Form.Label>Company Email</Form.Label>
        <Form.Control type="email" placeholder="" name='email' value={job.email}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="location">
        <Form.Label>Company Location</Form.Label>
        <Form.Control type="text" placeholder="" name='location' value={job.location}/>
      </Form.Group>
      <Button variant="primary" style={{backgroundColor:"#FF8628",border:"none"}}>
        Next
      </Button>
    </Form>
    </Col>
    <Col md={6}></Col>
    </Row>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default FinalModal