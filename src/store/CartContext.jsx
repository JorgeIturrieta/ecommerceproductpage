import { createContext, useReducer } from 'react';
import { cartInitialState, cartReducer } from './cartReducer';

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);
    return (
        <CartContext.Provider
            value={{
                ...state,
                dispatch
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
