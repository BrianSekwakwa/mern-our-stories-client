import axios from "axios";

const url = "http://localhost:5000/stories";

// API Calls
export const fetchStories = () => axios.get(url);
export const createStory = (story) => axios.post(url, story);
export const updateStory = (id, story) => axios.patch(`${url}/${id}`, story);
export const updateLikes = (id, count) =>
  axios.patch(`${url}/likes/${id}`, count);
export const updateDislikes = (id, count) =>
  axios.patch(`${url}/dislikes/${id}`, count);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
