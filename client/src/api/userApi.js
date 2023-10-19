import axios from "axios";
const header = { "Content-Type": "multipart/form-data" };

export const getUsersAPI = async () => axios.get("/api/users");
export const getUserByIdAPI = async (id) => axios.get(`/api/users/${id}`);
export const createUserAPI = async (user) => {
  return axios.post(`/api/user/signup`, user, {
    headers: header,
  });
};
export const loginUserAPI = async (user) =>
  axios.post(`/api/users/login`, user);
export const userFavoritesAPI = async (id) =>
  axios.post(`/api/users/favorites`, { id });
export const userPlaylistsAPI = async (id) =>
  axios.post(`/api/users/playlist`, { id });
export const updateUserAPI = async (id, user) =>
  axios.put(`/api/users/${id}`, user);
export const deleteUserByIdAPI = async (id) => axios.delete(`/api/users/${id}`);
export const getSongsByUserId = (userId) =>
  axios.get(`/api/users/songs/${userId}`);
export const getUserPlayListsAPI = async (id) =>
  axios.get(`/api/users/playlist/${id}`);

export const getUserFavoritesSongAPI = async (id) =>
  axios.get(`/api/users/favorites/${id}`);

export const verifyEmail = async (userId, token) =>
  axios.get(`/api/users/${userId}/verify/${token}`);
