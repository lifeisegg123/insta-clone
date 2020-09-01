import React, { useState } from "react";
import Comment from "./Comment";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import Carousel from "./Carousel";
const useStyles = makeStyles({
  root: {
    listStyle: "none",
    width: "40vw",
    marginTop: "20px",
    backgroundColor: "#ffffff",
    padding: "20px",
  },
  header: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profileImg: {
    width: "30px",
    height: "30px",
  },
  nickname: {
    paddingLeft: "15px",
  },
  likeButton: {
    color: "red",
  },
  comments: {
    padding: "0",
  },
});

function Timeline({
  timelineKey,
  profileImage,
  nickname,
  desc,
  imgs,
  comments,
  likes,
}) {
  const classes = useStyles();
  const [liked, setLiked] = useState(false);
  const handleLiked = (event) => {
    setLiked(!liked);
  };
  return (
    <li key={timelineKey} className={classes.root}>
      <div className={classes.header}>
        <Avatar
          src={profileImage}
          alt={nickname}
          className={classes.profileImg}
        />
        <h5 className={classes.nickname}>{nickname}</h5>
      </div>
      <Carousel imgs={imgs} alt={desc}></Carousel>
      <div>
        <IconButton onClick={handleLiked}>
          {liked ? (
            <FavoriteIcon className={classes.likeButton} />
          ) : (
            <FavoriteBorderIcon />
          )}
          <h6>{likes}</h6>
        </IconButton>
      </div>
      <div>
        <p>{desc}</p>
        <ul className={classes.comments}>
          {comments.map(({ nickname, desc }) => (
            <Comment nickname={nickname} desc={desc} />
          ))}
        </ul>
      </div>
    </li>
  );
}

export default Timeline;
