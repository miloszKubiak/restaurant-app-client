import React from "react";
import styled from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa";

const AmountButtons = ({ increase, decrease, amount }) => {
	return (
		<Wrapper>
			<Container>
				<Button onClick={decrease}>
					<FaMinus />
				</Button>
				<Amount>{amount}</Amount>
				<Button onClick={increase}>
					<FaPlus />
				</Button>
			</Container>
		</Wrapper>
	);
};

export default AmountButtons;

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Container = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem;
`;

const Button = styled.button`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 0.5rem;
	background: transparent;
	border: none;
	cursor: pointer;

	svg {
		color: var(--primary-3);
		font-size: 1.5rem;
	}
`;

const Amount = styled.h2`
  flex: 1;
  padding: 0 .8rem;
  text-align: center;
  color: #222;
`;
