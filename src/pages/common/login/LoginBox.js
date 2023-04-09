import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./Login.module.css";

function loginBox() {
  return (
    <div className={styles.container}>
      <h3>Log In</h3>
      <p>
        new to Adwyzors? <span>signup for free</span>{" "}
      </p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password(8+ characters)*"
          />
        </Form.Group>
        forgot password
        <Button
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "33px",
            backgroundColor: "#3F5E60  ",
          }}
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default loginBox;
