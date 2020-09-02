import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  comments: {
    width: "100%",
    height: "20px",
    listStyle: "none",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  desc: {
    fontWeight: "normal",
    marginLeft: "5px",
  },
});

function Comment({ nickname, desc }) {
  const classes = useStyles();
  return (
    <li className={classes.comments}>
      <h5>{nickname}</h5>
      <h5 className={classes.desc}>{desc}</h5>
    </li>
  );
}

export default Comment;
