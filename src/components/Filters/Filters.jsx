import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../context/filter-context";
import { getUniqueValues } from "../../utils/helpers";

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
				</Form>
			</Content>
		</Wrapper>
	);
};

export default Filters;

const Wrapper = styled.section``;

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
  margin-bottom: 1.2rem;
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
	border-bottom: .2rem solid transparent;
	text-transform: capitalize;
	letter-spacing: var(--spacing);
	color: var(--greu-1);
	font-weight: bold;
	cursor: pointer;
`;
