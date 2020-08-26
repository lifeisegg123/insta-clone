import React, { useEffect } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import LoginMain from "./components/User/Login/LoginMain";
import SignupMain from "./components/User/Signup/SignupMain";
import Footer from "./components/Footer/Footer";

import { useSelector } from "react-redux";

function Router() {
  const isLogin = useSelector((state) => state.user.isLogin);

  return (
    <>
      <BrowserRouter>
        <Route path="/" component={Footer}></Route>
        <Route path="/user" component={Footer}></Route>
        <Route path="/user/login" component={LoginMain}></Route>
        <Route path="/user/signup" component={SignupMain}></Route>
        {isLogin ? <Redirect to="/" /> : <Redirect to="/user/login" />}
      </BrowserRouter>
    </>
  );
}

export default Router;
