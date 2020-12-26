const storyReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        ...state,
        stories: action.payload,
      };
    default:
      return state;
  }
};

export default storyReducer;
