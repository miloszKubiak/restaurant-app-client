import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links } from "../../utils/constants";
import logo from "../../assets/logo2.png";

const Navbar = () => {
	return (
		<Wrapper>
			<div className="container">
				<div className="header">
					<Link to="/">
						<img src={logo} alt="italian food" />
					</Link>
					<button className="toggle">
						<FaBars />
					</button>
				</div>
				<ul className="links">
					{links.map((link) => {
						const { id, text, url } = link;
						return (
							<li key={id}>
								<Link to={url}>{text}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</Wrapper>
	);
};

export default Navbar;

const Wrapper = styled.div`
	height: 6rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--primary-1);

	.container {
		width: 90vw;
		max-width: var(--max-width);
		margin: 0 auto;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.toggle {
		background: transparent;
		border: transparent;
		color: var(--primary-2);
		cursor: pointer;

		svg {
			font-size: 2.5rem;
		}
	}

	.links {
		display: none;
	}

	@media (min-width: 992px) {
		.toggle {
			display: none;
		}

		.container {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.links {
			flex: 1;
			display: flex;
			justify-content: center;

			li {
				margin: 0 1rem;
				list-style: none;
			}

			a {
				padding: 0.5rem;
				color: var(--primary-2);
				text-transform: capitalize;
				text-decoration: none;
				font-weight: bold;
				font-size: 1.5rem;
				letter-spacing: var(--spacing);
				transition: var(--transition);

				&:hover {
					color: var(--primary-3);
				}
			}
		}
	}
`;
