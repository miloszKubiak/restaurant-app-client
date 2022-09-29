import React, { useContext, useEffect, useReducer } from "react";
import {
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	CLEAR_CART,
	TOGGLE_CART_ITEM_AMOUNT,
	COUNT_CART_TOTALS,
} from "../actions";
import reducer from "../reducers/cart_reducer";
import { getCartItemsFromLocalStorage } from "../utils/helpers";

const initialState = {
	cart: getCartItemsFromLocalStorage(),
	total_items: 0,
	total_amount: 0,
	delivery_fee: 5,
	tax: 4,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addToCart = (id, amount, meal) => {
		dispatch({ type: ADD_TO_CART, payload: { id, amount, meal } });
	};

	const removeItem = (id) => {
		dispatch({ type: REMOVE_CART_ITEM, payload: id });
	};

	const toggleAmount = (id, value) => {
		dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
	};

	const clearCart = () => {
		dispatch({ type: CLEAR_CART });
	};

	useEffect(() => {
		dispatch({ type: COUNT_CART_TOTALS })
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
