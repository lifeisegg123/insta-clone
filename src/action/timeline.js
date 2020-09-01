import { all, call, put, take, fork } from "redux-saga/effects";
import getTimeLines from "../components/Timeline/timelineApi";

export const types = {
  REQUEST_TIMELINE: "timeline/REQUEST_TIMELINE",
  SET_TIMELINE: "timeline/SET_TIMELINE",
  ADD_TIMELINE: "timeline/ADD_TIMELINE",
  REMOVE_TIMELINE: "timeline/REMOVE_TIMELINE",
};

export const actions = {
  requsetTimeline: (userKey, targetUserFriends) => ({
    type: types.REQUEST_TIMELINE,
    userKey,
    targetUserFriends,
  }),
  setTimeline: (timelines) => ({ type: types.SET_TIMELINE, timelines }),
  addTimeline: (timeline, userKey) => ({
    types: types.ADD_TIMELINE,
    timeline,
    userKey,
  }),
  removeTimeline: (timelineKey) => ({
    type: types.REMOVE_TIMELINE,
    timelineKey,
  }),
};
export function* setTimeline() {
  while (true) {
    const { userKey, targetUserFriends } = yield take(types.REQUEST_TIMELINE);
    const timelines = yield call(getTimeLines, userKey, targetUserFriends);
    yield put(actions.setTimeline(timelines));
    console.log(timelines);
  }
}
export default function* watcher() {
  yield all([fork(setTimeline)]);
}
