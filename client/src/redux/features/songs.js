import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  songs: [],
  isModalOpen: false,
  error: null,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true;
    },
    getSongsSuccess: (state, action) => {
      state.isLoading = false;

      state.songs = action.payload?.data;
    },
    getSongsFailure: (state) => {
      state.isLoading = false;
    },
    createSong: (state) => {
      state.isLoading = true;
    },
    createSongSuccess: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.songs.push(action.payload?.data);
    },
    createSongFailure: (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.error = action.payload?.msg;
    },
    updateSong: (state) => {
      state.isLoading = true;
    },
    updateSongSuccess: (state, action) => {
      state.isLoading = false;
      const updatesong = state.songs.map((song) => {
        if (song._id == action.payload?._id) {
          return action.payload;
        } else return song;
      });
      state.songs = updatesong;
    },
    updateSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.data?.error;
    },
    deleteSong: (state, action) => {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
    },
    setModalOpen: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const {
  getSongsFetch,
  getSongsFailure,
  getSongsSuccess,
  createSong,
  updateSong,
  updateSongSuccess,
  updateSongFailure,
  deleteSong,
  setModalOpen,
  createSongSuccess,
  createSongFailure,
} = songSlice.actions;

export default songSlice.reducer;
