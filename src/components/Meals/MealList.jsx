import React from "react";
import styled from "styled-components";
import ListView from "../ListView/ListView";
import GridView from "../GridView/GridView";
import { useMealsContext } from "../../context/meals-context";
import { useEffect } from "react";
import notFoundImg from "../../assets/not-found.svg"

const MealList = () => {
	const { grid_view, meals, getMeals, search, searchType, sort, page } =
		useMealsContext();

	useEffect(() => {
		getMeals();
	}, [search, searchType, sort, page]);


	if (meals.length < 1) {
		return (
			<Wrapper>
				<Container>
					<img src={notFoundImg} alt="meal not found"/>
					<h3>Sorry, no meals matched your search...</h3>
				</Container>
			</Wrapper>
		);
	} /// to be checked later

	if (grid_view === false) {
		return <ListView meals={meals} />;
	}

	return <GridView meals={meals} />;
};

export default MealList;

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	max-width: var(--max-width);
	width: 90vw;
	margin: 3rem auto;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h3 {
		margin: 1rem;
		font-size: 1.5rem;
		font-weight: bold;
		line-height: 1.3;
		margin-bottom: 1rem;
		letter-spacing: var(--spacing);
	}

	img {
		display: block;
		width: 90vw;
		max-width: 300px;
	}
`;
