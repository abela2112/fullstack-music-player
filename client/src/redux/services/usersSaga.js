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
  registerUserError,
  registerUserSuccess,
  setError,
  setUserLogin,
  setUserLoginError,
  setUserLoginSuccess,
  updateUser,
} from "../features/user";

function* workRegisterUser({ payload }) {
  try {
    console.log(payload);
    const data = yield createUserAPI(payload);
    yield put(registerUserSuccess(data));
  } catch (error) {
    yield put(registerUserError(error?.response?.data));
    // yield put(setError(error?.response?.data));
  }
}

function* workSignInUser(action) {
  try {
    const data = yield loginUserAPI(action.payload);
    yield put(setUserLoginSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(setUserLoginError(error?.response?.data));
    //yield put(setError(error));
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
