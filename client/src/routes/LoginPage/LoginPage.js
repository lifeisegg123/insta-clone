import React from "react";
import LoginBox from "../../components/User/Login/LoginBox";
import SignupLink from "../../components/User/Login/SignupLink";

import "./LoginPage.css";
import mainImg from "../../imgs/main.jpg";

function LoginPage() {
  return (
    <div className="login">
      <span>
        <img src={mainImg} alt="main" className="login__img" />
      </span>
      <div>
        <span className="login__box">
          <LoginBox></LoginBox>
        </span>
        <span>
          <SignupLink></SignupLink>
        </span>
      </div>
    </div>
  );
}

export default LoginPage;
