import cx from "classnames";
import React, { useContext, useState } from "react";
import { Button, Form, Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router";
import { signInCall } from "../../../apiCalls";
import { AuthContext } from "../../../context/AuthContext";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import styles from "./Signup.module.css";

function SignUpBox() {
  const { primaryColor } = useContext(ThemeContext);
  const { dispatch } = useContext(AuthContext);
  const [isIndividual, setIsIndividual] = useState(0);
  const [form, setForm] = useState({
    email: "",
    password: "",
    cpassword: "",
    fname: "",
    cname: "",
    lname: "",
    username: "",
    isIndividual: isIndividual,
  });
  const navigate = useNavigate();

  const onChangeForm = (e) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (form.password !== form.cpassword) {
      alert("password doesnt match");
      return;
    }
    e.preventDefault();
    const err = await signInCall(form, dispatch);
    if (!err) {
      alert("Success");
      navigate("/login");
    } else {
      console.log(err);
      alert(err.response.data.message);
    }
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

      <Tabs
        fill
        defaultActiveKey={isIndividual}
        className={cx(styles.myClass, "mb-3")}
        onSelect={(e) => {
          setIsIndividual(e);
        }}
      >
        <Tab eventKey={0} title="Individual">
          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="iusername">
              <Form.Control
                type="text"
                name="username"
                onChange={onChangeForm}
                placeholder="Username*"
                style={{ fontFamily: "Poppins" }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ifname">
              <Form.Control
                type="text"
                name="fname"
                onChange={onChangeForm}
                placeholder="First Name*"
                style={{ fontFamily: "Poppins" }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ilname">
              <Form.Control
                type="text"
                name="lname"
                onChange={onChangeForm}
                placeholder="Last Name*"
                style={{ fontFamily: "Poppins" }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="iformBasicEmail">
              <Form.Control
                type="email"
                name="email"
                onChange={onChangeForm}
                placeholder="Email address*"
                style={{ fontFamily: "Poppins" }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="iformBasicPassword">
              <Form.Control
                style={{ fontFamily: "Poppins" }}
                type="password"
                name="password"
                onChange={onChangeForm}
                placeholder="Password*"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="iformBasicCPassword">
              <Form.Control
                style={{ fontFamily: "Poppins" }}
                type="password"
                name="cpassword"
                onChange={onChangeForm}
                placeholder="Confirm Password*"
                required
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
          </Form>
        </Tab>
        <Tab eventKey={1} title="Company">
          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Control
                type="text"
                name="username"
                onChange={onChangeForm}
                placeholder="Username*"
                style={{ fontFamily: "Poppins" }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fname">
              <Form.Control
                type="text"
                name="cname"
                onChange={onChangeForm}
                placeholder="Company Name*"
                style={{ fontFamily: "Poppins" }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                onChange={onChangeForm}
                placeholder="Company Email address*"
                style={{ fontFamily: "Poppins" }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                style={{ fontFamily: "Poppins" }}
                type="password"
                name="password"
                onChange={onChangeForm}
                placeholder="Password*"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCPassword">
              <Form.Control
                style={{ fontFamily: "Poppins" }}
                type="password"
                name="cpassword"
                onChange={onChangeForm}
                placeholder="Confirm Password*"
                required
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
          </Form>
        </Tab>
      </Tabs>

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
    </div>
  );
}

export default SignUpBox;
