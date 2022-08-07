import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useMealsContext } from "../../context/meals-context";

const CartButtons = () => {
	const { closeSidebar } = useMealsContext();

	return (
		<Wrapper>
			<CartButton to="/cart" onClick={closeSidebar}>
				<FaShoppingCart style={{ fontSize: "2.5rem" }} />
				<CartValue>10</CartValue>
			</CartButton>
			<AuthButton>Login</AuthButton>
		</Wrapper>
	);
};

export default CartButtons;

const AuthButton = styled.button`
	flex: 1;
	display: flex;
	margin-left: 1.5rem;
	align-items: center;
	color: var(--primary-2);
	text-transform: capitalize;
	border: none;
	border-bottom: transparent;
	background: transparent;
	font-weight: bold;
	font-size: 1.5rem;
	letter-spacing: var(--spacing);
	transition: var(--transition);
	font-family: inherit;
	cursor: pointer;

	&:hover {
		color: var(--primary-1);
	}
`;

const CartButton = styled(Link)`
	position: relative;
	flex: 1;
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	color: var(--primary-2);
	letter-spacing: var(--spacing);
	transition: var(--transition);
	font-weight: bold;
	text-decoration: none;

	&:hover {
		color: var(--primary-1);
	}
`;

const CartValue = styled.span`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: -6px;
	right: -10px;
	width: 1.4rem;
	height: 1.4rem;
	background: var(--primary-6);
	color: var(--primary-2);
	font-size: 0.7rem;
	/* font-weight: lighter; */
	border-radius: 50%;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 5rem;
`;
