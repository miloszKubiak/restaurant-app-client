import React, { useState } from "react";
import styled from "styled-components";

const MealImages = ({ images = [{ url: "" }] }) => {
	const [mainImage, setMainImage] = useState(images[0]);

	return (
    <Wrapper>
			<Image src={mainImage.url} alt="main" />
			<Gallery>
				{images.map((image, index) => {
					return (
						<img
							key={index}
							src={image.url}
							alt={image.filename}
							onClick={() => setMainImage(images[index])}
							className={`${image.url === mainImage.url ? "active" : null}`}
						/>
					);
				})}
			</Gallery>
		</Wrapper>
	);
};

export default MealImages;

const Image = styled.img`
  flex: 1;
	display: block;
	width: 100%;
  max-height: 20rem;
	object-fit: cover;
  border-radius: .2rem;
`;

const Gallery = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex: 1;
	gap: 0.5rem;

	img {
		flex: 1;
		height: 6rem;
		object-fit: cover;
		cursor: pointer;
		border-radius: 0.2rem;
	}

	.active {
		box-shadow: 0px 0px 0px 0.1rem var(--primary-3);
	}
`;

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;

	@media screen and (max-width: 576px) {
		${Gallery} {
			img {
				height: 3rem;
			}
		}
    ${Image} {
      max-height: 12rem;
    }
	}
`;
