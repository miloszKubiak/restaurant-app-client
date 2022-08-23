import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";

const Meal = ({ _id, name, image, price }) => {
	return (
		<Wrapper>
			<Container>
				<Link to={`/meals/${_id}`}>
					<Image src={image} alt={name} />
				</Link>
			</Container>
			<Footer>
				<Name>{name}</Name>
				<Price>{formatPrice(price)}</Price>
			</Footer>
		</Wrapper>
	);
};

export default Meal;

const Wrapper = styled.article`
	flex: 1;
`;

const Container = styled.div`
	position: relative;
	border-radius: 0.5rem;
`;

const Image = styled.img`
	display: block;
	height: 15rem;
	width: 100%;
	object-fit: cover;
	border-radius: 0.5rem;
	transition: var(--transition);

	&:hover {
		opacity: 0.5;
	}
`;

const Footer = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;
`;

const Name = styled.h5`
	margin-bottom: 0;
	font-weight: 400;
	text-transform: capitalize;
	letter-spacing: var(--spacing);
	color: var(--grey-1);
`;

const Price = styled.p`
	margin-bottom: 0;
	font-weight: 400;
	letter-spacing: var(--spacing);
	color: var(--grey-1);
`;
