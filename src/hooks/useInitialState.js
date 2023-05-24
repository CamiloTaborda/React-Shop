import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addTocart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        });
    };

const removeFromCart = (payload) => {
    setState({
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
    });
}

    return {
        state,
        addTocart,
        removeFromCart
    }
}

export default useInitialState;