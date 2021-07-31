export const initialState = {
    basket: []
};

function reducer(state, action){
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // logic for adding to basket
            return { state };
        case 'REMOVE_FROM_BASKET':
            // logic for removing
            return { state };
        default:
            return state;
    }
}

export default reducer;