import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo2.png";
import { useMealsContext } from "../../context/meals-context";
import NavLinks from "../NavLinks/NavLinks";
import { Link } from "react-router-dom";

const AdminBigSidebar = () => {
	const { isSidebarOpen } = useMealsContext();

	return (
		<Wrapper>
			<div
				className={
					isSidebarOpen
						? "sidebar-container"
						: "sidebar-container show-sidebar"
				}
			>
				<Content>
					<Header>
						<Link to="/landing">
							<Logo src={logo} alt="company logo" />
						</Link>
					</Header>
					<NavLinks />
				</Content>
			</div>
		</Wrapper>
	);
};

export default AdminBigSidebar;

const Content = styled.div``;

const Header = styled.header``;

const Logo = styled.img``;

const Wrapper = styled.aside`
	display: none;

	@media screen and (min-width: 992px) {
		display: block;

		.sidebar-container {
			background: var(--primary-3);
			min-height: 100vh;
			height: 100%;
			width: 15rem;
			margin-left: -15rem;
			transition: var(--transition);
		}
		.show-sidebar {
			margin-left: 0;
		}

		${Content} {
			top: 0;
			position: sticky;
		}
		${Header} {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 5rem;
		}
	}
`;
