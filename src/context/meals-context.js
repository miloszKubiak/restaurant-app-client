import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
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
import reducer from "../reducers/meals_reducer";
import { MEALS_URL } from "../utils/constants";

const initialState = {
	isSidebarOpen: false,
	meals_loading: false,
	meals_error: false,
	meals: [],
	featured_meals: [],
	single_meal_loading: false,
	single_meal_error: false,
	single_meal: {},
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

	const fetchMeals = async (url) => {
		dispatch({ type: GET_MEALS_BEGIN });

		try {
			const response = await axios(url);
			const meals = response.data;
			dispatch({ type: GET_MEALS_SUCCESS, payload: meals });
		} catch (error) {
			dispatch({ type: GET_MEALS_ERROR });
		}
	};

	const fetchSingleMeal = async (url) => {
		dispatch({ type: GET_SINGLE_MEAL_BEGIN });

		try {
			const response = await axios(url);
			const singleMeal = response.data;
			dispatch({ type: GET_SINGLE_MEAL_SUCCESS, payload: singleMeal });
		} catch (error) {
			dispatch({ type: GET_SINGLE_MEAL_ERROR });
		}
	};

	useEffect(() => {
		fetchMeals(MEALS_URL);
	}, []);

	return (
		<MealsContext.Provider
			value={{ ...state, openSidebar, closeSidebar, fetchSingleMeal }}
		>
			{children}
		</MealsContext.Provider>
	);
};

export const useMealsContext = () => {
	return useContext(MealsContext);
};
