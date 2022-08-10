import React, { useContext } from "react";

const initialState = {};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	return <CartContext.Provider value="test">{children}</CartContext.Provider>;
};

export const useCartContext = () => {
	return useContext(CartContext);
};
