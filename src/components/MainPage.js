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
      console.log(timelines);
    }
  }, [isLogin]);

  return (
    <div>
      <NavBar></NavBar>
      <ul className={classes.container}>
        {timelines.map((timeline) => (
          <Timeline
            key={`${timeline.userKey} ${timeline.timelineKey}`}
            timelineKey={timeline.timelineKey}
            profileImage={userInfo.profileImage}
            nickname={timeline.nickname}
            desc={timeline.desc}
            imgs={timeline.imgs}
            comments={timeline.comments}
            likes={timeline.likes}
          />
        ))}
      </ul>
    </div>
  );
}

export default MainPage;
