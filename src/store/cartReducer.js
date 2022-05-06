import { types } from '../types/types';

// Initial State

export const cartInitialState = {
    price: 0,
    amount: 0
};

export const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case types.addProduct:
            return {
                ...state,
                ...action.payload
            };
        case types.removeProduct:
            return {
                ...cartInitialState
            };

        default:
            return state;
    }
};
