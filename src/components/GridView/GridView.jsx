import React from "react";
import styled from "styled-components";
import { useMealsContext } from "../../context/meals-context";
import Meal from "../Meals/Meal";
import Pagination from "../Pagination/Pagination";

const GridView = ({ meals }) => {
	const { numOfPages } = useMealsContext();

	return (
		<Wrapper>
			<Container>
				{meals.map((meal) => {
					return <Meal key={meal._id} {...meal} />;
				})}
			</Container>
			{numOfPages > 1 && <Pagination />}
		</Wrapper>
	);
};

export default GridView;

const Wrapper = styled.section``;

const Container = styled.div`
	display: grid;
	gap: 2rem 1.5rem;

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
