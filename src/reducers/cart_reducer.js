import {
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	CLEAR_CART,
	TOGGLE_CART_ITEM_AMOUNT,
	COUNT_CART_TOTALS,
} from "../actions";

export const cart_reducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return { ...state };
		default:
			throw new Error(`No Matching "${action.type}" - action type`);
	}
};
