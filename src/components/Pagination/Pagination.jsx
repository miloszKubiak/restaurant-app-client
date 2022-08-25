import React from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import styled from "styled-components";
import { useMealsContext } from "../../context/meals-context";

const Pagination = () => {
	const { numOfPages, page } = useMealsContext();

	const prevPage = () => {
		console.log("prev");
	};

	const nextPage = () => {
		console.log("next");
	};

	return (
		<Wrapper>
			<Button onClick={prevPage}>
				<FaAngleDoubleLeft />
				prev
			</Button>
			<ButtonsContainer>buttons</ButtonsContainer>
			<Button onClick={nextPage}>
				next
				<FaAngleDoubleRight />
			</Button>
		</Wrapper>
	);
};

export default Pagination;

const Wrapper = styled.section`
  height: 4rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ButtonsContainer = styled.div`
  background: var(--primary-1);
  border-radius: .2rem;
`;

const Button = styled.button`
	width: 6rem;
	height: 2.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--primary-3);
	border-color: transparent;
	border-radius: 0.2rem;
	color: var(--primary-2);
	text-transform: capitalize;
	letter-spacing: var(--spacing);
  font-weight: bold;
  font-family: inherit;
  font-size: 1rem;
	gap: 0.5rem;
	cursor: pointer;
	transition: var(--transition);

	&:hover {
		background: var(--primary-7);
	}
`;
