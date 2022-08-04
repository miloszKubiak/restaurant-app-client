import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Loader, Error, Meal } from "../../components";
import { useMealsContext } from "../../context/meals-context";

const FeaturedMeals = () => {
	const {
		meals_loading: loading,
		meals_error: error,
		featured_meals: featured,
	} = useMealsContext();

	return (
		<Wrapper>
			<Header>
				<Title>featured meals</Title>
				<Underline />
				{loading && <Loader />}
				{error && <Error />}
			</Header>
			<List>
				{featured.slice(0, 4).map((meal) => {
					return <Meal key={meal.id} {...meal} />;
				})}
			</List>
		</Wrapper>
	);
};

export default FeaturedMeals;

const Wrapper = styled.section`
	padding: 5rem 0;
	background: #f9f9f9;
`;

const Header = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h2`
	text-align: center;
	font-size: 3rem;
	margin-bottom: .5rem;
	text-transform: capitalize;
`;

const Underline = styled.div`
	background: var(--primary-3);
	padding: .2rem;
	width: 15rem;
`;

const List = styled.div`
	margin: 4rem auto;
	width: 90vw;
	max-width: var(--max-width);
	display: flex;
	gap: 3rem;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		padding: 0 1rem;
	}
`;
