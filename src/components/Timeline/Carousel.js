import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { ArrowBack, ArrowForward } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  container: { position: "relative" },
  img: {
    width: "100%",
    height: "614px",
  },
  backButton: {
    position: "absolute",
    top: "50%",
    left: "0%",
    backgroundColor: "#d5dedf",
    padding: "0",
  },
  forwardButton: {
    position: "absolute",
    top: "50%",
    right: "0%",
    backgroundColor: "#d5dedf",
    padding: "0",
  },
  color: {
    color: "red",
  },
});

function Carousel({ imgs, alt }) {
  const classes = useStyles();
  const [imgIndex, setImgIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(imgs[imgIndex]);
  const handleBackButton = (event) => {
    if (imgIndex === 0) {
      setCurrentImg(imgs[imgs.length - 1]);
      setImgIndex(imgs.length - 1);
    } else {
      setCurrentImg(imgs[imgIndex - 1]);
      setImgIndex(imgIndex - 1);
    }
  };
  const handleForwardButton = (event) => {
    if (imgIndex === imgs.length - 1) {
      setCurrentImg(imgs[0]);
      setImgIndex(0);
    } else {
      setCurrentImg(imgs[imgIndex + 1]);
      setImgIndex(imgIndex + 1);
    }
  };
  return (
    <div>
      {imgs.length === 1 ? (
        <img src={currentImg} alt={alt} className={classes.img} />
      ) : (
        <div className={classes.container}>
          {imgIndex > 0 && (
            <IconButton
              className={classes.backButton}
              onClick={handleBackButton}
            >
              <ArrowBack />
            </IconButton>
          )}

          <img src={currentImg} alt={alt} className={classes.img} />
          {imgIndex < imgs.length - 1 && (
            <IconButton
              className={classes.forwardButton}
              onClick={handleForwardButton}
            >
              <ArrowForward />
            </IconButton>
          )}
        </div>
      )}
    </div>
  );
}

export default Carousel;
