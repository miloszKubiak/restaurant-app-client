import React from "react";
import styled from "styled-components";
import { IoList, IoGrid } from "react-icons/io5";
import { useMealsContext } from "../../context/meals-context";

const ChangeViewBar = () => {
	const { meals, totalMeals, grid_view, setListView, setGridView } =
		useMealsContext();

	return (
		<Wrapper>
			<BtnContainer>
				<Button
					className={`${grid_view ? "active" : null}`}
					onClick={setGridView}
				>
					<IoGrid />
				</Button>
				<Button
					className={`${!grid_view ? "active" : null}`}
					onClick={setListView}
				>
					<IoList />
				</Button>
			</BtnContainer>
			<Info>{totalMeals} meal{meals.length > 1 && "s"} found</Info>
			<hr />
		</Wrapper>
	);
};

export default ChangeViewBar;

const BtnContainer = styled.div`
	display: flex;
	flex: 1;
	gap: 1rem;

	.active {
		background: var(--primary-1);
		color: var(--primary-3);
	}
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 3rem;
	width: 3rem;
	border-radius: 0.4rem;
	background: transparent;
	cursor: pointer;
	color: var(--primary-3);
	border: 0.2rem solid var(--primary-3);
	transition: var(--transition);

	svg {
		font-size: 2rem;
	}

	&:hover {
		background: var(--primary-1);
	}
`;

const Info = styled.p`
	text-transform: capitalize;
	letter-spacing: var(--spacing);
	margin-right: 2rem;
`;

const Label = styled.label`
	flex: 1;
	text-transform: capitalize;
	display: inline-block;
	margin-right: 0.5rem;
	letter-spacing: var(--spacing);
	font-weight: bold;
`;

const Wrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	margin-bottom: 2rem;
	padding: .5rem;

	hr {
		flex: 4;
		border: none;
		background: var(--primary-3);
		padding: 0.1rem;
	}

	@media (max-width: 576px) {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;

		${BtnContainer} {
			width: 7rem;
		}
		${Label} {
			display: inline-block;
			margin-right: 1rem;
			text-transform: capitalize;
		}
	}
`;
