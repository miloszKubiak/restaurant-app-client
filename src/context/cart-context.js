import React, { useContext, useEffect, useReducer } from "react";
import {
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	CLEAR_CART,
	TOGGLE_CART_ITEM_AMOUNT,
	COUNT_CART_TOTALS,
} from "../actions";
import reducer from "../reducers/cart_reducer";
import { getLocalStorage } from "../utils/helpers";

const initialState = {
	cart: getLocalStorage(),
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

	const removeItem = (id) => {
		dispatch({ type: REMOVE_CART_ITEM, payload: id });
	};

	const toggleAmount = (id, value) => {};

	const clearCart = () => {
		dispatch({ type: CLEAR_CART });
	};

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(state.cart));
	}, [state.cart]);

	return (
		<CartContext.Provider
			value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => {
	return useContext(CartContext);
};
