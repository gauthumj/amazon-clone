export const initialState = {
    basket: [],
    user: null,
};

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            // logic for adding to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            // logic for removing
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`${action.id} does not exist `);
            }
            return { ...state, basket: newBasket };
        default:
            return state;
    }
}

export default reducer;
