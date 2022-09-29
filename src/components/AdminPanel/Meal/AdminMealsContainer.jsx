import React from "react";
import { useEffect } from "react";
import { useMealsContext } from "../../../context/meals-context";
import { AdminMeal } from "../Meal";
import styled from "styled-components";
import Alert from "../../Alert/Alert";
import AdminAlert from "../AdminAlert";
import Loader from "../../Loader/Loader";

const AdminMealsContainer = () => {
	const {
		getMeals,
		meals,
		page,
		searchType,
		search,
		sort,
		setEditMeal,
		deleteMeal,
		showAlert,
		isLoading,
	} = useMealsContext();

	useEffect(() => {
		getMeals();
	}, [page, searchType, sort, search]);

	return (
		<Wrapper>
			<div className="alert-container">{showAlert && <AdminAlert />}</div>
			{isLoading && <Loader />}
			<Center>
				{meals.map((meal) => {
					return (
						<AdminMeal
							key={meal._id}
							{...meal}
							onMealDelete={deleteMeal}
							onSetEditMeal={setEditMeal}
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
	flex-direction: column;
	justify-content: center;

	.alert-container {
		width: 50%;
		margin: 0 auto;
	}
`;

const Center = styled.div`
	display: grid;
	margin: 0 auto;
	width: 100%;
	max-width: 1170px;
	gap: 0.5rem;
	background: #000;

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
