import React from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { formatPrice } from "../../utils/helpers";
import AmountButtons from "../Cart/AmountButtons";
import { useCartContext } from "../../context/cart-context";

const CartItem = ({ id, name, image, price, amount }) => {
	const { toggleAmount, removeItem } = useCartContext();
	const increase = () => {
		toggleAmount(id, "increase")
	};
	const decrease = () => {
		toggleAmount(id, "decrease");
	};

	return (
		<Wrapper>
			<TitleContainer>
				<ImageContainer>
					<Image src={image} alt={name} />
				</ImageContainer>
				<InfoContainer>
					<Name>{name}</Name>
					<PriceSmall>{formatPrice(price)}</PriceSmall>
				</InfoContainer>
			</TitleContainer>
			<Price>{formatPrice(price)}</Price>
			<ButtonsContainer>
				<AmountButtons
					amount={amount}
					increase={increase}
					decrease={decrease}
				/>
			</ButtonsContainer>
			<Subtotal>{formatPrice(price * amount)}</Subtotal>
			<RemoveBtn onClick={() => removeItem(id)}>
				<FaTrash />
			</RemoveBtn>
		</Wrapper>
	);
};

export default CartItem;

const TitleContainer = styled.div`
	display: flex;
	flex: 2;
	height: 60%;
`;

const ImageContainer = styled.div`
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	display: block;
	border-radius: 0.3rem;
	object-fit: cover;
`;

const InfoContainer = styled.div`
	flex: 2;
	padding: 0.5rem;
	text-transform: capitalize;
`;

const ButtonsContainer = styled.div`
	flex: 1;
`;

const Name = styled.h5`
	font-size: 1rem;
  margin-bottom: .5rem;
`;

const PriceSmall = styled.h5`
  margin-top: .5rem;
`;

const Price = styled.h5`
	display: none;
`;

const Subtotal = styled.h5`
	display: none;
`;

const RemoveBtn = styled.button`
	width: 2rem;
	height: 2rem;
  color: var(--primary-4);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
	background: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

const Wrapper = styled.article`
	display: flex;
	align-items: center;
	height: 8rem;

	@media screen and (min-width: 768px) {
		${Subtotal}, ${Price} {
			display: flex;
			flex: 2;
			justify-content: center;
			font-size: 1.2rem;
		}
		${PriceSmall} {
			display: none;
		}
		${ButtonsContainer}, ${TitleContainer} {
			flex: 2;
		}
		${InfoContainer} {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;
