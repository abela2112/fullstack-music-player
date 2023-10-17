import { takeEvery, put, call } from "redux-saga/effects";
import {
  createSong,
  deleteSong,
  getSongsFailure,
  getSongsSuccess,
  updateSong,
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
function* workCreateSong({ payload }) {
  try {
    console.log(payload);
    const data = yield createSongAPI(payload);
    console.log(data);
    // yield put(createSong(data?.data));
  } catch (error) {
    console.log(error);
  }
}

function* workUpdateSong({ payload: { songId, formData } }) {
  try {
    const data = yield updateSongAPI(songId, formData);

    yield put(updateSong(data?.data));
  } catch (error) {
    console.log(error);
  }
}

function* workDeleteSong(action) {
  const data = yield deleteSongByIdAPI(action.payload);
  console.log(data);
}

function* watchSongSaga() {
  yield takeEvery("songs/getSongsFetch", workGetSongFetch);
  yield takeEvery("songs/createSong", workCreateSong);
  yield takeEvery("songs/updateSong", workUpdateSong);
  yield takeEvery("songs/deleteSong", workDeleteSong);
}
export default watchSongSaga;
