import React, { useState } from "react";
import styled from "styled-components";
import { mealSizes } from "../../utils/constants";
import { FaCheck } from "react-icons/fa";

const AddToCart = ({ meal }) => {
	const { stock, size } = meal;

	const [mealSize, setMealSize] = useState(mealSizes[0]);

	return (
		<Wrapper>
			<Container>
				<span> size : </span>
				<Sizes>
					{mealSizes.map((size, index) => {
						return (
							<button
								key={index}
								className={`${
									mealSize === size
										? "size-btn active"
										: "size-btn"
								}`}
								onClick={() => setMealSize(size)}
							>
								{size}
							</button>
						);
					})}
				</Sizes>
			</Container>
		</Wrapper>
	);
};

export default AddToCart;

const Wrapper = styled.section``;

const Container = styled.div`
	span {
		font-weight: bold;
		text-transform: capitalize;
		letter-spacing: var(--spacing);
	}
`;

const Sizes = styled.div`
	display: flex;
	gap: 1rem;
	padding: 1rem;

	.size-btn {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 2rem;
		opacity: 0.5;
		border-radius: 0.4rem;
		background: var(--primary-1);
		cursor: pointer;
		color: var(--grey-1);
		font-weight: bold;
		letter-spacing: var(--spacing);
		border: none;
		font-size: 1rem;
		outline: var(--primary-1);
	}

	.active {
		opacity: 1;
		background: var(--primary-3);
		color: var(--primary-2);
	}
`;
