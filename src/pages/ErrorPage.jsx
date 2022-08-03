import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import errorImg from "../assets/error.svg";

const ErrorPage = () => {
	return (
		<Wrapper>
			<Container>
				<img src={errorImg} alt="page not found" />
				<h3>Ohh! Page Not Found</h3>
				<p>We can't seem to find the page you're looking for</p>
				<Button to="/">Back Home</Button>
			</Container>
		</Wrapper>
	);
};

export default ErrorPage;

const Container = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h3 {
		margin: 0.5rem;
		font-size: 1.5rem;
		font-weight: bold;
		line-height: 1.3;
		text-transform: capitalize;
		letter-spacing: var(--spacing);
	}

	p {
		font-size: 1rem;
		margin: 0.2rem;
		letter-spacing: var(--spacing);
	}

	img {
		display: block;
		width: 90vw;
		max-width: 600px;
	}

	@media screen and (max-width: 992px) {
		img {
			width: 60%;
		}
	}
`;

const Button = styled(Link)`
	margin: 1rem;
	padding: 0.8rem 1rem;
	background: var(--primary-3);
	color: var(--primary-2);
	text-decoration: none;
	border-radius: 0.4rem;
	letter-spacing: var(--spacing);
	transition: var(--transition);

	&:hover {
		color: var(--primary-3);
		background: var(--primary-1);
	}
`;

const Wrapper = styled.div`
	min-height: calc(100vh - 10rem);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 4rem 0;
`;
