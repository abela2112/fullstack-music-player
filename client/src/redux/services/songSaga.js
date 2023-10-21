import { takeEvery, put, call } from "redux-saga/effects";
import {
  createSong,
  createSongFailure,
  createSongSuccess,
  deleteSong,
  getSongsFailure,
  getSongsFetch,
  getSongsSuccess,
  updateSong,
  updateSongFailure,
  updateSongSuccess,
} from "../features/songs";
import {
  createSongAPI,
  deleteSongByIdAPI,
  getSongsAPI,
  updateSongAPI,
} from "../../api/songApi";

function* workGetSongFetch() {
  try {
    const songs = yield getSongsAPI();

    yield put(getSongsSuccess(songs));
  } catch (error) {
    yield put(getSongsFailure());
  }
}

// function* workGetSongFetchById(id) {
//   const songs = yield getSongByIdAPI(id);
//   yield put(getSongsSuccess(songs));
// }
function* workCreateSong(action) {
  try {
    console.log(action.payload);
    const data = yield createSongAPI(action.payload);

    yield put(createSongSuccess(data?.data));
    yield put(getSongsFetch());
  } catch (error) {
    yield put(createSongFailure(error?.response?.data))
  }
}

function* workUpdateSong({ payload: { songId, formData } }) {
  try {
    const data = yield updateSongAPI(songId, formData);
    console.log(data);
    yield put(updateSongSuccess(data?.data));
  } catch (error) {
    console.log(error);
    //yield put(updateSongFailure());
  }
}

function* workDeleteSong(action) {
  const data = yield deleteSongByIdAPI(action.payload);
  yield put(deleteSong(action.payload));
}

function* watchSongSaga() {
  yield takeEvery("songs/getSongsFetch", workGetSongFetch);
  yield takeEvery("songs/createSong", workCreateSong);
  yield takeEvery("songs/updateSong", workUpdateSong);
  yield takeEvery("songs/deleteSong", workDeleteSong);
}
export default watchSongSaga;
