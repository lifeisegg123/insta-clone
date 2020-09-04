import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  infoBar: {
    margin: "10vh auto",
    width: "80vw",
    height: "300px",
    display: "flex",
  },
  infoSection: {},
  profileImgDiv: {
    padding: "0px 60px",
    marginRight: "10px",
  },
  profileImg: {
    width: "150px",
    height: "150px",
  },
  timelinesImgDiv: {
    width: "614px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr",
    placeItems: "center center",
  },
  timelinesImg: {
    width: "25vw",
    height: "25vw",
  },
});

function Profile() {
  const classes = useStyles();

  const userInfo = useSelector((state) => state.user.userInfo);
  const timelines = useSelector((state) => state.timeline.timelines).filter(
    (timeline) => timeline.userKey === userInfo.userKey
  );

  return (
    <div>
      <NavBar userInfo={userInfo}></NavBar>
      <div className={classes.infoBar}>
        <div className={classes.profileImgDiv}>
          <Avatar
            src={userInfo.profileImage}
            alt={userInfo.nickname}
            className={classes.profileImg}
          />
        </div>
        <section>
          <div>
            <h3>{userInfo.nickname}</h3>
          </div>
          <span>
            게시물
            <span>5</span>
          </span>
        </section>
      </div>
      <div className={classes.timelinesImgDiv}>
        {timelines.map((timeline) => (
          <img
            key={`${timeline.timelineKey}`}
            src={timeline.imgs[0]}
            alt={timeline.desc}
            className={classes.timelinesImg}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Profile;
