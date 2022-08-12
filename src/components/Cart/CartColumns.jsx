import React from "react";
import styled from "styled-components";

const CartColumns = () => {
	return (
		<Wrapper>
			<Content>
				<Title>item</Title>
				<Title>price</Title>
				<Title>quantity</Title>
        <Title>subtotal</Title>
        <span></span>
			</Content>
			<hr />
		</Wrapper>
	);
};

export default CartColumns;

const Content = styled.div``;

const Title = styled.h5`
	flex: 2;
	color: var(--grey-1);
	font-weight: 400;
	font-size: 1rem;
	text-transform: capitalize;
	letter-spacing: var(--spacing);
  text-align: center;
`;

const Wrapper = styled.div`
	display: none;

	@media screen and (min-width: 768px) {
		display: block;

    span {
      width: 2rem;
      height: 2rem;
    }

		${Content} {
			display: flex;
      align-items: center;
      gap: 1rem;
		}
	}
`;
