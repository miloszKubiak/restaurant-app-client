import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/logo2.png";
import NavLinks from "../NavLinks/NavLinks";
import { useMealsContext } from "../../context/meals-context";

const AdminSmallSidebar = () => {
	const { isSidebarOpen, toggleSidebar } = useMealsContext();

	return (
		<Wrapper>
			<div
				className={
					isSidebarOpen
						? "sidebar-container show-sidebar"
						: "sidebar-container"
				}
			>
				<Content>
					<ButtonClose type="button" onClick={toggleSidebar}>
						<FaTimes />
					</ButtonClose>
					<Header>
						<Logo src={logo} alt="company logo" />
					</Header>
					<NavLinks toggleSidebar={toggleSidebar} />
				</Content>
			</div>
		</Wrapper>
	);
};

export default AdminSmallSidebar;

const Wrapper = styled.aside`
	@media screen and (min-width: 992px) {
		display: none;
	}

	.sidebar-container {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: -1;
		opacity: 0;
		transition: var(--transition);
	}

	.show-sidebar {
		z-index: 99;
		opacity: 1;
	}
`;

const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	padding: 1rem;
	background: whitesmoke;
`;

const ButtonClose = styled.button`
	position: absolute;
	top: 2rem;
	left: 2rem;
	background: transparent;
	border: none;
	font-size: 2rem;
	color: var(--primary-4);
	cursor: pointer;
`;

const Header = styled.header``;

const Logo = styled.img``;
