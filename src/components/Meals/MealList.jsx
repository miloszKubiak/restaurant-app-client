import React from "react";
import ListView from "../ListView/ListView";
import GridView from "../GridView/GridView";
import { useFilterContext } from "../../context/filter-context";

const MealList = () => {
	const { filtered_meals: meals, grid_view } = useFilterContext();

	if (meals.length < 1) {
		return <h5>Sorry, no meals matched your search...</h5>;
	} /// to be checked later

	if (grid_view === false) {
		return <ListView meals={meals} />;
	}

	return <GridView meals={meals}>MealsList</GridView>;
};

export default MealList;
