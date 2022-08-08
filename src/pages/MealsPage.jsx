import React from "react";
import styled from "styled-components";
import { PageHero, Filters, Sort, MealList } from "../components";

const MealsPage = () => {
	return <>
		<PageHero title="All Meals" />
		<Wrapper>
			<Center>
				<Filters />
				<Container>
					<Sort />
					<MealList />
				</Container>
			</Center>
		</Wrapper>
	</>;
};

export default MealsPage;

const Wrapper = styled.div``;

const Center = styled.div`
	display: grid;
	gap: 3rem 1.5rem;
	margin: 4rem auto;

	@media (min-width: 768px) {
		grid-template-columns: 200px 1fr;
	}
`;

const Container = styled.div``;
