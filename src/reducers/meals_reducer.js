import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE,
	SET_LISTVIEW,
	SET_GRIDVIEW,
	GET_SINGLE_MEAL_BEGIN,
	GET_SINGLE_MEAL_SUCCESS,
	GET_SINGLE_MEAL_ERROR,
	GET_MEALS_BEGIN,
	GET_MEALS_SUCCESS,
	GET_MEALS_ERROR,
	HANDLE_CHANGE,
	CLEAR_FILTERS,
} from "../actions";

const meals_reducer = (state, action) => {
	switch (action.type) {
		case SIDEBAR_OPEN:
			return { ...state, isSidebarOpen: true };
		case SIDEBAR_CLOSE:
			return { ...state, isSidebarOpen: false };
		case SET_LISTVIEW:
			return { ...state, grid_view: false };
		case SET_GRIDVIEW:
			return { ...state, grid_view: true };
		case GET_MEALS_BEGIN:
			return { ...state, meals_loading: true };
		case GET_MEALS_SUCCESS:
			const featured_meals = action.payload.meals.filter(
				(meal) => meal.featured === true
			);
			return {
				...state,
				meals_loading: false,
				meals: action.payload.meals,
				featured_meals,
				totalMeals: action.payload.totalMeals,
				numOfPages: action.payload.numOfPages,
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
		////////
		case HANDLE_CHANGE:
			return {
				...state,
				page: 1,
				[action.payload.name]: action.payload.value,
			};
		case CLEAR_FILTERS:
			return {
				...state,
				search: "",
				searchType: "all",
				sort: "a-z",
			};
		default:
			throw new Error(`No matching "${action.type}" - action type`);
	}
};

export default meals_reducer;
