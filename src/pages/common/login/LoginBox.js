import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import React, { useContext, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { loginCall } from "../../../apiCalls";
import { AuthContext } from "../../../context/AuthContext";
import { ThemeContext } from "../../../context/Theme/ThemeContext";
import styles from "./Login.module.css";

function LoginBox() {
  const { primaryColor } = useContext(ThemeContext);
  const navigate = useNavigate();
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID_API_KEY;
  const email = useRef();
  const password = useRef();
  const { dispatch } = useContext(AuthContext);
  const responseGoogle = async (res) => {
    let profileObj = await jwt_decode(res.credential);
    console.log(profileObj);
    alert("Success,data in console");
    //navigate("/signup", { state: { data: profileObj } });
  };

  const responseError = (res) => {
    console.log(res);
    if (res.error === "idpiframe_initialization_failed") return;
    alert("Attempt to log in failed");
    //toastrFunc("error", "Attempt to log in failed");
  };
  const submit = async (e) => {
    e.preventDefault();
    const err = await loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    if (!err) {
      navigate("/home");
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
        Log In
      </h3>
      <Form onSubmit={submit}>
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
            ref={password}
            name="password"
            placeholder="Password*"
          />
        </Form.Group>
        <a style={{ fontFamily: "Poppins", color: primaryColor }} href="/">
          Forgot password
        </a>
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
          LOG IN
        </Button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <span
            style={{
              borderBottom: "1px solid rgb(224, 224, 224)",
              flexGrow: 1,
              display: "flex",
            }}
          />
          <span
            style={{
              margin: "3% 6px",
              color: "rgb(119, 119, 119)",
              fontSize: "14px",
            }}
          >
            OR
          </span>
          <span
            style={{
              borderBottom: "1px solid rgb(224, 224, 224)",
              flexGrow: 1,
              display: "flex",
            }}
          />
        </div>
        <p style={{ textAlign: "center", fontFamily: "Poppins" }}>
          New to Adwyzors?{" "}
          <a href="/signup" style={{ color: primaryColor }}>
            Signup for free
          </a>{" "}
        </p>

        <div
          style={{
            margin: "10px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
              type="icon"
              size="large"
              text="Google"
              onSuccess={responseGoogle}
              onError={responseError}
            />
          </GoogleOAuthProvider>
        </div>
      </Form>
    </div>
  );
}

export default LoginBox;
