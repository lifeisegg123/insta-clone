import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import useStyles from "../FormBoxStyles.jsx";

function Login() {
  const classes = useStyles();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onChangeIdHandler = (event) => {
    setId(event.currentTarget.value);
  };
  const onChangePasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(id, password);
    /* Request Login */
  };

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.header}>Instagram</h1>
        <form className={classes.form} onSubmit={onSubmitHandler}>
          <TextField
            size="small"
            variant="outlined"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className={classes.textInput}
            required={true}
            value={id}
            onChange={onChangeIdHandler}
          ></TextField>
          <TextField
            size="small"
            variant="outlined"
            placeholder="비밀번호"
            className={classes.textInput}
            type="password"
            required={true}
            value={password}
            onChange={onChangePasswordHandler}
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
