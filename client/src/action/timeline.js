import { all, call, put, take, fork } from "redux-saga/effects";

export const types = {
  REQUEST_TIMELINE: "timeline/REQUEST_TIMELINE",
  ADD_TIMELINE: "timeline/ADD_TIMELINE",
  REMOVE_TIMELINE: "timeline/REMOVE_TIMELINE",
};

export const actions = {
  requsetTimeline: (userKey) => ({ type: types.REQUEST_TIMELINE, userKey }),
  addTimeline: (timeline, userKey) => ({ types: types.ADD_TIMELINE, userKey }),
  removeTimeline: ()
};
