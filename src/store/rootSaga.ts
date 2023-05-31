import { all, fork } from "redux-saga/effects";

import todoSaga from "./todo/sagas";
import AddSaga from "./AddRecord/sagas"
import GETAPI from "./GetData/sagas"


export function* rootSaga() {
  yield all([
    fork(todoSaga),
    fork(AddSaga),
    fork(GETAPI)
  ]);
}
