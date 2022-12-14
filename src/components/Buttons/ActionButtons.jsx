import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useMealsContext } from "../../context/meals-context";
import { useCartContext } from "../../context/cart-context";
import { useAuthContext } from "../../context/auth-context";

const ActionButtons = () => {
	const { closeSidebar } = useMealsContext();
	const { total_items, clearCart } = useCartContext();
	const { user, logoutUser } = useAuthContext();
	const [showDropdown, setShowDropdown] = useState(false);
	const navigate = useNavigate();

	const handleLogout = () => {
		logoutUser();
		clearCart();
		navigate("/landing");
	};

	return (
		<Wrapper>
			<CartButton to="/cart" onClick={closeSidebar}>
				<FaShoppingCart style={{ fontSize: "2rem" }} />
				{total_items > 0 && <CartValue>{total_items}</CartValue>}
			</CartButton>
			{!user ? (
				<AuthLink to="/register" onClick={closeSidebar}>
					Login
				</AuthLink>
			) : (
				<ButtonContainer>
					<ButtonUser
						type="button"
						onClick={() => setShowDropdown(!showDropdown)}
					>
						<FaUserCircle />
						{user.name}
						<FaCaretDown />
					</ButtonUser>
					<div
						className={
							showDropdown ? "dropdown show-dropdown" : "dropdown"
						}
					>
						<ButtonOrders to="/my-orders" onClick={closeSidebar}>
							my orders
						</ButtonOrders>
						<ButtonOrders to="/my-stats" onClick={closeSidebar}>
							my stats
						</ButtonOrders>
						<ButtonSettings to="/profile" onClick={closeSidebar}>
							profile settings
						</ButtonSettings>
						<ButtonLogout type="button" onClick={handleLogout}>
							logout
						</ButtonLogout>
					</div>
				</ButtonContainer>
			)}
		</Wrapper>
	);
};

export default ActionButtons;

const AuthLink = styled(Link)`
	flex: 1;
	display: flex;
	margin-left: 1.5rem;
	align-items: center;
	color: var(--primary-2);
	text-transform: capitalize;
	text-decoration: none;
	font-weight: bold;
	font-size: 1.5rem;
	letter-spacing: var(--spacing);
	transition: var(--transition);
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
	font-size: 0.8rem;
	border-radius: 50%;
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	.dropdown {
		display: flex;
		flex-direction: column;
		position: absolute;
		width: 80%;
		top: 2.8rem;
		background: var(--primary-7);
		text-align: center;
		visibility: hidden;
		border-radius: 0.3rem;
		border: 0.2rem solid var(--primary-7);
	}

	.show-dropdown {
		visibility: visible;
	}
`;

const ButtonUser = styled.button`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	background: transparent;
	color: var(--primary-2);
	font-weight: bold;
	cursor: pointer;
	font-size: 1.2rem;
	padding: 0.3rem 0.5rem;
	border: 0.2rem solid var(--primary-7);
	border-radius: 0.3rem;
	transition: var(--transition);

	svg {
		font-size: 1.2rem;
	}

	&:hover {
		background: var(--primary-7);
	}
`;

const ButtonLogout = styled.button`
	padding: 0.4rem 0;
	background: transparent;
	border-color: transparent;
	color: var(--primary-2);
	letter-spacing: var(--spacing);
	text-transform: capitalize;
	font-size: 1rem;
	font-family: inherit;
	cursor: pointer;

	&:hover {
		background: var(--primary-4);
		transition: var(--transition);
		border-bottom-left-radius: 0.3rem;
		border-bottom-right-radius: 0.3rem;
	}
`;

const ButtonSettings = styled(Link)`
	padding: 0.4rem 0;
	background: transparent;
	border-color: transparent;
	text-decoration: none;
	color: var(--primary-2);
	letter-spacing: var(--spacing);
	text-transform: capitalize;
	cursor: pointer;

	&:hover {
		background: var(--primary-3);
		transition: var(--transition);
	}
`;

const ButtonOrders = styled(Link)`
	padding: 0.4rem 0;
	background: transparent;
	border-color: transparent;
	text-decoration: none;
	color: var(--primary-2);
	letter-spacing: var(--spacing);
	text-transform: capitalize;
	cursor: pointer;

	&:hover {
		background: var(--primary-3);
		transition: var(--transition);
		border-top-left-radius: 0.3rem;
		border-top-right-radius: 0.3rem;
	}
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	position: relative;
`;
