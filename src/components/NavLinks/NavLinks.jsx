import React from "react";
import { NavLink } from "react-router-dom";
import { adminLinks } from "../../utils/constants";
import styled from "styled-components";

const NavLinks = ({ toggleSidebar }) => {
	return (
		<Links>
			{adminLinks.map((link) => {
				const { text, url, id, icon } = link;

				return (
					<NavLink
						key={id}
						to={url}
						onClick={toggleSidebar}
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
					>
						<span className="icon">{icon}</span>
						{text}
					</NavLink>
				);
			})}
		</Links>
	);
};

export default NavLinks;

const Links = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 2rem;

	.nav-link {
		display: flex;
		align-items: center;
		padding: 1rem 0;
		text-transform: capitalize;
		text-decoration: none;
		letter-spacing: var(--spacing);
		transition: var(--transition);
		font-weight: bold;
		color: var(--primary-2);
	}

	.icon {
		font-size: 2rem;
		margin-right: 0.7rem;
		display: flex;
		align-items: center;
	}

	.nav-link:hover {
		color: var(--primary-7);
	}

	.nav-link:hover .icon {
		color: var(--primary-7);
	}

	.active {
		color: var(--primary-7);
	}

	.active .icon {
		color: var(--primary-7);
	}

	@media screen and (min-width: 992px) {
		.nav-link {
			padding-left: 3rem;
		}

		.nav-link:hover {
			padding-left: 3.5rem;
			background: var(--primary-1);
		}
	}
`;
