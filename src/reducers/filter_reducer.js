import {
	LOAD_MEALS,
	FILTER_MEALS,
	UPDATE_FILTERS,
	CLEAR_FILTERS,
	SORT_MEALS,
	UPDATE_SORT,
	SET_LISTVIEW,
	SET_GRIDVIEW,
} from "../actions";

const filter_reducer = (state, action) => {
	switch (action.type) {
		case LOAD_MEALS:
			return {
				...state,
				all_meals: [...action.payload], //spread operator because we copy values, dont referencing to the same place in the memory
				filtered_meals: [...action.payload],
			};
		case SET_LISTVIEW:
			return { ...state, grid_view: false };
		case SET_GRIDVIEW:
			return { ...state, grid_view: true };
		case UPDATE_SORT:
			return { ...state, sort: action.payload };
		case SORT_MEALS:
			const { filtered_meals, sort } = state;
			let tempMeals = [...filtered_meals];

			if (sort === "name-a") {
				tempMeals = tempMeals.sort((a, b) => {
					return a.name.localeCompare(b.name);
				});
			}
			if (sort === "name-z") {
				tempMeals = tempMeals.sort((a, b) => {
					return b.name.localeCompare(a.name);
				});
			}
			if (sort === "price-lowest") {
				tempMeals = tempMeals.sort((a, b) => a.price - b.price);
			}
			if (sort === "price-highest") {
				tempMeals = tempMeals.sort((a, b) => b.price - a.price);
			}
			return { ...state, filtered_meals: tempMeals };
		default:
			throw new Error(`No Matching "${action.type}" - action type`);
	}
};

export default filter_reducer;
