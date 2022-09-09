import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, Link, useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import { useMealsContext } from "../context/meals-context";
import {
	Loader,
	Error,
	PageHero,
	Stars,
	AddToCart,
	MealImage,
	Navbar,
	Sidebar,
	Footer,
} from "../components";

const SingleMeal = () => {
	const { id } = useParams();
	const {
		single_meal_loading: loading,
		single_meal_error: error,
		single_meal: meal,
		getSingleMeal,
	} = useMealsContext();
	const navigate = useNavigate();

	useEffect(() => {
		getSingleMeal(`/meals/${id}`);
	}, [id]);

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				navigate("/");
			}, 3000);
		}
	}, [error]);

	const {
		name,
		description,
		price,
		stock,
		averageRating,
		numberOfReviews,
		preparationTime,
		category,
		image,
	} = meal;

	if (loading) return <Loader />;
	if (error) return <Error />;
	///uzyć ternary operator!!

	return (
		<>
			<Navbar />
			<Sidebar />
			<PageHero title={name} meal />
			<Wrapper>
				<Container>
					<ImagesContainer>
						<ButtonBack to="/meals">back to meals</ButtonBack>
						<MealImage image={image} />
					</ImagesContainer>
					<Content>
						<Title>{name}</Title>
						<Stars
							reviews={numberOfReviews}
							stars={averageRating}
						/>
						<Price>{formatPrice(price)}</Price>
						<Description>{description}</Description>
						<Info>
							<span>Available : </span>
							{stock > 0 ? "Meal Available" : "Meal unavailable"}
						</Info>
						<Info>
							<span>Preparation time : </span>
							{preparationTime}
						</Info>
						<Info>
							<span>Category : </span>
							{category}
						</Info>
						<hr />
						{stock > 0 && <AddToCart meal={meal} />}
					</Content>
				</Container>
			</Wrapper>
			<Footer />
		</>
	);
};

export default SingleMeal;

const Wrapper = styled.main`
	min-height: calc(100vh - (10vh + 10rem));
	padding: 2rem 0;
	width: 90vw;
	max-width: var(--max-width);
	margin: 0 auto;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: .6rem;

	@media screen and (min-width: 992px) {
		flex-direction: row;
	}
`;

const ImagesContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const ButtonBack = styled(Link)`
	display: block;
	text-align: center;
	width: 10rem;
	padding: 0.8rem 1rem;
	margin: 1.5rem 0;
	background: var(--primary-3);
	color: var(--primary-2);
	text-decoration: none;
	text-transform: capitalize;
	border-radius: 0.4rem;
	letter-spacing: var(--spacing);
	transition: var(--transition);
	font-weight: bold;

	&:hover {
		color: var(--primary-3);
		background: var(--primary-1);
	}
`;

const Content = styled.section`
	flex: 1;
	display: flex;
	flex-direction: column;
	/* justify-content: space-between; */
	gap: 1rem;

	hr {
		padding: 0.1rem;
		background: var(--primary-3);
		border: none;
	}
`;

const Title = styled.h2`
	text-transform: capitalize;
	font-size: 2.5rem;
`;

const Price = styled.h5`
	font-size: 1.5rem;
`;

const Description = styled.p`
	max-width: 40em;
	letter-spacing: var(--spacing);
`;

const Info = styled.p`
	text-transform: capitalize;
	width: 20rem;
	display: flex;
	gap: 4rem;
	letter-spacing: var(--spacing);
	span {
		font-weight: 700;
	}
`;
