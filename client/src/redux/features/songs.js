import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  songs: [],
  isModalOpen: false,
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
    createSong: (state, action) => {
      state.songs.push(action.payload?.data);
    },
    updateSong: (state, action) => {
      const updatesong = state.songs.map((song) => {
        if (song._id == action.payload?._id) {
          return action.payload;
        } else return song;
      });
      state.songs = updatesong;
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
  deleteSong,
  setModalOpen,
} = songSlice.actions;

export default songSlice.reducer;
