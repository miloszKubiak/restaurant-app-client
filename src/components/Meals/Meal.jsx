import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaInfo } from "react-icons/fa";

const Meal = ({ id, name, image, price }) => {
	return (
		<Wrapper>
			<Container>
				<Image src={image} alt={name} />
				<Info to={`/meals/${id}`}>
					<FaInfo />
				</Info>
			</Container>
			<Footer>
				<Name>{name}</Name>
				<Price>${price}</Price>
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
	background: var(--primary-1);
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
    opacity: .5;
  }
`;

const Info = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--primary-3);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  transition: var(--transition);
  opacity: 0;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
    color: var(--primary-2);
  }

  &:hover {
    opacity: 1;
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
	letter-spacing: var(--spacing);
	color: var(--grey-1);
`;

const Price = styled.p`
	margin-bottom: 0;
	font-weight: 400;
	letter-spacing: var(--spacing);
	color: var(--grey-1);
`;
