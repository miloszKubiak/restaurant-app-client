import React from "react";
import { useEffect } from "react";
import { useMealsContext } from "../../context/meals-context";
import { SearchContainer, Pagination } from "../../components";

const AllMeals = () => {
	const { getMeals, meals, numOfPages, page, searchType, sort } =
		useMealsContext();
	console.log(meals);

	useEffect(() => {
		getMeals();
	}, [page, searchType, sort]);

	return (
		<>
			<SearchContainer />
			{meals.map((meal) => {
				return (
					<li key={meal._id}>
						<p>{meal._id}</p>
						<p>{meal.name}</p>
						<p>{meal.category}</p>
						<p>{meal.price} $</p>
					</li>
				);
			})}
			{numOfPages > 1 && <Pagination />}
		</>
	);
};

export default AllMeals;
