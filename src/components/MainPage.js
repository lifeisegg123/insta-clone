import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { actions } from "../action/timeline";

import NavBar from "./NavBar/NavBar";
import Timeline from "./Timeline/Timeline";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    marginTop: "10vh",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
    width: "40vw",
  },
});

function MainPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const timelines = useSelector((state) => state.timeline.timelines);
  const isLogin = useSelector((state) => state.user.isLogin);
  useEffect(() => {
    if (isLogin) {
      dispatch(actions.requsetTimeline(userInfo.userKey, userInfo.friends));
      console.log("hi");
    }
  }, [isLogin]);

  return (
    <div>
      <NavBar></NavBar>
      <ul className={classes.container}>
        {timelines.map((timeline) => (
          <Timeline
            key={timeline.timelineKey}
            timelineKey={timeline.timelineKey}
            profileImage={userInfo.profileImage}
            nickname={userInfo.nickname}
            imgs=""
            comments={timeline.desc}
          />
        ))}
      </ul>
    </div>
  );
}

export default MainPage;
