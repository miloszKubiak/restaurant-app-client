import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo2.png";
import { useMealsContext } from "../../context/meals-context";
import NavLinks from "../NavLinks/NavLinks";

const AdminBigSidebar = () => {
	const { isSidebarOpen } = useMealsContext();

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
					<Header>
						<Logo src={logo} alt="company logo" />
					</Header>
					<NavLinks />
				</Content>
			</div>
		</Wrapper>
	);
};

export default AdminBigSidebar;

const Content = styled.div`
	position: sticky;
	top: 0;
`;
const Header = styled.header``;
const Logo = styled.img``;

const Wrapper = styled.aside`
	display: none;

	@media screen and (min-width: 992px) {
		display: block;

		.sidebar-container {
			background: whitesmoke;
			min-height: 100vh;
			height: 100%;
			width: 15rem;
			margin-left: -15rem;
			transition: var(--transition);
		}
		.show-sidebar {
			margin-left: 0;
		}
	}
`;
