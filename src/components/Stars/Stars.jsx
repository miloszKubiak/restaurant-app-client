import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ reviews, stars }) => {
	const tempStars = Array.from({ length: 5 }, (_, index) => {
		const number = index + 0.5;

		return (
			<span key={index}>
				{stars >= index + 1 ? (
					<BsStarFill />
				) : stars >= number ? (
					<BsStarHalf />
				) : (
					<BsStar />
				)}
			</span>
		);
	});

	return (
		<Wrapper>
			<Container>{tempStars}</Container>
			<Reviews>({reviews} customer reviews)</Reviews>
		</Wrapper>
	);
};

export default Stars;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

const Container = styled.div``;

const Reviews = styled.p`
	margin-left: 0.5rem;
	margin-bottom: 0;
`;
