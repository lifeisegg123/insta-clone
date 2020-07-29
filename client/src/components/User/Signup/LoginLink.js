import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../LinkBoxStyles";

function LoginLink() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <p className={classes.text}>계정이 있으신가요?</p>
        <Link className={classes.link} to="/user/login">
          로그인
        </Link>
      </div>
    </div>
  );
}

export default LoginLink;
