import React from "react";
import { useMealsContext } from "../../context/meals-context";
import { SearchContainer, Pagination } from "../../components";
import { AdminMealsContainer } from "../../components/AdminPanel/Meal";

const AllMeals = () => {
	const { numOfPages } = useMealsContext();

	return (
		<>
			<SearchContainer />
			<AdminMealsContainer />
			{numOfPages > 1 && <Pagination />}
		</>
	);
};

export default AllMeals;
