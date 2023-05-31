import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchAddSuccess, fetchAddFailure } from "./actions";
import { FETCH_ADD_REQUEST } from "./actionTypes";
import { authAPI } from "../AuthApi";
import { AddState } from "./types";

function* fetchAddSaga() {
  try {
    const response: AddState = yield authAPI.add_data({
      name: "inder",
      job: "RN"
    });

    console.log("API RESPONSE : ",response)
    yield put(fetchAddSuccess({response_add:'data saved successfully'}));
  }
  catch (e) {
    yield put(fetchAddFailure({error:e.message}));
  }
}

function* AddSaga() {
  yield all([takeLatest(FETCH_ADD_REQUEST, fetchAddSaga)]);
}

export default AddSaga;