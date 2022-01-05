const INITIAL_STATE = {
  currentList: null,
  currentPage: 1,
  more: null,
  ready: false,
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
        ready: !state.ready,
      };
    case "GO_BACK":
      return {
        ...state,
        currentPage: state.currentPage - 1,
        ready: !state.ready,
      };
    case "SET_NEXTPAGE_STATE":
      return {
        ...state,
        more: action.payload,
      };
    case "TOGGE_READY":
      return {
        ...state,
        ready: !state.ready,
      };
    default:
      return state;
  }
};

export default listReducer;
