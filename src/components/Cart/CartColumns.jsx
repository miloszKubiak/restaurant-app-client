import React from 'react'
import styled from 'styled-components'


const CartColumns = () => {
  return (
    <Wrapper>
      <Content>
        <Title>item</ Title>
        <Title>price</ Title>
        <Title>quantity</ Title>
        <Title>subtotal</ Title>
      </Content>
      <hr />
    </Wrapper>
  )
}

export default CartColumns

const Content = styled.div``;

const Title = styled.h5`
	color: var(--grey-1);
	font-weight: 400;
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
`;

const Wrapper = styled.div`
	display: none;

	@media screen and (min-width: 768px) {
		display: block;

		${Content} {
			display: grid;
			grid-template-columns: 316px 1fr 1fr 1fr auto;
			justify-items: center;
			column-gap: 1rem;
		}
	}
`;

