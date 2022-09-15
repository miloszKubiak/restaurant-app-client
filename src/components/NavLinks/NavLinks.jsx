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
`;
