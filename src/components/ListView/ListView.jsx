import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";

const ListView = ({ meals }) => {
	return (
		<Wrapper>
			{meals.map((meal) => {
				const { id, name, price, image, description } = meal;
				return (
					<MealContainer key={id}>
						<Image src={image} alt={name} />
						<Content>
							<Title>{name}</Title>
							<Price className="price">{formatPrice(price)}</Price>
							<Description>{description.substring(0, 140)}...</Description>
							<Details to={`/meals/${id}`} >
								Details
							</Details>
						</Content>
					</MealContainer>
				);
			})}
		</Wrapper>
	);
};

export default ListView;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const MealContainer = styled.article`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

const Image = styled.img`
  display: block;
  flex: 1;
  max-width: 100%;
  height: 15rem;
  object-fit: cover;
  border-radius: .3rem;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  text-transform: capitalize;
  font-size: 1.6rem;
`;

const Price = styled.h5`
  font-size: 1rem;
`;

const Description = styled.p`
	max-width: 40em;
	margin-bottom: 1rem;
`;

const Details = styled(Link)`
	display: inline-block;
	padding: 0.8rem 1rem;
	margin: 1.5rem 0;
	background: var(--primary-3);
	color: var(--primary-2);
	text-decoration: none;
	text-transform: capitalize;
	border-radius: 0.4rem;
	letter-spacing: var(--spacing);
	transition: var(--transition);
	font-weight: bold;
	width: 8rem;
	text-align: center;

	&:hover {
		color: var(--primary-3);
		background: var(--primary-1);
	}
`;