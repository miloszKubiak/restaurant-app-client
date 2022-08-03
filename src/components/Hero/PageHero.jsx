import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageHero = ({ title }) => {
	return (
		<Wrapper>
			<Container>
				<h3>
					<Link to="/">home</Link>/ {title}
				</h3>
			</Container>
		</Wrapper>
	);
};

export default PageHero;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	min-height: 20vh;
	background: var(--primary-2);
	color: var(--primary-4);
	font-size: 2rem;
	letter-spacing: var(--spacing);


	a {
		margin-left: 2rem;
		padding: .5rem;
		color: var(--primary-3);
		text-decoration: none;
		text-transform: capitalize;
		transition: var(--transition);

		&:hover {
			color: var(--primary-4);
		}
	}
`;

const Container = styled.div`
	width: 90vw;
	margin: 0 auto;
	max-width: var(--max-width);
`;