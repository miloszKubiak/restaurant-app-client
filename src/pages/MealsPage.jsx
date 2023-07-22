import React from "react";
import styled from "styled-components";
import {
	PageHero,
	ChangeViewBar,
	MealList,
	Navbar,
	Sidebar,
	SearchContainer,
	Footer,
} from "../components";
import { useMealsContext } from "../context/meals-context";

const MealsPage = () => {
	const { meals } = useMealsContext()
	return (
		<>
			<Navbar />
			<Sidebar />
			<PageHero title="All Meals" />
			<Wrapper>
				<Container>
					<SearchContainer />
					{meals.length > 1 && <ChangeViewBar />}
					<MealList />
				</Container>
			</Wrapper>
			<Footer />
		</>
	);
};

export default MealsPage;

const Wrapper = styled.div`
	min-height: calc(100vh - (20vh + 10rem));
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	max-width: var(--max-width);
	width: 90vw;
	margin: 3rem auto;
`;

const Container = styled.div`

`;

