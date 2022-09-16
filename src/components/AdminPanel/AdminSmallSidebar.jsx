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
					<NavLinks />
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
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: -1;
		opacity: 0;
		transition: var(--transition);
		background: rgba(0, 0, 0, 0.9);
	}

	.show-sidebar {
		z-index: 99;
		opacity: 1;
	}
`;

const Content = styled.div``;
const ButtonClose = styled.button``;
const Header = styled.header``;
const Logo = styled.img``;
