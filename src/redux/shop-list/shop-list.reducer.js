const INITIAL_STATE = {
    currentShopList : [],
    
};

const shopListReducer = (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case 'SET_CURRENT_SHOPLIST':
            return {
                ...state,
                currentShopList: action.payload
            }
        
        default:
            return state;
    }
};

export default shopListReducer;