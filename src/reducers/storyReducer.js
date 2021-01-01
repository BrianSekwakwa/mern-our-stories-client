const storyReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        ...state,
        stories: action.payload,
      };
    case "FETCH_ONE":
      return {
        ...state,
        story: action.payload,
      };
    case "UPDATE_COUNT":
      return {
        ...state,
        story: action.payload,
      };
    case "CLEAR_STORY_STATE":
      return {
        ...state,
        story: null,
      };
    case "CLEAR_STATE":
      return {
        ...state,
        stories: null,
      };
    default:
      return state;
  }
};

export default storyReducer;
