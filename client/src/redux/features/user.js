import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null || JSON.parse(window.localStorage.getItem("user")),
  token: "" || window.localStorage.getItem("token"),
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload.data?.data;
      state.token = action.payload.data?.token;
    },
    setFavoriteSongs: (state, action) => {
      state.user.likedSongs = action.payload;
    },

    setUserLogOut: (state) => {
      state.user = null;
      state.token = "";
    },
    setPlaylist: (state, action) => {
      state.playList.push(action.payload);
    },
    getPlayLists: (state, action) => {
      state.playList = action.payload;
    },
    getFavoriteSongsFetch: (state) => {
      state.isLoading = true;
    },
    getFavoriteSongsSuccess: (state, action) => {
      state.isLoading = false;
      state.favariteSongs = action.payload;
    },
    getFavoriteSongsFailure: (state) => {
      state.isLoading = false;
    },
    registerUser: (state, action) => {
      state.user = action.payload;
      console.log(action.payload);
      state.token = "";
    },
    updateUser: (state, action) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
    },
  },
});

export const {
  setFavoriteSongs,
  getFavoriteSongsFailure,
  getFavoriteSongsSuccess,
  getFavoriteSongsFetch,
  setUserLogin,
  setUserLogOut,
  setPlaylist,
  getPlayLists,
  registerUser,
  updateUser,
} = userSlice.actions;

export default userSlice.reducer;
