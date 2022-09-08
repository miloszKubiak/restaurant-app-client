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
`;

const Container = styled.div`
	min-height: calc(100vh - 5rem);
	max-width: var(--max-width);
	width: 90vw;
	margin: 0 auto;
	display: flex;
	align-items: center;

	img {
		width: 100%;
		height: 100%;
		display: block;
	}
`;

const Info = styled.div`
  flex: 1;
`;

const Title = styled.h1``;

const Description = styled.p``;

const ImgContainer = styled.div`
  flex: 2;
`;

const Wrapper = styled.main`
  background: var(--primary-1);

	@media screen and (min-width: 992px) {
		${Container} {
			grid-template-columns: 1fr 1fr;
			column-gap: 2rem;
		}
	}
`;
