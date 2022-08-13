import React from "react";
import styled from "styled-components";
import { PageHero, Filters, Sort, MealList } from "../components";

const MealsPage = () => {
	return (

		<>
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
		</>
	);
};

export default MealsPage;

const Wrapper = styled.div`
	min-height: calc(100vh - (20vh + 10rem));
`;

const Center = styled.div`
	/* display: grid;
	gap: 3rem 1.5rem;
	margin: 4rem auto; */
	display: flex;
	gap: 2rem;
	max-width: var(--max-width);
	width: 90vw;
	margin: 3rem auto;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const Container = styled.div`

`;

