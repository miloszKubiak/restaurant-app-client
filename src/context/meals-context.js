import React, { useContext, useEffect, useReducer } from "react";
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
import reducer from "../reducers/meals_reducer";
import { authFetch } from "../utils/axios";

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
};

const MealsContext = React.createContext();

export const MealsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

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

	const getMeals = async () => {
		const { search, searchType, sort } = state;

		let url = `/meals?category=${searchType}&sort=${sort}`;
		if (search) {
			url = url + `&search=${search}`;
		}

		dispatch({ type: GET_MEALS_BEGIN });
		try {
			const { data } = await authFetch(url);
			const { meals } = data;
			dispatch({
				type: GET_MEALS_SUCCESS,
				payload: {
					meals,
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
	///////
	//////
	const handleChange = ({ name, value }) => {
		dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
	};

	const clearFilters = () => {
		dispatch({ type: CLEAR_FILTERS });
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
				setListView,
				setGridView,
				getSingleMeal,
				clearFilters,
				handleChange,
				getMeals,
			}}
		>
			{children}
		</MealsContext.Provider>
	);
};

export const useMealsContext = () => {
	return useContext(MealsContext);
};
