import React from "react";
import { services } from "../../utils/constants";
import styled from "styled-components";

const Services = () => {
	return (
		<Wrapper>
			<Container>
				<Header>
					<Title>
						delicious Italian food
						<br /> especially for you
					</Title>
					<Description>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Optio delectus mollitia, tempore deleniti quo incidunt
						illo ad doloremque dolores veritatis.
					</Description>
				</Header>
				<Content>
					{services.map((service) => {
						const { id, icon, title, text } = service;
						return (
							<Service key={id}>
								<span>{icon}</span>
								<h4>{title}</h4>
								<p>{text}</p>
							</Service>
						);
					})}
				</Content>
			</Container>
		</Wrapper>
	);
};

export default Services;

const Header = styled.article`
  display: flex;
`;

const Title = styled.h3`
  flex: 1;
  margin-bottom: 2rem;
  text-transform: capitalize;
  font-size: 3rem;
`;

const Description = styled.p`
  flex: 1;
  margin: 1.2rem 0;
  line-height: 1.5;
  text-align: left;
  font-size: 1.2rem;
`;

const Content = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
`;

const Service = styled.article`
	background: var(--primary-3);
	padding: 2.5rem 2rem;
	transition: var(--transition);
	border-radius: 0.5rem;
	text-align: center;
	color: var(--primary-2);

	span {
		width: 4rem;
		height: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		margin: 0 auto;
		margin-bottom: 1rem;
		background: var(--primary-1);

		svg {
			font-size: 2rem;
		}
	}

	h4 {
		margin-bottom: 1rem;
		text-transform: capitalize;
		font-size: 1.5rem;
	}

	&:hover {
		transform: scale(1.05);
	}
`;

const Container = styled.div`
	margin: 0 auto;
	width: 90vw;
	max-width: var(--max-width);
	color: var(--grey-1);
`;

const Wrapper = styled.section`
	background: var(--primary-1);
	padding: 5rem 0;

	@media screen and (max-width: 768px) {
		${Content}, ${Header} {
			display: flex;
			flex-direction: column;
			padding: 0 1rem;
		}
	}
`;
