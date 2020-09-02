import createReducer from "../common/createReducer";
import { types } from "../action/timeline";

const INITIAL_STATE = {
  timelines: [],
};

const reducer = createReducer(INITIAL_STATE, {
  [types.ADD_TIMELINE]: (state, action) =>
    state.timelines.push(action.timeline),
  [types.SET_TIMELINE]: (state, action) => (state.timelines = action.timelines),
  [types.ADD_COMMENT]: (state, action) =>
    state.timelines.map(
      (timeline) =>
        timeline.timelineKey === action.timelineKey &&
        timeline.comments.push(action.comment)
    ),
  [types.ADD_LIKES]: (state, action) =>
    state.timelines.map((timeline) =>
      timeline.timelineKey === action.timelineKey
        ? (timeline.likes += 1)
        : timeline
    ),
  [types.MINUS_LIKES]: (state, action) =>
    state.timelines.map((timeline) =>
      timeline.timelineKey === action.timelineKey
        ? (timeline.likes -= 1)
        : timeline
    ),
});

export default reducer;
