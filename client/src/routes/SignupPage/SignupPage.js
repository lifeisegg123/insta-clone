import React from "react";
import SignupBox from "../../components/User/Signup/SignupBox";
import LoginLink from "../../components/User/Signup/LoginLink";
import "./SignupPage.css";
function SignupPage() {
  return (
    <div className="signup">
      <div className="signup__box">
        <SignupBox></SignupBox>
      </div>
      <div>
        <LoginLink></LoginLink>
      </div>
    </div>
  );
}

export default SignupPage;
