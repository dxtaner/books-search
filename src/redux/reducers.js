const initialState = {
  books: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
