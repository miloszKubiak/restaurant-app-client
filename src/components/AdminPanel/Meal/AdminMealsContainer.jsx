import React from "react";
import { useEffect } from "react";
import { useMealsContext } from "../../../context/meals-context";
import { AdminMeal } from "../Meal";

const AdminMealsContainer = () => {
	const { getMeals, meals, page, searchType, search, sort } =
		useMealsContext();

	useEffect(() => {
		getMeals();
	}, [page, searchType, sort, search]);

	return (
		<>
			{meals.map((meal) => {
				return <AdminMeal key={meal._id} {...meal} />;
			})}
		</>
	);
};

export default AdminMealsContainer;
