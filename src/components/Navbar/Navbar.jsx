import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links } from "../../utils/constants";
import logo from "../../assets/logo2.png";
import CartButtons from "../Cart/CartButtons";
import { useMealsContext } from "../../context/meals-context";

const Navbar = () => {
	const { openSidebar } = useMealsContext();

	return (
		<Wrapper>
			<Container>
				<Header>
					<Link to="/" className="logo">
						<img src={logo} alt="italian food" />
					</Link>
					<Button onClick={openSidebar}>
						<FaBars />
					</Button>
				</Header>
				<Links>
					{links.map((link) => {
						const { id, text, url } = link;
						return (
							<li key={id}>
								<Link to={url}>{text}</Link>
							</li>
						);
					})}
				</Links>
				<BtnContainer>
					<CartButtons />
				</BtnContainer>
			</Container>
		</Wrapper>
	);
};

export default Navbar;

const Container = styled.div`
	width: 90vw;
	max-width: var(--max-width);
	margin: 0 auto;
`;

const BtnContainer = styled.div`
	display: none;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Links = styled.ul`
	display: none;
`;

const Button = styled.button`
	background: transparent;
	border: transparent;
	color: var(--primary-2);
	cursor: pointer;

	svg {
		font-size: 2.5rem;
	}
`;

const Wrapper = styled.div`
	height: 6rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--primary-3);

	@media (min-width: 992px) {
		${Button} {
			display: none;
		}

		${Container} {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		${Links} {
			flex: 1;
			display: flex;
			justify-content: center;

			li {
				margin: 0 1rem;
				list-style: none;
			}

			a {
				padding: 0.5rem;
				color: var(--primary-1);
				text-transform: capitalize;
				text-decoration: none;
				font-weight: bold;
				font-size: 1.5rem;
				letter-spacing: var(--spacing);
				transition: var(--transition);

				&:hover {
					color: var(--primary-2);
				}
			}
		}

		${BtnContainer} {
			display: flex;
			align-items: center;
		}
	}
`;
