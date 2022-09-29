import React, { useContext, useEffect, useReducer } from "react";
import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE,
	TOGGLE_SIDEBAR,
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
	CHANGE_PAGE,
	CLEAR_VALUES,
	CREATE_MEAL_BEGIN,
	CREATE_MEAL_SUCCESS,
	CREATE_MEAL_ERROR,
	SET_EDIT_MEAL,
	EDIT_MEAL_BEGIN,
	EDIT_MEAL_SUCCESS,
	EDIT_MEAL_ERROR,
	DELETE_MEAL_BEGIN,
	DELETE_MEAL_SUCCESS,
	DELETE_MEAL_ERROR,
	DISPLAY_ALERT,
	CLEAR_ALERT,
} from "../actions";
import reducer from "../reducers/meals_reducer";
import authFetch from "../utils/axios";

const initialState = {
	isSidebarOpen: false,
	grid_view: true,
	meals_loading: false,
	meals_error: false,
	meals: [],
	featured_meals: [],
	single_meal_loading: false,
	single_meal_error: false,
	single_meal: {},

	categoryOptions: ["pizza", "pasta", "soup", "salad", "dessert"],
	search: "",
	searchType: "all",
	sort: "a-z",
	sortOptions: ["a-z", "z-a", "price-lowest", "price-highest"],
	numOfPages: 1,
	page: 1,
	//create and edit meal values
	isLoading: false,
	showAlert: false,
	alertText: "",
	alertType: "",
	/////
	isEditing: false,
	editMealId: "",
	name: "",
	description: "",
	image: "",
	price: "",
	category: "pizza",
	featuredOptions: ["true", "false"],
	featured: "true",
	averageRating: 3,
	averageRatingOptions: [1, 2, 3, 4, 5],
	numberOfReviews: "",
};

const MealsContext = React.createContext();

export const MealsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const clearValues = () => {
		dispatch({ type: CLEAR_VALUES });
	};

	const toggleSidebar = () => {
		dispatch({ type: TOGGLE_SIDEBAR });
	};

	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN });
	};

	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE });
	};

	const setListView = () => {
		dispatch({ type: SET_LISTVIEW });
	};

	const setGridView = () => {
		dispatch({ type: SET_GRIDVIEW });
	};

	////functionalities available only for the admin////
	const createMeal = async () => {
		dispatch({ type: CREATE_MEAL_BEGIN });
		try {
			const {
				name,
				description,
				image,
				price,
				category,
				featured,
				averageRating,
				numberOfReviews,
			} = state;
			await authFetch.post("/meals", {
				name,
				description,
				image,
				price,
				category,
				featured,
				averageRating,
				numberOfReviews,
			});
			dispatch({ type: CREATE_MEAL_SUCCESS });
			dispatch({ type: CLEAR_VALUES });
		} catch (error) {
			if (error.response.status === 401) return;
			dispatch({
				CREATE_MEAL_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const setEditMeal = (id) => {
		dispatch({ type: SET_EDIT_MEAL, payload: { id } });
	};

	const editMeal = async () => {
		dispatch({ type: EDIT_MEAL_BEGIN });
		try {
			const {
				name,
				description,
				image,
				price,
				category,
				featured,
				averageRating,
				numberOfReviews,
			} = state;
			await authFetch.patch(`/meals/${state.editMealId}`, {
				name,
				description,
				image,
				price,
				category,
				featured,
				averageRating,
				numberOfReviews,
			});
			dispatch({ type: EDIT_MEAL_SUCCESS });
			dispatch({ type: CLEAR_VALUES });
		} catch (error) {
			if (error.response.status === 401) return;
			dispatch({
				type: EDIT_MEAL_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const deleteMeal = async (mealId) => {
		dispatch({ type: DELETE_MEAL_BEGIN });
		try {
			await authFetch.delete(`/meals/${mealId}`);
			dispatch({ type: DELETE_MEAL_SUCCESS });
			getMeals();
		} catch (error) {
			dispatch({
				type: DELETE_MEAL_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};
	////end of functionalities available only for the admin////

	const getMeals = async () => {
		const { search, searchType, sort, page } = state;

		let url = `/meals?page=${page}&category=${searchType}&sort=${sort}`;
		if (search) {
			url = url + `&search=${search}`;
		}

		dispatch({ type: GET_MEALS_BEGIN });
		try {
			const { data } = await authFetch(url);
			const { meals, totalMeals, numOfPages } = data;
			dispatch({
				type: GET_MEALS_SUCCESS,
				payload: {
					meals,
					totalMeals,
					numOfPages,
				},
			});
		} catch (error) {
			dispatch({ type: GET_MEALS_ERROR });
		}
	};

	const getSingleMeal = async (url) => {
		dispatch({ type: GET_SINGLE_MEAL_BEGIN });

		try {
			const { data } = await authFetch(url);
			const { meal } = data;
			dispatch({ type: GET_SINGLE_MEAL_SUCCESS, payload: meal });
		} catch (error) {
			dispatch({ type: GET_SINGLE_MEAL_ERROR });
		}
	};

	const handleChange = ({ name, value }) => {
		dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
	};

	const clearFilters = () => {
		dispatch({ type: CLEAR_FILTERS });
	};

	const changePage = (page) => {
		dispatch({ type: CHANGE_PAGE, payload: { page } });
	};

	const displayAlert = () => {
		dispatch({ type: DISPLAY_ALERT });
		clearAlert();
	};

	const clearAlert = () => {
		setTimeout(() => {
			dispatch({ type: CLEAR_ALERT });
		}, 3000);
	};

	useEffect(() => {
		getMeals();
	}, []);

	return (
		<MealsContext.Provider
			value={{
				...state,
				openSidebar,
				closeSidebar,
				toggleSidebar,
				setListView,
				setGridView,
				getSingleMeal,
				clearFilters,
				handleChange,
				getMeals,
				changePage,
				clearValues,
				createMeal,
				setEditMeal,
				editMeal,
				deleteMeal,
				displayAlert,
				clearAlert,
			}}
		>
			{children}
		</MealsContext.Provider>
	);
};

export const useMealsContext = () => {
	return useContext(MealsContext);
};
