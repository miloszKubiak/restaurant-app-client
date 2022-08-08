import React from "react";
import ListView from "../ListView/ListView";
import GridView from "../GridView/GridView";
import { useFilterContext } from "../../context/filter-context";

const MealList = () => {
	const { filtered_meals: meals } = useFilterContext()

	return <GridView meals={meals}>MealsList</GridView>;
};

export default MealList;
