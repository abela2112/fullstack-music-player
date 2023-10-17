import axios from "axios";
export const getSongsAPI = async () => axios.get("/api/songs");
export const getSongByIdAPI = async (id) => axios.get(`/api/songs/${id}`);
export const createSongAPI = (song) => {
  axios.post(`/api/song/create`, song, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const updateSongAPI = async (id, song) =>
  axios.patch(`/api/songs/${id}`, song, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteSongByIdAPI = async (id) => {
  axios.delete(`/api/songs/${id}`);
};
