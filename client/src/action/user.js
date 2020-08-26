import { all, call, put, take, fork } from "redux-saga/effects";
import login from "../components/User/Login/loginApi";

export const types = {
  REQUEST_LOGIN: "user/REQUEST_LOGIN",
  REQUEST_LOGOUT: "user/REQUEST_LOGOUT",
  REQUEST_SIGNUP: "user/REQUEST_SIGNUP",
  SET_ISLOGIN: "user/SET_ISLOGIN",
  SET_USER: "user/SET_USER",
  SET_ERROR: "user/SET_ERROR",
};
export const actions = {
  requestLogin: (id, password) => ({ type: types.REQUEST_LOGIN, id, password }),
  requestLogout: () => ({ type: types.REQUEST_LOGOUT }),
  requestSignup: (id, name, nickname, password) => ({
    type: types.REQUEST_SIGNUP,
    id,
    name,
    nickname,
    password,
  }),
  setIsLogin: (isLogin) => ({ type: types.SET_ISLOGIN, isLogin }),
  setUser: (user) => ({ type: types.SET_USER, user }),
  setError: (error) => ({ type: types.SET_ERROR, error }),
};

export function* loginFlow() {
  while (true) {
    const { id, password } = yield take(types.REQUEST_LOGIN);
    try {
      var user = yield call(login, id, password);
      yield put(actions.setUser(user));
      yield put(actions.setError(false));
      yield put(actions.setIsLogin(true));
    } catch (error) {
      yield put(actions.setError(true));
    }
  }
}

export default function* watcher() {
  yield all([fork(loginFlow)]);
}
