import React, { useContext, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import styles from "./Signup.module.css";
import { ThemeContext } from "../../../context/Theme/ThemeContext";

function SignUpBox() {
  const { primaryColor } = useContext(ThemeContext);

  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const cpassword = useRef();
  const fname = useRef();
  const lname = useRef();
  const username = useRef();

  const submit = (e) => {
    e.preventDefault();
    navigate("/login");
    //toastrFunc("error", "Attempt to log in failed");
  };
  return (
    <div className={styles.container}>
      <h3
        style={{
          textAlign: "center",
          fontFamily: "Poppins",
          margin: "0px 0 20px 0",
        }}
      >
        Register
      </h3>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="username"
            ref={username}
            placeholder="Username*"
            style={{ fontFamily: "Poppins" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="fname"
            ref={fname}
            placeholder="First Name*"
            style={{ fontFamily: "Poppins" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="lname"
            ref={lname}
            placeholder="Last Name*"
            style={{ fontFamily: "Poppins" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            ref={email}
            placeholder="Email address*"
            style={{ fontFamily: "Poppins" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            style={{ fontFamily: "Poppins" }}
            type="password"
            name="password"
            ref={password}
            placeholder="Password*"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            style={{ fontFamily: "Poppins" }}
            type="password"
            name="cpassword"
            ref={cpassword}
            placeholder="Confirm Password*"
          />
        </Form.Group>

        <Button
          style={{
            width: "100%",
            padding: "10px",
            fontFamily: "Poppins",
            borderRadius: "33px",
            backgroundColor: "#3F5E60  ",
            marginTop: "20px",
          }}
          variant="primary"
          type="submit"
        >
          CREATE AN ACCOUNT
        </Button>
        <p
          style={{
            textAlign: "center",
            fontFamily: "Poppins",
            marginTop: "20px",
          }}
        >
          Already have an account?{" "}
          <a href="/login" style={{ color: primaryColor }}>
            Login
          </a>{" "}
        </p>
      </Form>
    </div>
  );
}

export default SignUpBox;
