import React from "react";
import styled from "styled-components";
import { PageHero, Navbar, Sidebar, StripeCheckout } from "../components";
import { useCartContext } from "../context/cart-context";
import { Link } from "react-router-dom";
import addToCartImg from "../assets/add-to-cart.svg";


const PaymentPage = () => {
	const { cart } = useCartContext();

	return (
		<>
			<Navbar />
			<Sidebar />
			<PageHero title="Checkout" />
			<Wrapper>
				{cart.length < 1 ? (
					<Empty>
						<img src={addToCartImg} alt="add to cart" />
						<Info>
							Your cart is empty, add something to your cart.
						</Info>
						<Button to="/meals">go to meals</Button>
					</Empty>
				) : (
					<StripeCheckout />
				)}
			</Wrapper>
		</>
	);
};

export default PaymentPage;

const Wrapper = styled.div`
	min-height: calc(100vh - (20vh + 10rem));
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4rem 0;
`;

const Empty = styled.div`
	text-align: center;
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		display: block;
		width: 90vw;
		max-width: 300px;
	}
`;

const Info = styled.h2`
	margin: 2rem auto;
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
