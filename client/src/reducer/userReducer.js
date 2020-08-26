import createReducer from "../common/createReducer";
import { types } from "../action/user";

const INITIAL_STATE = { isLogin: false, user: {}, error: false };

const reducer = createReducer(INITIAL_STATE, {
  [types.SET_ISLOGIN]: (state, action) => (state.isLogin = action.isLogin),
  [types.SET_USER]: (state, action) => (state.user = action.user),
  [types.SET_ERROR]: (state, action) => (state.error = action.error),
});

export default reducer;
