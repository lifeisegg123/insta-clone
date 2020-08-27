import React from "react";

function Comment({ nickname, desc }) {
  return (
    <div>
      <h2>{nickname}</h2>
      <h5>{desc}</h5>
    </div>
  );
}

export default Comment;
