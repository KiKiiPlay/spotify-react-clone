const initialState = {
  searchQuerry: {
    searchedSong: "",
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_SONG":
      return {
        searchQuerry: {
          searchedSong: [action.payload],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
