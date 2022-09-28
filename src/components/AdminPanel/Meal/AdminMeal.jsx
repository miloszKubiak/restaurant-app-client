import React from "react";
import styled from "styled-components";

const AdminMeal = ({ _id, name, category, price, image }) => {
	return (
		<Wrapper>
			<h5>ID: {_id}</h5>
			<p>name: {name}</p>
			<p>category: {category}</p>
			<p>price: {price} $</p>
			<Image src={image} alt={name} />
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
`;
