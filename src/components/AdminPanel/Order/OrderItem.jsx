import React from "react";
import styled from "styled-components";

const OrderItem = ({ name, amount, price }) => {
	return (
		<Wrapper>
			<p>{name}</p>
			<p>qty: {amount}</p>
			<p>price: {price} €</p>
		</Wrapper>
	);
};

export default OrderItem;

const Wrapper = styled.div`
	background: green;
	margin: .2rem;
	padding: .2rem;
	display: flex;
	flex-direction: column;
`;
