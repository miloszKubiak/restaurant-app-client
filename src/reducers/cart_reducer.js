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
			const { id, amount, meal } = action.payload;
			const tempItem = state.cart.find((item) => item.id === meal._id);
			if (tempItem) {
				const tempCart = state.cart.map((cartItem) => {
					if (cartItem.id === meal._id) {
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
					id: meal._id,
					name: meal.name,
					amount,
					image: meal.image,
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

		case TOGGLE_CART_ITEM_AMOUNT:
			const { id: amountID, value } = action.payload;
			const tempCartAmount = state.cart.map((item) => {
				if (item.id === amountID) {
					if (value === "increase") {
						let newAmount = item.amount + 1;
						if (newAmount > item.max) {
							newAmount = item.max;
						}
						return { ...item, amount: newAmount };
					}
					if (value === "decrease") {
						let newAmount = item.amount - 1;
						if (newAmount < 1) {
							newAmount = 1;
						}
						return { ...item, amount: newAmount };
					}
				}
				return item;
			});
			return { ...state, cart: tempCartAmount };

		case COUNT_CART_TOTALS:
			const { total_amount, total_items } = state.cart.reduce(
				(total, cartItem) => {
					const { amount, price } = cartItem;
					total.total_items += amount;
					total.total_amount += amount * price;

					return total;
				},
				{ total_items: 0, total_amount: 0 }
			);
			return { ...state, total_items, total_amount };

		default:
			throw new Error(`No Matching "${action.type}" - action type`);
	}
};

export default cart_reducer;
