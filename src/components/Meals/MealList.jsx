import React from "react";
import ListView from "../ListView/ListView";
import GridView from "../GridView/GridView";
import { useMealsContext } from "../../context/meals-context";
import { useEffect } from "react";

const MealList = () => {
	const { grid_view, meals, getMeals, search, searchType, sort, page } =
		useMealsContext();

	useEffect(() => {
		getMeals();
	}, [search, searchType, sort, page]);


	if (meals.length < 1) {
		return <h5>Sorry, no meals matched your search...</h5>;
	} /// to be checked later

	if (grid_view === false) {
		return <ListView meals={meals} />;
	}

	return <GridView meals={meals} />;
};

export default MealList;
