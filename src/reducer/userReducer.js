import createReducer from "../common/createReducer";
import { types } from "../action/user";

const INITIAL_STATE = {
  isLogin: false,
  userInfo: {},
  error: false,
};

const reducer = createReducer(INITIAL_STATE, {
  [types.SET_ISLOGIN]: (state, action) => (state.isLogin = action.isLogin),
  [types.SET_USERINFO]: (state, action) => (state.userInfo = action.userInfo),
  [types.SET_ERROR]: (state, action) => {
    return (state.error = action.error);
  },
  [types.SET_NICKNAME]: (state, action) =>
    (state.userInfo.nickname = action.nickname),
});

export default reducer;
