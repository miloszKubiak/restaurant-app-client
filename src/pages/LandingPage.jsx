import React from "react";
import styled from "styled-components";
import logo from "../assets/logo2.png";
import landingImg from "../assets/landing.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<Wrapper>
			<Logo>
				<img src={logo} alt="company logo" />
				<h1>italian food</h1>
			</Logo>
			<Container>
				<Info>
					<Title>
						food <span>delivery</span> app
					</Title>
					<Description>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Amet magnam voluptates ea incidunt id sint accusamus cum
						placeat rerum consequatur.
					</Description>
					<Link to="/register">Login/Register</Link>
				</Info>
				<ImgContainer>
					<img src={landingImg} alt="people eating pizza" />
				</ImgContainer>
			</Container>
		</Wrapper>
	);
};

export default LandingPage;

const Logo = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	height: 5rem;
	margin: 0 auto;
	max-width: var(--max-width);
	width: 90vw;

	h1 {
		letter-spacing: var(--spacing);
		text-transform: capitalize;
		color: var(--primary-3);
	}
`;

const Container = styled.div`
	min-height: calc(100vh - 5rem);
	max-width: var(--max-width);
	width: 90vw;
	margin: 0 auto;
	display: flex;
	align-items: center;
	gap: 1rem;

	img {
		width: 100%;
		height: 100%;
		display: block;
	}
`;

const Info = styled.div`
	flex: 1;

	a {
		margin-top: 1rem;
		display: inline-block;
		padding: 0.8rem 1rem;
		background: var(--primary-3);
		color: var(--primary-2);
		text-decoration: none;
		border-radius: 0.4rem;
		text-transform: capitalize;
		letter-spacing: var(--spacing);
		transition: var(--transition);
		font-weight: bold;
		font-size: 1.2rem;

		&:hover {
			color: var(--primary-3);
			background: var(--primary-1);
		}
	}
`;

const Title = styled.h1`
	text-transform: capitalize;
	font-size: 3rem;

	span {
		color: var(--primary-3);
	}
`;

const Description = styled.p`
	margin: 1rem 0;
	letter-spacing: var(--spacing);
`;

const ImgContainer = styled.div`
  flex: 2;
`;

const Wrapper = styled.main`
	background: var(--primary-2);

	@media screen and (max-width: 768px) {
		${Container} {
			flex-direction: column;
		}
		${Info} {
			margin-top: 6rem;
		}
		${Title} {
			font-size: 2.5rem;
		}
		${Description} {
			font-size: 0.8rem;
		}
		${ImgContainer} {
			flex: 1;
		}
	}
`;
