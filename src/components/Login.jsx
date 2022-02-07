import React from "react";
import LoginForm from "./LoginForm";

function Login({ onLoginSuccess }) {
  return (
    <>
      <h1>Login Page</h1>
      <LoginForm {...{ onLoginSuccess }} />
    </>
  );
}

export default Login;
