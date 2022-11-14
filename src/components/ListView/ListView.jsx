import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import Pagination from "../Pagination/Pagination";
import { useMealsContext } from "../../context/meals-context";

const ListView = ({ meals }) => {
	const { numOfPages } = useMealsContext();

	return (
		<Wrapper>
			{meals.map((meal) => {
				const { _id, name, price, image, description } = meal;
				return (
					<MealContainer key={_id}>
						<Image src={image} alt={name} />
						<Content>
							<Title>{name}</Title>
							<Price className="price">
								{formatPrice(price)}
							</Price>
							<Description>
								{description.substring(0, 140)}...
							</Description>
							<Details to={`/meals/${_id}`}>Details</Details>
						</Content>
					</MealContainer>
				);
			})}
			{numOfPages > 1 && <Pagination />}
		</Wrapper>
	);
};

export default ListView;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1rem;
	flex: 2;
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
  font-size: 1.2rem;
`;

const Price = styled.h5`
  font-size: 1rem;
`;

const Description = styled.p`
	max-width: 40em;
`;

const Details = styled(Link)`
	display: inline-block;
	padding: 0.8rem 1rem;
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

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	width: 90vw;
	max-width: 1170px;
`;

const MealContainer = styled.article`
	display: flex;
	gap: 1rem;

	@media screen and (max-width: 576px) {
		flex-direction: column;

		${Description} {
			margin: 1rem 0;
		}
	}
`;
