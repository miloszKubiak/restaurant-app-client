import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { links } from "../../utils/constants";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import { ActionButtons } from "../../components";
import { useMealsContext } from "../../context/meals-context";
import { useAuthContext } from "../../context/auth-context";

const Sidedbar = () => {
	const { isSidebarOpen, closeSidebar } = useMealsContext();
	const { user } = useAuthContext();

	return (
		<Wrapper>
			<aside
				className={`${
					isSidebarOpen ? "sidebar show-sidebar" : "sidebar"
				}`}
			>
				<Header>
					<img src={logo} alt="italian food" />
					<CloseBtn onClick={closeSidebar}>
						<FaTimes />
					</CloseBtn>
				</Header>
				<Links>
					{links.map((link) => {
						const { id, text, url } = link;
						return (
							<li key={id}>
								<Link to={url} onClick={closeSidebar}>
									{text}
								</Link>
							</li>
						);
					})}
					{user && (
						<li>
							<Link to="/checkout" onClick={closeSidebar}>
								checkout
							</Link>
						</li>
					)}
					{user?.role === "admin" && (
						<li>
							<Link to="/adminPanel" onClick={closeSidebar}>
								Admin Panel
							</Link>
						</li>
					)}
				</Links>
				<ButtonsContainer>
					<ActionButtons />
				</ButtonsContainer>
			</aside>
		</Wrapper>
	);
};

export default Sidedbar;

// const Container = styled.aside`
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100%;
// 	background: var(--primary-2);
// 	transition: var(--transition);
// 	transform: ${({ click }) => (click ? "translate(-100%)" : "translate(0)")};
// 	z-index: ${({ click }) => (click ? "-1" : "99")};
// `;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem;
`;

const CloseBtn = styled.button`
	font-size: 2rem;
	background: transparent;
	border: none;
	color: var(--primary-2);
	transition: var(--transition);
	cursor: pointer;

	&:hover {
		transform: scale(1.2);
	}
`;

const Links = styled.ul`
	margin-bottom: 2rem;

	a {
		display: block;
		text-align: left;
		font-size: 1.2rem;
		padding: 1.2rem;
		color: var(--primary-2);
		transition: var(--transition);
		letter-spacing: var(--spacing);
		font-weight: bold;
		text-decoration: none;
		text-transform: capitalize;

		&:hover {
			background: var(--primary-1);
			color: var(--primary-3);
			padding-left: 2rem;
		}
	}
`;

const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	text-align: center;

	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--primary-3);
		transition: var(--transition);
		transform: translate(-100%);
		z-index: -1;
	}
	.show-sidebar {
		transform: translate(0);
		z-index: 999;
	}

	@media screen and (min-width: 992px) {
		.sidebar {
			display: none;
		}
	}
`;
