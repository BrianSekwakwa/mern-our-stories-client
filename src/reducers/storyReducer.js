const initState = {
  count: 0,
};

const storyReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default storyReducer;
