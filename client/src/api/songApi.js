import axios from "axios";
export const getSongsAPI = async () => axios.get("/api/songs");
export const getSongByIdAPI = async (id) => axios.get(`/api/songs/${id}`);
export const createSongAPI = async (song) => {
  try {
    return axios.post(`/api/song/create`, song, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateSongAPI = async (id, song) => {
  
  return axios.put(`/api/songs/${id}`, song, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const deleteSongByIdAPI = async (id) => {
  return axios.delete(`/api/songs/${id}`);
};
