import React from "react";
import styled from "styled-components";
import { IoList, IoGrid } from "react-icons/io5";
import { useFilterContext } from "../../context/filter-context";

const Sort = () => {
	const { filtered_meals: meals, grid_view, setListView, setGridView, updateSort, sort } = useFilterContext();

	return (
		<Wrapper>
			<BtnContainer>
				<Button
					className={`${grid_view ? "active" : null}`}
					onClick={setGridView}
				>
					<IoGrid />
				</Button>
				<Button
					className={`${!grid_view ? "active" : null}`}
					onClick={setListView}
				>
					<IoList />
				</Button>
			</BtnContainer>
			<Info>{meals.length} meals found</Info>
			<hr />
			<Form>
				<Label htmlFor="sort">sort by</Label>
				<Select name="sort" id="sort" value={sort} onChange={updateSort}>
					<option value="name-a">Name (A-Z)</option>
					<option value="name-z">Name (Z-A)</option>
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
  transition: var(--transition);

	svg {
		font-size: 2rem;
	}

  &:hover {
    background: var(--primary-1)
  }
`;

const Info = styled.p`
	text-transform: capitalize;
	letter-spacing: var(--spacing);
  margin-right: 2rem;
`;

const Form = styled.form`
  flex: 2;
`;

const Label = styled.label`
	text-transform: capitalize;
	display: inline-block;
	margin-right: 1rem;
  letter-spacing: var(--spacing);
  font-weight: bold;
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
		flex: 4;
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

