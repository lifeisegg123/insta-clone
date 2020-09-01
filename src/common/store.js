import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "../reducer/userReducer";
import timelineReducer from "../reducer/timelineReducer";
import createSagaMiddleware from "redux-saga";
import userSaga from "../action/user";
import timelineSaga from "../action/timeline";

const reducer = combineReducers({
  user: userReducer,
  timeline: timelineReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(userSaga);
sagaMiddleware.run(timelineSaga);
