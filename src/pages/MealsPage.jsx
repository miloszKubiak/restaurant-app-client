import React from "react";
import styled from "styled-components";
import {
	PageHero,
	ChangeViewBar,
	MealList,
	Navbar,
	Sidebar,
	SearchContainer,
} from "../components";

const MealsPage = () => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<PageHero title="All Meals" />
			<Wrapper>
				<Center>
					{/* <Filters /> */}
					<Container>
						<SearchContainer />
						<ChangeViewBar />
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
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	max-width: var(--max-width);
	width: 90vw;
	margin: 3rem auto;

	@media (max-width: 768px) {
	}
`;

const Container = styled.div`

`;

