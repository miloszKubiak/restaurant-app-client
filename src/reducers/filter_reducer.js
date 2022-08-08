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
		default:
			throw new Error(`No Matching "${action.type}" - action type`);
	}
};

export default filter_reducer;
