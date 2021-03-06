import * as api from "../api";
import {
  FETCH_ALL,
  FETCH_ONE,
  UPDATE_COUNT,
  CLEAR_STATE,
  CLEAR_STORY_STATE,
} from "../constants/actionTypes";
// -- ACTION CREATORS

// GET all stories
export const fetchAllStories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStories();
    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    alert(`Could not fetch stories: ${error.message}`);
  }
};

// GET one story by ID
export const fetchStory = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchStory(id);
    dispatch({
      type: FETCH_ONE,
      payload: data,
    });
  } catch (error) {
    alert(`Could not fetch the story: ${error.message}`);
  }
};

// POST a new story
export const createStory = (story) => async (dispatch) => {
  try {
    await api.createStory(story);
  } catch (error) {
    alert(`Could not create story: ${error.message}`);
  }
};

// UPDATE a story
export const editStory = (id, story) => async (dispatch) => {
  try {
    await api.updateStory(id, story);
  } catch (error) {
    alert(`Could not edit story: ${error.message}`);
  }
};

// UPDATE likes
export const updateLikeCount = (id, count) => async (dispatch) => {
  try {
    const { data } = await api.updateLikes(id, count);
    dispatch({
      type: UPDATE_COUNT,
      payload: data,
    });
  } catch (error) {
    alert(`Could not update likes: ${error.message}`);
  }
};

// UPDATE dislikes
export const updateDislikeCount = (id, count) => async (dispatch) => {
  try {
    const { data } = await api.updateDislikes(id, count);
    dispatch({
      type: UPDATE_COUNT,
      payload: data,
    });
  } catch (error) {
    alert(`Could not update dislikes: ${error.message}`);
  }
};

export const deleteStory = (id) => async (dispatch) => {
  try {
    await api.deleteStory(id);
  } catch (error) {
    alert(`Could not delete story: ${error.message}`);
  }
};

// Clear State
export const clearState = () => (dispatch) => {
  dispatch({
    type: CLEAR_STATE,
  });
};

// Clear story State
export const clearStoryState = () => (dispatch) => {
  dispatch({
    type: CLEAR_STORY_STATE,
  });
};
