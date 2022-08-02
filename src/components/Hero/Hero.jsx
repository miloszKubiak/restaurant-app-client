import React from "react";
import styled from "styled-components";
import heroBg from "../../assets/hero-bg.jpg";
import heroBg3 from "../../assets/hero-bg3.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
		<Wrapper>
			<Content>
        <Title>Food delivered <br />wherever life takes you</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae blanditiis voluptatum consequatur fugit nisi suscipit eveniet quos quas placeat quibusdam.
        </Description>
        <Button to="/meals">
          order now
        </Button>
      </Content>
      <ImgContainer>
        <MainImg src={heroBg} alt="pizza" />
        <SecondImg src={heroBg3} alt="italian food" />
      </ImgContainer>
		</Wrapper>
  );
};

export default Hero;

const Content = styled.article`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1.2rem;
  letter-spacing: var(--spacing);
  color: var(--grey-1);
`;

const Description = styled.p`
	margin-bottom: 2rem;
	line-height: 2;
	max-width: 40em;
	color: var(--grey-1);
	font-size: .8rem;
	letter-spacing: var(--spacing);
`;

const Button = styled(Link)`
	background: var(--primary-3);
	padding: 1rem 1.5rem;
	color: var(--primary-2);
	text-decoration: none;
	font-weight: bold;
	text-transform: capitalize;
	letter-spacing: var(--spacing);
	border-radius: 0.5rem;
  transition: var(--transition);

	&:hover {
		color: var(--primary-3);
		background: var(--primary-1);
	}
`;

const ImgContainer = styled.div`
  flex: 1;
  display: none;
`;

const MainImg = styled.img`
  display: block;
  position: relative;
  height: 30rem;
  width: 100%;
  object-fit: cover;
  border-radius: .5rem;
`;

const SecondImg = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 20rem;
  transform: translate(-40%, 20%);
  border-radius: .5rem;
`;

const Wrapper = styled.section`
	margin: 0 auto;
	width: 90vw;
	max-width: var(--max-width);
	min-height: 60vh;
	display: flex;
	justify-content: center;
	align-items: center;
  padding: 1rem;

	@media screen and (min-width: 992px) {
    height: calc(100vh - 5rem);
    gap: 2rem;

		${ImgContainer} {
			display: block;
			position: relative;

			&::before {
				content: "";
				position: absolute;
				background: var(--primary-1);
				width: 80%;
				height: 90%;
				bottom: -8%;
				left: -8%;
			}
		}

		${Title} {
			font-size: 2.5rem;
			margin-bottom: 2rem;
			letter-spacing: var(--spacing);
			color: var(--grey-1);
		}

		${Description} {
			margin-bottom: 2rem;
			line-height: 2;
			max-width: 16em;
			color: var(--grey-1);
			font-size: 1.2rem;
			letter-spacing: var(--spacing);
		}
	}
`;
