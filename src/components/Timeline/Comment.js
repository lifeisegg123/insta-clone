import React from "react";

function Comment({ nickname, desc }) {
  return (
    <li>
      <h2>{nickname}</h2>
      <h5>{desc}</h5>
    </li>
  );
}

export default Comment;
