import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "935px",
    margin: "10vh auto 0 auto",
    "@media (max-width:990px)": {
      width: "99.4vw",
    },
  },
  infoBar: {
    paddingBottom: "45px",
    height: "150px",
    display: "flex",
    borderBottom: "solid 1px #dbdbdb",
  },
  profileImgDiv: {
    padding: "0px 60px",
    marginRight: "10px",
  },
  profileImg: {
    width: "150px",
    height: "150px",
  },
  infoSection: {
    width: "100%",
  },
  infoLists: {
    width: "50%",
    display: "flex",
    listStyle: "none",
    paddingLeft: "0px",
  },
  infoListItem: {
    paddingRight: "40px",
  },
  timelinesImgDiv: {
    margin: "30px auto",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    placeItems: "center space-between",
  },
  timelinesImg: {
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
}));

function Profile() {
  const classes = useStyles();

  const userInfo = useSelector((state) => state.user.userInfo);
  const timelines = useSelector((state) => state.timeline.timelines).filter(
    (timeline) => timeline.userKey === userInfo.userKey
  );

  return (
    <div>
      <NavBar userInfo={userInfo}></NavBar>
      <div className={classes.root}>
        <div className={classes.infoBar}>
          <div className={classes.profileImgDiv}>
            <Avatar
              src={userInfo.profileImage}
              alt={userInfo.nickname}
              className={classes.profileImg}
            />
          </div>
          <section className={classes.infoSection}>
            <div>
              <h3>{userInfo.nickname}</h3>
            </div>
            <ul className={classes.infoLists}>
              <li className={classes.infoListItem}>
                게시물
                <span>{timelines.length}</span>
              </li>
              <li className={classes.infoListItem}>
                팔로워
                <span>{userInfo.friends && userInfo.friends.length}</span>
              </li>
            </ul>
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
    </div>
  );
}

export default Profile;
