import { all } from "redux-saga/effects";
import watchSongSaga from "./songSaga";
import watchUserSaga from "./usersSaga";

export function* rootSaga() {
  yield all([watchSongSaga(), watchUserSaga()]);
}
