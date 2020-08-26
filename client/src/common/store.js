import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "../reducer/userReducer";

import createSagaMiddleware from "redux-saga";
import userSaga from "../action/user";

const reducer = combineReducers({
  user: userReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(userSaga);
