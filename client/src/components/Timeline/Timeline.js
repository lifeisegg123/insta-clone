import React from "react";
import Comment from "./Comment";
import Avatar from "@material-ui/core/Avatar";

function Timeline({ profileImage, nickname, imgs, comments }) {
  return (
    <div>
      <div>
        <Avatar src={profileImage} alt={nickname} />
        <h3>{nickname}</h3>
      </div>

      {comments.map(({ nickname, desc }) => (
        <Comment nickname={nickname} desc={desc} />
      ))}
    </div>
  );
}

export default Timeline;
