import * as api from "../api";
// Action Creators

export const fetchAllStories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStories();
    dispatch({
      type: "FETCH_ALL",
      payload: data,
    });
  } catch (error) {
    alert(`Could not fetch stories: ${error.message}`);
  }
};

export const createStory = (story) => async (dispatch) => {
  try {
    const response = await api.createStory(story);
    console.log(response);
  } catch (error) {
    alert(`Could not create story: ${error.message}`);
  }
};
