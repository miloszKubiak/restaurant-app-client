import React from "react";
import { useEffect } from "react";
import { useMealsContext } from "../../context/meals-context";
import { SearchContainer, Pagination } from "../../components";

const AllMeals = () => {
	const { getMeals, meals, numOfPages, page, searchType, search, sort } =
		useMealsContext();

	useEffect(() => {
		getMeals();
	}, [page, searchType, sort, search]);

	return (
		<>
			<SearchContainer />
			{meals.map((meal) => {
				return (
					<li key={meal._id}>
						<p>meal id: {meal._id}</p>
						<p>meal name: {meal.name}</p>
						<p>meal category: {meal.category}</p>
						<p>meal price: {meal.price} $</p>
						<p>meal image: {meal.image}</p>
					</li>
				);
			})}
			{numOfPages > 1 && <Pagination />}
		</>
	);
};

export default AllMeals;
