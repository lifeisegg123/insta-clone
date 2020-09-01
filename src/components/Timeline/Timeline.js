import React from "react";
import Comment from "./Comment";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    listStyle: "none",
    width: "100%",
  },
  header: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },

});

function Timeline({ timelineKey, profileImage, nickname, imgs, comments }) {
  const classes = useStyles();
  return (
    <li key={timelineKey} className={classes.root}>
      <div className={classes.header}>
        <Avatar src={profileImage} alt={nickname} />
        <h3>{nickname}</h3>
      </div>
      <ul>
        {/* {comments.map(({ nickname, desc }) => (
        <Comment nickname={nickname} desc={desc} />
      ))} */}
      </ul>
    </li>
  );
}

export default Timeline;
