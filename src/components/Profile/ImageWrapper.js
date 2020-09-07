import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "293px",
    height: "293px",
    "@media (max-width:990px)": {
      width: "29.8vw",
      height: "29.8vw",
    },
  },
  img: {
    position: "relative",
    width: "293px",
    height: "293px",
    "@media (max-width:990px)": {
      width: "29.8vw",
      height: "29.8vw",
    },
  },
  hoverBackground: {
    margin: "0",
    padding: "0",
    backgroundColor: "rgba( 0, 0, 0, 0.3 )",
    width: "100%",
    height: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(0%, -102%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    listStyle: "none",
  },
  textContainer: {
    width: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  listItem: {
    width: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
function ImageWrapper({ timeline }) {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);
  const handleMouseOver = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);
  return (
    <div
      className={classes.root}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <img
        key={`${timeline.timelineKey}`}
        src={timeline.imgs[0]}
        alt={timeline.timelineKey}
        className={classes.img}
      />
      {isHover && (
        <ul className={classes.hoverBackground}>
          <div className={classes.textContainer}>
            <li className={classes.listItem}>
              <FavoriteIcon />
              <p>{timeline.likes}</p>
            </li>
            <li className={classes.listItem}>
              <ChatBubbleIcon />
              <p>{timeline.comments.length}</p>
            </li>
          </div>
        </ul>
      )}
    </div>
  );
}

export default ImageWrapper;
