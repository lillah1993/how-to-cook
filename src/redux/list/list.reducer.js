const INITIAL_STATE = {
  currentList: null,
  currentPage: 1,
  more: null,
  elementid: null,
};

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_LIST":
      return {
        ...state,
        currentList: action.payload,
      };
    case "GO_NEXT":
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case "GO_BACK":
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case "SET_NEXTPAGE_STATE":
      return {
        ...state,
        more: action.payload,
      };
    case "SET_ELEMENT_ID":
      return {
        ...state,
        elementid: action.payload,
      };

    default:
      return state;
  }
};

export default listReducer;
