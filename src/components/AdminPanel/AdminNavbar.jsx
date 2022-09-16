import React from "react";
import styled from "styled-components";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import logo from "../../assets/logo2.png";
import { useState } from "react";
import { useAuthContext } from "../../context/auth-context";
import { useCartContext } from "../../context/cart-context";
import { useMealsContext } from "../../context/meals-context";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
	const [showLogout, setShowLogout] = useState(false);
	const { clearCart } = useCartContext();
	const { user, logoutUser } = useAuthContext();
	const { toggleSidebar } = useMealsContext();
	const navigate = useNavigate();

	const handleLogout = () => {
		logoutUser();
		clearCart();
		navigate("/landing");
	};

	return (
		<Wrapper>
			<Center>
				<ButtonToggle type="button" onClick={toggleSidebar}>
					<FaAlignLeft />
				</ButtonToggle>
				<Container>
					<Logo src={logo} alt="company logo" />
					<Title>italian food - admin panel</Title>
				</Container>
				<ButtonContainer>
					<ButtonDropDown
						type="button"
						onClick={() => setShowLogout(!showLogout)}
					>
						<FaUserCircle />
						{user?.name}
						<FaCaretDown />
					</ButtonDropDown>
					<div
						className={
							showLogout ? "dropdown show-dropdown" : "dropdown"
						}
					>
						<ButtonLogout type="button" onClick={handleLogout}>
							logout
						</ButtonLogout>
					</div>
				</ButtonContainer>
			</Center>
		</Wrapper>
	);
};

export default AdminNavbar;

const Center = styled.div`
	display: flex;
	width: 90vw;
	align-items: center;
	justify-content: space-between;
`;

const ButtonToggle = styled.button`
	display: flex;
	align-items: center;
	background: transparent;
	border-color: transparent;
	font-size: 2rem;
	color: gray;
	cursor: pointer;
`;

const Container = styled.div`
	display: flex;
	align-items: center;
`;

const Logo = styled.img``;

const Title = styled.h3`
	display: none;
	margin: 0;
`;

const ButtonContainer = styled.div`
	position: relative;

	.dropdown {
		position: absolute;
		width: 100%;
		top: 2.6rem;
		background: red;
		padding: 0.5rem;
		text-align: center;
		visibility: hidden;
		border-radius: 0.3rem;
	}

	.show-dropdown {
		visibility: visible;
	}
`;

const ButtonDropDown = styled.button`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	background: transparent;
	color: black;
	font-weight: bold;
	font-size: 1.2rem;
	padding: 0.3rem 0.5rem;
	border: 0.2rem solid black;
	border-radius: 0.3rem;
	transition: var(--transition);
	cursor: pointer;

	svg {
		font-size: 1.2rem;
	}

	&:hover {
		background: var(--primary-7);
	}
`;

const ButtonLogout = styled.button`
	margin-top: 0.5rem;
	background: transparent;
	border-color: transparent;
	color: var(--primary-2);
	letter-spacing: var(--spacing);
	text-transform: capitalize;
	font-size: 1rem;
	font-family: inherit;
	cursor: pointer;
`;

const Wrapper = styled.nav`
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
	background: whitesmoke;

	@media screen and (min-width: 992px) {
		position: sticky;
		top: 0;

		${Center} {
			width: 90%;
		}
		${Logo} {
			display: none;
		}
		${Title} {
			display: block;
		}
	}
`;
