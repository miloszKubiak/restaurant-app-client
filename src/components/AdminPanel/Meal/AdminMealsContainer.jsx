import React from "react";
import { useEffect } from "react";
import { useMealsContext } from "../../../context/meals-context";
import { AdminMeal } from "../Meal";
import styled from "styled-components";

const AdminMealsContainer = () => {
	const { getMeals, meals, page, searchType, search, sort } =
		useMealsContext();

	useEffect(() => {
		getMeals();
	}, [page, searchType, sort, search]);

	return (
		<Wrapper>
			{meals.map((meal) => {
				return <AdminMeal key={meal._id} {...meal} />;
			})}
		</Wrapper>
	);
};

export default AdminMealsContainer;

const Wrapper = styled.div`
	display: grid;
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
