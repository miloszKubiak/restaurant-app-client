import React from "react";
import styled from "styled-components";

const Footer = () => {
	return <Wrapper>
		<h5>
			&copy; {new Date().getFullYear()}
			<span>ItalianFood</span>
		</h5>
		<h5>All rights reserved</h5>
	</Wrapper>;
};

export default Footer;

const Wrapper = styled.div`
	height: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	background: var(--primary-4);

	span {
		margin: .2rem;
		color: var(--primary-2);
	}

	h5 {
		color: #222;
		margin: .1rem;
	}
`;
