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
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
	const { meals } = useMealsContext();

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({ type: LOAD_MEALS, payload: meals });
	}, [meals]);

	return (
		<FilterContext.Provider value={{ ...state }}>{children}</FilterContext.Provider>
	);
};

export const useFilterContext = () => {
	return useContext(FilterContext);
};
