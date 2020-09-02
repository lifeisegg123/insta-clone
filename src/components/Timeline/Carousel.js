import React, { useState } from "react";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  img: {
    width: "100%",
    height: "614px",
  },
});

function Carousel({ imgs, alt }) {
  const classes = useStyles();
  const [currentImg, setCurrentImg] = useState(imgs[0]);
  return (
    <div>
      {imgs.length === 1 ? (
        <img src={currentImg} alt={alt} className={classes.img} />
      ) : (
        <>
          <ArrowBack />
          <img src={currentImg} alt={alt} className={classes.img} />
          <ArrowForward />
        </>
      )}
    </div>
  );
}

export default Carousel;
