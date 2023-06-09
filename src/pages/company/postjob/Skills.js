import React, { useContext, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import { RxCross2 } from "react-icons/rx";

function Skills({ job, changeHandler, setLgShow, setJob }) {
  const { primaryColor } = useContext(ThemeContext);
  const [skill, setSkill] = useState("");
  // const[fileName,setFileName] = useState("Upload Resume")

  const addSkills = (e) => {
    e.preventDefault();
    setJob({
      ...job,
      skills: [...job.skills, skill],
    });
    setSkill("");
  };
  const deleteSkill = (e, id) => {
    e.preventDefault();
    job.skills.splice(id, 1);
    setJob({
      ...job,
      skills: job.skills,
    });
  };
  return (
    <div className="p-4">
      <Form>
        <Form.Group className="mb-3" controlId="companyEmail">
          <Form.Label>Additional Document</Form.Label>
          <Form.Control type="file" name="resume" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Skills Required</Form.Label>
          <Row>
            <Col md={10}>
              <Form.Control
                type="text"
                placeholder=""
                name="skills"
                value={skill}
                onChange={(e) => {
                  setSkill(e.target.value);
                }}
              />
            </Col>
            <Col md={2}>
              <Button type="submit" onClick={addSkills}>
                ADD
              </Button>
            </Col>
          </Row>

          <div
            className="mt-3 mx-3 p-2 px-2"
            style={{
              width: "92%",
              height: "40vh",
              overflowY: "scroll",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          >
            <Row>
              {job.skills.map((skill, index) => (
                <Col key={index} style={{ display: "inline-block" }} md={4}>
                  <div
                    className="p-1 px-3 mt-2"
                    style={{
                      backgroundColor: "rgb(188,118,186,0.7)",
                      alignContent: "space-between",
                      borderRadius: "20px",
                    }}
                  >
                    {skill}
                    <RxCross2
                      className="mb-1"
                      color="black"
                      onClick={(e) => deleteSkill(e, index)}
                      style={{ marginLeft: "10px", cursor: "pointer" }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Form.Group>
        <Button
          className="mx-3"
          variant="primary"
          style={{ backgroundColor: primaryColor, border: "none" }}
          onClick={() => setLgShow(true)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Skills;
