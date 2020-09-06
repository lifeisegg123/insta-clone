import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "293px",
    height: "293px",
  },
  img: {
    position: "relative",
    width: "293px",
    height: "293px",
    "&:hover": {
      filter: "blur(3px)",
    },
    "@media (max-width:990px)": {
      width: "29.8vw",
      height: "29.8vw",
    },
  },
  textDiv: {
    color: "rgba( 0, 0, 0, 0.5 )",
    width: "100%",
    height: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  text: {
    position: "absolute",
    padding: "",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
});
function ImageWrapper({ timeline }) {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);
  const handleMouseOver = (event) => {
    console.log(timeline);
    setIsHover(true);
  };
  const handleMouseLeave = () => setIsHover(false);
  return (
    <div className={classes.root}>
      <img
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        key={`${timeline.timelineKey}`}
        src={timeline.imgs[0]}
        alt={timeline.timelineKey}
        className={classes.img}
      />
      <div className={classes.textDiv}>
        <p className={classes.text}>{timeline.likes}</p>
      </div>
    </div>
  );
}

export default ImageWrapper;
