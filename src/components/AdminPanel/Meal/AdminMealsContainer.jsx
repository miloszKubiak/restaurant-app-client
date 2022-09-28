import React from "react";
import { useEffect } from "react";
import { useMealsContext } from "../../../context/meals-context";
import { AdminMeal } from "../Meal";
import styled from "styled-components";

const AdminMealsContainer = () => {
	const { getMeals, meals, page, searchType, search, sort } =
		useMealsContext();

	const editMeal = (_id) => {
		console.log("edit");
	};

	const deleteMeal = (_id) => {
		console.log("delete");
	};

	useEffect(() => {
		getMeals();
	}, [page, searchType, sort, search]);

	return (
		<Wrapper>
			<Center>
				{meals.map((meal) => {
					return (
						<AdminMeal
							key={meal._id}
							{...meal}
							onMealEdit={editMeal}
							onMealDelete={deleteMeal}
						/>
					);
				})}
			</Center>
		</Wrapper>
	);
};

export default AdminMealsContainer;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const Center = styled.div`
	display: grid;
	width: 100%;
	max-width: 70vw;
	gap: 0.5rem;

	@media screen and (min-width: 576px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: 992px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (min-width: 1170px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;