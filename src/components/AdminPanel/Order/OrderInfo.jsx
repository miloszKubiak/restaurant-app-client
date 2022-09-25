import React from "react";
import styled from "styled-components";

const OrderInfo = ({ text, icon }) => {
	return (
		<Wrapper>
			<Icon>{icon}</Icon>
			<Text>{text}</Text>
		</Wrapper>
	);
};

export default OrderInfo;

const Wrapper = styled.div`
	display: flex;
	padding: .2rem 0;
	color: var(--primary-2)
`;

const Icon = styled.span``;

const Text = styled.span`
	margin-left: .2rem;
`;
