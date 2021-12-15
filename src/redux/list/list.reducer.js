const INITIAL_STATE= {
    currentList: []
};

const listReducer = (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case 'SET_CURRENT_LIST':
            return {
                ...state,
                currentList: action.payload
            }
        default:
            return state;
    }
}

export default listReducer;