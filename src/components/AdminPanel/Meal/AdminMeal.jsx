import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMealsContext } from "../../../context/meals-context";

const AdminMeal = ({
	_id,
	name,
	category,
	price,
	image,
	onMealDelete,
	onSetEditMeal,
}) => {
	const { isLoading } = useMealsContext();

	return (
		<Wrapper>
			<Info>
				<h5>ID: {_id}</h5>
				<p>name: {name}</p>
				<p>category: {category}</p>
				<p>price: {price} $</p>
				<Image src={image} alt={name} />
			</Info>
			<ButtonsContainer>
				<Link
					style={{ textDecoration: "none" }}
					to="/admin-panel/add-meal"
				>
					<Button
						color="yellow"
						onClick={() => onSetEditMeal(_id)}
						disabled={isLoading}
					>
						edit
					</Button>
				</Link>
				<Button
					color="red"
					onClick={() => onMealDelete(_id)}
					disabled={isLoading}
				>
					delete
				</Button>
			</ButtonsContainer>
		</Wrapper>
	);
};

export default AdminMeal;

const Wrapper = styled.div`
	margin: 0.5rem;
	padding: 0.5rem;
	border-radius: 0.3rem;
	background: var(--primary-3);
`;

const Image = styled.img`
	width: 5rem;
	height: 5rem;
	margin: 0.5rem auto;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	color: var(--primary-2);
`;

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 0.5rem;
	width: 100%;
	margin-top: 0.5rem auto;
`;

const Button = styled.button`
	margin: 0.2rem 0;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0.2rem;
	text-transform: capitalize;
	text-align: center;
	letter-spacing: var(--spacing);
	width: 6rem;
	height: 2rem;
	font-size: 1rem;
	font-weight: bold;
	font-family: inherit;
	border: none;
	color: var(--primary-2);
	transition: var(--transition);
	background: ${(props) =>
		props.color === "yellow" ? "#F9A826" : "#F50057"};
	cursor: pointer;

	&:hover {
		background: ${(props) =>
			props.color === "yellow" ? "#b16e03" : "#b1003e"};
	}

	&:disabled {
		background: var(--grey-1);
	}
`;
