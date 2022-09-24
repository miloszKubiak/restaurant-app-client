import React from "react";
import styled from "styled-components";

const OrderItem = ({ name, amount, price }) => {
	return (
		<Wrapper>
			<p>{name}</p>
			<p>{amount}</p>
			<p>{price}</p>
		</Wrapper>
	);
};

export default OrderItem;

const Wrapper = styled.div``;
