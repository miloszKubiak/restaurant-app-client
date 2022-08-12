import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart-context";
import { useUserContext } from "../../context/user-context";
import { formatPrice } from "../../utils/helpers";

const CartTotals = () => {
	const { total_amount, delivery_fee } = useCartContext();

	return (
		<Wrapper>
			<div>
				<Container>
					<Subtotal>
						subtotal : <span>{formatPrice(total_amount)}</span>
					</Subtotal>
					<Delivery>
						delivery fee : <span>{formatPrice(delivery_fee)}</span>
          </Delivery>
          <hr />
					<Total>
						Order total :{" "}
						<span>{formatPrice(total_amount + delivery_fee)}</span>
					</Total>
				</Container>
				<ButtonCheckout to="/checkout">
					proceed to checkout
				</ButtonCheckout>
			</div>
		</Wrapper>
	);
};

export default CartTotals;

const Wrapper = styled.section`
	margin-top: 2rem;
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	border: 0.2rem solid var(--primary-3);
	padding: 2rem 4rem;
  margin: 1.5rem auto;
	border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--primary-1);
  color: var(--grey-1);
`;

const Subtotal = styled.h5`
  text-transform: capitalize;
  font-size: 1.3rem;
  margin-top: .5rem;
`;

const Delivery = styled.p`
  text-transform: capitalize;
  font-size: 1.2rem;
  margin-top: .5rem;
`;

const Total = styled.h4`
  text-transform: capitalize;
  font-size: 1.6rem;
`;

const ButtonCheckout = styled(Link)`
	display: inline-block;
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
	width: 100%;
	text-align: center;

	&:hover {
		color: var(--primary-3);
		background: var(--primary-1);
	}
`;
