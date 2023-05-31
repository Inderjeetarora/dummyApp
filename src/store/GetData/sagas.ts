import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchGetFailure, fetchGetSuccess } from "./actions";
import { GET_REQUEST } from "./actionTypes";
import { authAPI } from "../AuthApi";

function* fetchTodoSaga() {

  const response: any = yield authAPI.getData_();
  console.log("user response", response);
}

function* todoSaga() {
  yield all([takeLatest(GET_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;