import React from "react";
import styled from "styled-components";
import { IoList, IoGrid } from "react-icons/io5";
import { useFilterContext } from "../../context/filter-context";

const Sort = () => {
	const { filtered_meals: meals, grid_view } = useFilterContext();

	return (
		<Wrapper>
			<BtnContainer>
				<Button className={`${grid_view ? "active" : null}`}>
					<IoGrid />
				</Button>
				<Button className={`${!grid_view ? "active" : null}`}>
					<IoList />
				</Button>
      </BtnContainer>
      <Info>{meals.length} meals found</Info>
      <hr />
      <Form>
        <Label htmlFor="sort">sort by</Label>
        <Select name="sort" id="sort">
          <option value="Name-A">Name (A-Z)</option>
          <option value="Name-Z">Name (Z-A)</option>
          <option value="price-lowest">Price (Lowest)</option>
          <option value="price-highest">Price (Highest)</option>
        </Select>
      </Form>
		</Wrapper>
	);
};

export default Sort;

const BtnContainer = styled.div`
	display: flex;
	flex: 1;
	gap: 0.5rem;

	.active {
		background: var(--primary-1);
		color: var(--primary-3);
	}
`;

const Button = styled.button`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 3rem;
	width: 3rem;
	border-radius: 0.4rem;
	background: transparent;
	cursor: pointer;
	color: var(--primary-3);
	border: 0.2rem solid var(--primary-3);

	svg {
		font-size: 2rem;
	}
`;

const Info = styled.p`
	flex: 1;
	text-transform: capitalize;
	letter-spacing: var(--spacing);
`;

const Form = styled.form`
  flex: 2;
`;

const Label = styled.label`
	text-transform: capitalize;
	display: inline-block;
	margin-right: 0.5rem;
  letter-spacing: var(--spacing);
`;

const Select = styled.select`
	border: 0.2rem solid var(--primary-3);
	border-radius: 0.2rem;
	outline: var(--primary-1);
`;

const Wrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 3rem;
	margin-bottom: 2rem;

	hr {
		flex: 2;
		border: none;
		background: var(--primary-3);
		padding: 0.1rem;
	}

	@media (max-width: 576px) {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;

		${BtnContainer} {
			width: 7rem;
		}
		${Label} {
			display: inline-block;
			margin-right: 1rem;
			text-transform: capitalize;
		}
	}


`;

