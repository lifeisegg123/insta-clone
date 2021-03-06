import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import useStyles from "../FormBoxStyles.jsx";

function Login({ loginHandler, error }) {
  const classes = useStyles();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleId = (event) => {
    setId(event.currentTarget.value);
  };
  const handlePassword = (event) => {
    setPassword(event.currentTarget.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    loginHandler(id, password);
  };
  useEffect(() => {
    if (error) {
      alert("error");
      setId("");
      setPassword("");
    }
  }, [error]);

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.header}>Instaclone</h1>
        <form className={classes.form} onSubmit={handleFormSubmit}>
          <TextField
            size="small"
            variant="outlined"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className={classes.textInput}
            required={true}
            value={id}
            onChange={handleId}
          ></TextField>
          <TextField
            size="small"
            variant="outlined"
            placeholder="비밀번호"
            className={classes.textInput}
            type="password"
            required={true}
            value={password}
            onChange={handlePassword}
          ></TextField>
          {id && password ? (
            <Button
              className={classes.button}
              type="submit"
              variant="contained"
              color="primary"
              size="small"
            >
              로그인
            </Button>
          ) : (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              disabled
              size="small"
            >
              로그인
            </Button>
          )}
        </form>
        <div className={classes.divider}>
          <hr className={classes.line}></hr>
          <h5 className={classes.divideText}>또는</h5>
          <hr className={classes.line}></hr>
        </div>
        <Link className={classes.link} to="http://">
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    </>
  );
}

export default Login;
