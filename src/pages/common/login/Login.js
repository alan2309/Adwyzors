import React from "react";
import LoginBox from "./LoginBox";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.main}>
      <img className={styles.back_img} src={require("./login.png")} alt="" />
      <LoginBox />
    </div>
  );
}

export default Login;
