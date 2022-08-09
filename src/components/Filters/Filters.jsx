import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../context/filter-context";
import { formatPrice, getUniqueValues } from "../../utils/helpers";

const Filters = () => {
	const {
		filters: { text, category, price, min_price, max_price, delivery },
		clearFilters,
		updateFilters,
		all_meals,
	} = useFilterContext();

	const categories = getUniqueValues(all_meals, "category");

	return (
		<Wrapper>
			<Content>
				<Form onSubmit={(e) => e.preventDefault()}>
					{/* search input */}
					<FormControl>
						<Input
							type="text"
							name="text"
							placeholder="search..."
							value={text}
							onChange={updateFilters}
						/>
					</FormControl>
					{/* categories */}
					<FormControl>
						<Title>category</Title>
						<Container>
							{categories.map((categoryBtn, index) => {
								return (
									<Button
										key={index}
										type="button"
										name="category"
										onClick={updateFilters}
										className={`${
											category ===
											categoryBtn.toLowerCase()
												? "active"
												: null
										}`}
									>
										{categoryBtn}
									</Button>
								);
							})}
						</Container>
					</FormControl>
					{/* price */}
					<FormControl>
						<Title>price</Title>
						<Price>{formatPrice(price)}</Price>
						<Range
							type="range"
							name="price"
							onChange={updateFilters}
							min={min_price}
							max={max_price}
							value={price}
						/>
					</FormControl>
					{/* delivery */}
					<FormControlDelivery>
						<Label htmlFor="delivery">free delivery</Label>
						<Checkbox
							type="checkbox"
							name="delivery"
							id="delivery"
							onChange={updateFilters}
							checked={delivery}
						/>
					</FormControlDelivery>
				</Form>
				<ClearButton onClick={clearFilters}>clear filters</ClearButton>
			</Content>
		</Wrapper>
	);
};

export default Filters;

const Content = styled.div``;

const Form = styled.form``;

const FormControl = styled.div`
	margin-bottom: 1.2rem;
`;

const Input = styled.input`
	padding: 0.5rem;
	background: var(--primary-2);
	border: 0.2rem solid var(--primary-3);
	border-radius: 0.3rem;
	letter-spacing: var(--spacing);
	outline: var(--primary-1);

	&::placeholder {
		text-transform: capitalize;
	}
`;

const Container = styled.div`
	.active {
		border-color: var(--primary-3);
	}
`;

const Title = styled.h5`
	margin-bottom: 0.5rem;
	font-size: 1.4rem;
	text-transform: capitalize;
	letter-spacing: var(--spacing);
`;

const Button = styled.button`
	display: block;
	padding: 0.2rem 0;
	margin: 0.2rem 0;
	background: transparent;
	border: none;
	border-bottom: 0.2rem solid transparent;
	text-transform: capitalize;
	letter-spacing: var(--spacing);
	color: var(--grey-1);
	font-weight: bold;
	cursor: pointer;
`;

const Price = styled.p`
	margin-bottom: 0.2rem;
`;

const Range = styled.input`
	cursor: pointer;

	&::-webkit-slider-runnable-track {
		width: 100%;
		background: var(--primary-2);
	}
`;

const FormControlDelivery = styled.div`
	display: flex;
	align-items: center;
	text-transform: capitalize;
	font-size: 1rem;
`;

const Label = styled.label`
	font-weight: bold;
	letter-spacing: var(--spacing);
`;

const Checkbox = styled.input`
	margin-left: 2rem;
`;

const ClearButton = styled.button`
  padding: .3rem .6rem;
  margin-top: 1rem;
  background: var(--primary-4);
  border-radius: .3rem;
  border: none;
  text-transform: capitalize;
  font-weight: bold;
  color: var(--primary-2);
  cursor: pointer;
  letter-spacing: var(--spacing);
`;

const Wrapper = styled.section`
	@media (min-width: 768px) {
		${Content} {
			position: sticky;
			top: 1rem;
		}
	}
`;
