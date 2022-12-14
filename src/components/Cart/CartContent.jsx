import React from "react";
import styled from "styled-components";
import CartItem from "../Cart/CartItem";
import CartColumns from "../Cart/CartColumns";
import CartTotals from "../Cart/CartTotals";
import { useCartContext } from "../../context/cart-context";
import { Link } from "react-router-dom";

const CartContent = () => {
	const { cart, clearCart } = useCartContext();

	return (
		<Wrapper>
			<CartColumns />
			{cart.map((item) => {
				return <CartItem key={item.id} {...item} />;
			})}
			<hr />
			<Container>
				<ButtonsContainer>
					<LinkButton to="/meals">continue ordering</LinkButton>
					<ClearButton onClick={clearCart}>clear cart</ClearButton>
				</ButtonsContainer>
				<CartTotals />
			</Container>
		</Wrapper>
	);
};

export default CartContent;

const Wrapper = styled.section`
	width: 90vw;
	max-width: var(--max-width);
	margin: 0 auto;
	padding: 5rem 0;

	hr {
		border: none;
		background: var(--primary-3);
		padding: 0.1rem;
		margin: 2rem 0;
	}
`;

const LinkButton = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.8rem 1rem;
	margin: 1.5rem 0;
	background: var(--primary-3);
	color: var(--primary-2);
	text-decoration: none;
	text-transform: capitalize;
	border-radius: 0.4rem;
	letter-spacing: var(--spacing);
	transition: var(--transition);
	font-weight: bold;
	width: 8rem;
	height: 3rem;
	text-align: center;

	&:hover {
		color: var(--primary-3);
		background: var(--primary-1);
	}
`;

const ClearButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.8rem 1rem;
	margin: 1.5rem 0;
	background: var(--primary-4);
	color: var(--primary-2);
	text-decoration: none;
	text-transform: capitalize;
	border-radius: 0.4rem;
	letter-spacing: var(--spacing);
	transition: var(--transition);
	font-weight: bold;
	font-size: 1rem;
	font-family: inherit;
	width: 8rem;
	height: 3rem;
	border: none;
	text-align: center;
	cursor: pointer;

	&:hover {
		background: #c73b3b;
	}
`;

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 2rem;
`;

const Container = styled.div`
	margin-top: 0 auto;
	display: flex;
	justify-content: space-around;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
