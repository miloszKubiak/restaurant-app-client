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
	display: flex;
	flex-direction: column;
	margin: .2rem .5rem;;
	padding: .2rem;
	border-radius: .3rem;
	background: var(--primary-3);

	p {
		margin: 0 .3rem;
		color: var(--primary-2);
	}
	`;
