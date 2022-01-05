const INITIAL_STATE = {
    currentQuery: null
};

const searchReducer = (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case 'SET_CURRENT_QUERY':
            return {
                ...state,
                currentQuery: action.payload
            }
        default:
            return state;
    }
};

export default searchReducer;