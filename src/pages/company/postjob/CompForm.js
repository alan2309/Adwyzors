import React,{useContext} from 'react';
import { Button, Form } from 'react-bootstrap';
import { ThemeContext } from "../../../context/Theme/ThemeContext";

function CompForm({job,changeHandler,setSection}) {
  const { primaryColor } = useContext(ThemeContext);
  return (
    <div className='p-2 pt-0'>
        <Form>
      <Form.Group className="mb-3" controlId="jobtitle">
        <Form.Label>Job title</Form.Label>
        <Form.Control type="text" placeholder="" name='title' value={job.title} onChange={changeHandler} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="companyName">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="text" placeholder="" name='comp_name' value={job.comp_name} onChange={changeHandler} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="companyEmail">
        <Form.Label>Company Email</Form.Label>
        <Form.Control type="email" placeholder="" name='email' value={job.email} onChange={changeHandler} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="location">
        <Form.Label>Company Location</Form.Label>
        <Form.Control type="text" placeholder="" name='location' value={job.location} onChange={changeHandler} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="deadline">
        <Form.Label>Application Deadline</Form.Label>
        <Form.Control type="date" placeholder="" name='deadline' value={job.deadline} onChange={changeHandler} />
      </Form.Group>
      <Button variant="primary" style={{backgroundColor:primaryColor,border:"none"}} onClick={()=>setSection(1)}>
        Next
      </Button>
    </Form>
    </div>
  )
}

export default CompForm