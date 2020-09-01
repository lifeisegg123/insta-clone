import createReducer from "../common/createReducer";
import { types } from "../action/timeline";

const INITIAL_STATE = {
  timelines: [],
};

const reducer = createReducer(INITIAL_STATE, {
  [types.ADD_TIMELINE]: (state, action) =>
    state.timelines.push(action.timeline),
  [types.SET_TIMELINE]: (state, action) => (state.timelines = action.timelines),
});

export default reducer;
