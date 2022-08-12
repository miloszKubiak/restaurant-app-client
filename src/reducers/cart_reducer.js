import {
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	CLEAR_CART,
	TOGGLE_CART_ITEM_AMOUNT,
	COUNT_CART_TOTALS,
} from "../actions";

const cart_reducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const { id, size, amount, meal } = action.payload;
			const tempItem = state.cart.find((item) => item.id === id + size);

			if (tempItem) {
				const tempCart = state.cart.map((cartItem) => {
					if (cartItem.id === id + size) {
						let newAmount = cartItem.amount + amount;
						if (newAmount > cartItem.max) {
							newAmount = cartItem.max;
						}
						return { ...cartItem, amount: newAmount };
					} else {
						return cartItem;
					}
				});

				return { ...state, cart: tempCart };
			} else {
				const newItem = {
					id: id + size,
					name: meal.name,
					size,
					amount,
					image: meal.images[0].url,
					price: meal.price,
					max: meal.stock,
				};
				return { ...state, cart: [...state.cart, newItem] };
			}

		case REMOVE_CART_ITEM:
			const tempCart = state.cart.filter(
				(item) => item.id !== action.payload
			);

			return { ...state, cart: tempCart };

		case CLEAR_CART:
			return { ...state, cart: [] };

		default:
			throw new Error(`No Matching "${action.type}" - action type`);
	}
};

export default cart_reducer;
