import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageHero, CartContent } from "../components";
import { useCartContext } from "../context/cart-context";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <WrapperEmpty>
        <Empty>
          <Info>Your cart is empty</Info>
          <Button to="/meals">back to meals</Button>
        </Empty>
      </WrapperEmpty>
    )
  }

  return (
		<>
			<PageHero title="cart" />
			<Wrapper>
				<CartContent />
			</Wrapper>
		</>
	);
};

export default CartPage;

const Wrapper = styled.main`
	min-height: calc(100vh - (20vh - 10rem));
`;

const WrapperEmpty = styled.main`
	min-height: calc(100vh - 10rem);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 4rem 0;
`;

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Info = styled.h2`
`;

const Button = styled(Link)`
	margin: 1rem;
	padding: 0.8rem 1rem;
	background: var(--primary-3);
	color: var(--primary-2);
	text-decoration: none;
	border-radius: 0.4rem;
  text-transform: capitalize;
	letter-spacing: var(--spacing);
	transition: var(--transition);
	font-weight: bold;

	&:hover {
		color: var(--primary-3);
		background: var(--primary-1);
	}
`;
