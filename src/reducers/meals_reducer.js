import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE,
	GET_SINGLE_MEAL_BEGIN,
	GET_SINGLE_MEAL_SUCCESS,
	GET_SINGLE_MEAL_ERROR,
	GET_MEALS_BEGIN,
	GET_MEALS_SUCCESS,
	GET_MEALS_ERROR,
} from "../actions";

const meals_reducer = (state, action) => {
	switch (action.type) {
		case SIDEBAR_OPEN:
			return { ...state, isSidebarOpen: true };
		case SIDEBAR_CLOSE:
			return { ...state, isSidebarOpen: false };
		case GET_MEALS_BEGIN:
			return { ...state, meals_loading: true };
		case GET_MEALS_SUCCESS:
			const featured_meals = action.payload.filter(
				(meal) => meal.featured === true
			);
			return {
				...state,
				meals_loading: false,
				meals: action.payload,
				featured_meals,
			};
		case GET_MEALS_ERROR:
			return { ...state, meals_loading: false, meals_error: true };
		case GET_SINGLE_MEAL_BEGIN:
			return {
				...state,
				single_meal_loading: true,
				single_meal_error: false,
			};
		case GET_SINGLE_MEAL_SUCCESS:
			return {
				...state,
				single_meal_loading: false,
				single_meal: action.payload,
			};
		case GET_SINGLE_MEAL_ERROR:
			return {
				...state,
				single_meal_loading: false,
				single_meal_error: true,
			};
		default:
			throw new Error(`No matching "${action.type}" - action type`);
	}
};

export default meals_reducer;
