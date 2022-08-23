import React from "react";
import styled from "styled-components";
import { useMealsContext } from "../../context/meals-context";

const MealImage = () => {
	const { single_meal: meal } = useMealsContext();
	const { image, name } = meal;

	return (
    <Wrapper>
			<Image src={image} alt={name} />
		</Wrapper>
	);
};

export default MealImage;

const Image = styled.img`
  flex: 1;
	display: block;
	width: 100%;
  max-height: 20rem;
	object-fit: cover;
  border-radius: .2rem;
`;

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;


	@media screen and (max-width: 576px) {
    ${Image} {
      max-height: 12rem;
    }
	}
`;
