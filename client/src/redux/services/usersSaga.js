import { put, takeEvery } from "redux-saga/effects";
import {
  createUserAPI,
  getUserPlayListsAPI,
  loginUserAPI,
  updateUserAPI,
} from "../../api/userApi";
import {
  getPlayLists,
  registerUser,
  setUserLogin,
  updateUser,
} from "../features/user";

function* workRegisterUser({ payload }) {
  console.log(payload);
  const data = yield createUserAPI(payload);
  console.log(data);
  // yield put(registerUser(data));
}

function* workSignInUser(action) {
  try {
    const data = yield loginUserAPI(action.payload);
    yield put(setUserLogin(data));
  } catch (error) {
    console.log(error);
  }
}

function* workUpdateUser(user) {
  const data = yield updateUserAPI(user);
  yield put(updateUser(data));
}

function* workGetPlayLists(id) {
  const data = yield getUserPlayListsAPI(id);
  yield put(getPlayLists(data));
}

function* watchUserSaga() {
  yield takeEvery("user/updateUser", workUpdateUser);
  yield takeEvery("user/setUserLogin", workSignInUser);
  yield takeEvery("user/registerUser", workRegisterUser);
  yield takeEvery("user/getPlayLists", workGetPlayLists);
}

export default watchUserSaga;
