import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";

import Carousel from "./Carousel";
import Comment from "./Comment";

const useStyles = makeStyles({
  root: {
    listStyle: "none",
    width: "614px",
    marginTop: "20px",
    backgroundColor: "#ffffff",
    padding: "0",
    border: "1px solid #dbdbdb",
  },
  header: {
    marginLeft: "20px",
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
  middleDiv: {
    marginLeft: "15px",
  },
  likeButtonDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "30px",
  },
  likeButton: {
    height: "25px",
    width: "25px",
  },
  likeButtonColor: {
    color: "red",
  },
  likeCounter: {
    marginLeft: "5px",
    fontSize: "10px",
  },
  desc: {
    height: "30px",
    margin: "0",
    fontSize: "15px",
  },
  comments: {
    padding: "0",
  },
  newCommentForm: {
    display: "flex",
    alignItems: "center",
    padding: "5px 0px",
  },
  newCommentTextBox: {
    width: "89%",
  },
  newCommentButton: {
    width: "10%",
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
  addComment,
  handleLikes,
}) {
  const classes = useStyles();
  const [liked, setLiked] = useState(false);
  const handleLiked = (event) => {
    handleLikes(timelineKey, !liked);
    setLiked(!liked);
  };

  const [newComment, setNewComment] = useState("");
  const handleNewComment = (event) => {
    setNewComment(event.currentTarget.value);
  };
  const handleSubmitComment = (event) => {
    event.preventDefault();
    addComment(timelineKey, newComment);
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
      <div className={classes.middleDiv}>
        <div className={classes.likeButtonDiv}>
          <IconButton onClick={handleLiked} className={classes.likeButton}>
            {liked ? (
              <FavoriteIcon className={classes.likeButtonColor} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <h6 className={classes.likeCounter}>{likes}</h6>
        </div>
        <p className={classes.desc}>{desc}</p>
        <ul className={classes.comments}>
          {comments.map(({ nickname, desc }) => (
            <Comment nickname={nickname} desc={desc} />
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmitComment} className={classes.newCommentForm}>
        <TextField
          className={classes.newCommentTextBox}
          size="small"
          variant="outlined"
          placeholder="댓글 달기..."
          required={true}
          value={newComment}
          onChange={handleNewComment}
        />
        {newComment ? (
          <Button
            className={classes.newCommentButton}
            color="primary"
            size="small"
            type="submit"
          >
            게시
          </Button>
        ) : (
          <Button
            className={classes.newCommentButton}
            color="primary"
            disabled
            size="small"
          >
            게시
          </Button>
        )}
      </form>
    </li>
  );
}

export default Timeline;
