const jobState = {
  favourite: {
    content: [],
  },
  search: {
    jobs: [],
  },
};

const mainReducer = (state = jobState, action) => {
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        favourite: {
          ...state.favourite,

          content: [...state.favourite.content, action.payload],
        },
      };
    case "REMOVE_FAV":
      return {
        ...state,
        favourite: {
          ...state.favourite,

          content: state.favourite.content.filter((job) => {
            return job._id !== action.payload._id;
          }),
        },
      };
    case "SAVE_JOB":
      return {
        ...state,
        search: {
          ...state.search,

          jobs: action.payload,
        },
      };
    case "RESET_JOB":
      return {
        ...state,
        search: {
          ...state.search,

          jobs: [],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
