import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../LinkBoxStyles";

function SignupLink() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <p className={classes.text}>계정이 없으신가요?</p>
        <Link className={classes.link} to="/user/signup">
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default SignupLink;
