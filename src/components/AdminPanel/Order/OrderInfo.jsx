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

const Wrapper = styled.div``;

const Icon = styled.span``;

const Text = styled.span``;
