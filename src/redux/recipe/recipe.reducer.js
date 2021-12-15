const INITIAL_STATE = {
    currentRecipe: {}
};

const recipeReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case 'SET_CURRENT_RECIPE':
            return {
                ...state,
                currentRecipe: action.payload
            }
        default:
                return state;
    }
}

export default recipeReducer;