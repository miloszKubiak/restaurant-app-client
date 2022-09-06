import React, { useState } from "react";
import styled from "styled-components";
import AmountButtons from "./AmountButtons";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart-context";

const AddToCart = ({ meal }) => {
	const { addToCart } = useCartContext();
	const { id, stock } = meal;

	// const [mealSize, setMealSize] = useState(MEALS_SIZES[0]);
	const [amount, setAmount] = useState(1);

	const increase = () => {
		setAmount((prevAmount) => {
			let tempAmount = prevAmount + 1;
			if (tempAmount > stock) {
				tempAmount = stock;
			}
			return tempAmount;
		});
	};

	const decrease = () => {
		setAmount((prevAmount) => {
			let tempAmount = prevAmount - 1;
			if (tempAmount < 1) {
				tempAmount = 1;
			}
			return tempAmount;
		});
	};

	return (
		<Wrapper>
			{/* <Container>
				<span> size : </span>
				<Sizes>
					{MEALS_SIZES.map((size, index) => {
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
			</Container> */}
			<BtnContainer>
				<AmountButtons
					increase={increase}
					decrease={decrease}
					amount={amount}
				/>
				<BtnAddToCart
					to="/cart"
					onClick={() => addToCart(id, amount, meal)}
				>
					add to cart
				</BtnAddToCart>
			</BtnContainer>
		</Wrapper>
	);
};

export default AddToCart;

const Wrapper = styled.section``;

// const Container = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;

// 	span {
// 		font-weight: bold;
// 		text-transform: capitalize;
// 		letter-spacing: var(--spacing);
// 	}
// `;

// const Sizes = styled.div`
// 	display: flex;
// 	gap: 1rem;
// 	padding: 1rem;

// 	.size-btn {
// 		flex: 1;
// 		display: flex;
// 		justify-content: center;
// 		align-items: center;
// 		height: 2rem;
// 		width: 4rem;
// 		opacity: 0.5;
// 		border-radius: 0.4rem;
// 		background: var(--primary-1);
// 		cursor: pointer;
// 		color: var(--grey-1);
// 		font-weight: bold;
// 		border: none;
// 		font-size: 1rem;
// 		outline: var(--primary-1);
// 	}

// 	.active {
// 		opacity: 1;
// 		background: var(--primary-3);
// 		color: var(--primary-2);
// 	}
// `;

const BtnAddToCart = styled(Link)`
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

const BtnContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
