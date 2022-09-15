import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/logo2.png";
import NavLinks from "../NavLinks/NavLinks";

const AdminSmallSidebar = () => {
	return (
		<Wrapper>
			<div>
				<Content>
					<ButtonClose>
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
`;

const Content = styled.div``;
const ButtonClose = styled.button``;
const Header = styled.header``;
const Logo = styled.img``;
