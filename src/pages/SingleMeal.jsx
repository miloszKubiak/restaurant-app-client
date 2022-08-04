import React, { useEffect } from "react";
import { SINGLE_MEAL_URL } from "../utils/constants";
import styled from "styled-components";
import { useParams, Link, useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import { useMealsContext } from "../context/meals-context";
import {
	Loading,
	Error,
	PageHero,
	Stars,
	AddToCart,
	MealImages,
} from "../components";

const SingleMeal = () => {
	const { id } = useParams();
	const {
		single_meal_loading: loading,
		single_meal_error: error,
		single_meal: meal,
		fetchSingleMeal,
	} = useMealsContext();

	useEffect(() => {
		fetchSingleMeal(`${SINGLE_MEAL_URL}${id}`);
		console.log(meal);
	}, [id]);

	return <Wrapper>dupa</Wrapper>;
};

export default SingleMeal;

const Wrapper = styled.main``;
