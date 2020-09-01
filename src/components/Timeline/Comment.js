import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  comments: {
    width: "100%",
    listStyle: "none",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

function Comment({ nickname, desc }) {
  const classes = useStyles();
  return (
    <li className={classes.comments}>
      <h5>{nickname}</h5>
      <h5>{desc}</h5>
    </li>
  );
}

export default Comment;
