import React, { useContext, useReducer } from "react";
import {
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	CLEAR_CART,
	TOGGLE_CART_ITEM_AMOUNT,
	COUNT_CART_TOTALS,
} from "../actions";
import reducer from "../reducers/cart_reducer";

const initialState = {
	cart: [],
	total_items: 0,
	total_amount: 0,
	delivery_fee: 20,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addToCart = (id, size, amount, meal) => {
		dispatch({ type: ADD_TO_CART, payload: { id, size, amount, meal } });
	};

	return (
		<CartContext.Provider value={{ ...state, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => {
	return useContext(CartContext);
};
