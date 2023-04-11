import React,{useContext} from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { ThemeContext } from "../../../context/Theme/ThemeContext";

function JobForm({job,changeHandler,setSection}) {
  const { primaryColor } = useContext(ThemeContext);
    return (
      <div className='p-4'>
          <Form>
        <Form.Group className="mb-3" controlId="jobtype">
          <Form.Label>Job Type</Form.Label>
          <Form.Control as="select" placeholder="" name='job_type' value={job.job_type} onChange={changeHandler} >
          <option value="on-site">on-site</option>
          <option value="remote">remote</option>
          <option value="hybrid">hybrid</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="salary">
          <Form.Label>Salary</Form.Label>
          <Row>
            <Col md={5}>
            <Form.Range step={1000} min={0} max={10000000} name='salary_min' value={job.salary_min} onChange={changeHandler}/>
          <Form.Control step={1000} min={0} max={10000000} type="number" placeholder="min salary" name='salary_min' value={job.salary_min} onChange={changeHandler} /><br/>
          </Col>
          <Col md={5}>
          <Form.Range step={1000} min={job.salary_min} max={100000000} name='salary_max' value={job.salary_max} onChange={changeHandler}/>
          <Form.Control step={1000} min={job.salary_min} type="number" placeholder="max salary" name='salary_max' value={job.salary_max} onChange={changeHandler} />
          </Col>
          <Col className='pt-3' md={2}><br/>
            CTC</Col>
          </Row>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="Experience">
          <Form.Label>Min Experience</Form.Label>
          <Row>
            <Col md={10}>
          <Form.Control step={0.1} type="number" placeholder="" name='exp' value={job.exp} onChange={changeHandler} />
          </Col>
          <Col className='p-2' md={2}>
            Years
          </Col>
          </Row>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control style={{maxHeight:"12vh"}} as="textarea" placeholder="" name='desc' value={job.desc} onChange={changeHandler} />
        </Form.Group>
        <Button variant="primary" style={{backgroundColor:primaryColor,border:"none"}} onClick={()=>setSection(2)}>
          Next
        </Button>
      </Form>
      </div>
    )
  }

export default JobForm