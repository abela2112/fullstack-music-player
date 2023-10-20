import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null || JSON.parse(window.localStorage.getItem("user")),
  token: "" || window.localStorage.getItem("token"),
  isLoading: false,
  errorMessage: "",
  successMessage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
      state.successMessage = "";
    },
    setUserLoginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data?.data;
      state.token = action.payload.data?.token;
      state.successMessage = action.payload.data?.message;
      state.errorMessage = "";
    },
    setUserLoginError: (state, action) => {
      state.isLoading = false;
      state.errorMessage =
        action.payload?.msg || "some thing went wrong please try again";
      console.log(action);
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
    registerUser: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
      state.successMessage = "";
    },
    registerUserSuccess: (state, action) => {
      state.isLoading = false;
      state.errorMessage = "";
      state.successMessage = action.payload?.data?.message;
      console.log(action);
    },
    registerUserError: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload?.msg;
      state.successMessage = "";
    },
    updateUser: (state, action) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
    },
    setError: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  setFavoriteSongs,
  setError,
  getFavoriteSongsFailure,
  getFavoriteSongsSuccess,
  getFavoriteSongsFetch,
  setUserLogin,
  setUserLogOut,
  setPlaylist,
  getPlayLists,
  registerUser,
  updateUser,
  setUserLoginSuccess,
  setUserLoginError,
  registerUserSuccess,
  registerUserError,
} = userSlice.actions;

export default userSlice.reducer;
