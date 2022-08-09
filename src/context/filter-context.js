import React, { useState, useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/filter_reducer";
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
import { useMealsContext } from "./meals-context";

const initialState = {
	all_meals: [],
	filtered_meals: [],
	grid_view: true,
	sort: "name-a",
	filters: {
		text: "",
		category: "all",
		price: 0,
		min_price: 0,
		max_price: 0,
		delivery: false,
	},
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
	const { meals } = useMealsContext();

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({ type: LOAD_MEALS, payload: meals });
	}, [meals]);

	useEffect(() => {
		dispatch({ type: SORT_MEALS });
	}, [meals, state.sort]);

	const setListView = () => {
		dispatch({ type: SET_LISTVIEW });
	};

	const setGridView = () => {
		dispatch({ type: SET_GRIDVIEW });
	};

	const updateSort = (e) => {
		// const name = e.target.name; // only for example
		const value = e.target.value;
		dispatch({ type: UPDATE_SORT, payload: value });
	};

	return (
		<FilterContext.Provider
			value={{ ...state, setListView, setGridView, updateSort }}
		>
			{children}
		</FilterContext.Provider>
	);
};

export const useFilterContext = () => {
	return useContext(FilterContext);
};
