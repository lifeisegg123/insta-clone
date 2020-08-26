import React, { useEffect } from "react";
import LoginBox from "./LoginBox";
import SignupLink from "./SignupLink";
import { actions } from "../../../action/user";
import { useDispatch, useSelector } from "react-redux";

import "./LoginMain.css";
import mainImg from "../../../imgs/main.jpg";

function LoginPage() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  function login(id, password) {
    dispatch(actions.requestLogin(id, password));
  }

  return (
    <div className="login">
      <span>
        <img src={mainImg} alt="main" className="login__img" />
      </span>
      <div>
        <span className="login__box">
          <LoginBox loginHandler={login} error={error}></LoginBox>
        </span>
        <span>
          <SignupLink></SignupLink>
        </span>
      </div>
    </div>
  );
}

export default LoginPage;
