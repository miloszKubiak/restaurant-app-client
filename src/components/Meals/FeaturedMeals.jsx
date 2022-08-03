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

	if (loading) return <Loader />;
	if (error) return <Error />;

	return (
		<Wrapper>
			<Header>
				<Title>featured meals</Title>
				<Underline />
			</Header>
			<List>
				{featured.slice(0,4).map((meal) => {
					return <Meal key={meal.id} {...meal} />;
				})}
			</List>
		</Wrapper>
	);
};

export default FeaturedMeals;

const Wrapper = styled.section``;

const Header = styled.div``;

const Title = styled.h2``;

const Underline = styled.div``;

const List = styled.div``;
