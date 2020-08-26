import React from "react";
import SignupBox from "./SignupBox";
import LoginLink from "./LoginLink";
import "./SignupMain.css";
function SignupPage() {
  const sighupHandler = (id, name, nickname, password) => {
    console.log(id, name, nickname, password);
    /*Request Signup*/
  };
  return (
    <div className="signup">
      <div className="signup__box">
        <SignupBox sighupHandler={sighupHandler}></SignupBox>
      </div>
      <div>
        <LoginLink></LoginLink>
      </div>
    </div>
  );
}

export default SignupPage;
