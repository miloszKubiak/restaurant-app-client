import React from "react";
import styled from "styled-components";
import { useMealsContext } from "../../context/meals-context";
import FormRow from "../Form/FormRow";
import FormRowSelect from "../Form/FormRowSelect";

const SearchContainer = () => {
	const {
		meals_loading: loading,
		search,
		searchType,
		sort,
		sortOptions,
		handleChange,
		clearFilters,
		categoryOptions,
	} = useMealsContext();

	const handleSearch = (e) => {
		if (loading) return;
		handleChange({ name: e.target.name, value: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    clearFilters()
  }

	return (
		<Wrapper>
			<Form>
				<FormCenter>
					{/* search position */}
					<FormRow
						type="text"
						name="search"
						value={search}
						handleChange={handleSearch}
					/>
					{/* search by type */}
					<FormRowSelect
						labelText="category"
						name="searchType"
						value={searchType}
						handleChange={handleSearch}
						list={["all", ...categoryOptions]}
					/>
					{/* sort */}
					<FormRowSelect
						name="sort"
						value={sort}
						handleChange={handleSearch}
						list={sortOptions}
					/>
					<ClearButton
						disabled={loading}
						onClick={handleSubmit}
					>
						clear filters
					</ClearButton>
				</FormCenter>
			</Form>
		</Wrapper>
	);
};

export default SearchContainer;

const Form = styled.form`
	width: 100%;
	max-width: 100%;
`;

const FormCenter = styled.div`
	/* display: grid;
	grid-template-columns: 1fr;
	column-gap: 2rem;
	row-gap: 0.5rem; */
	display: flex;
	justify-content: space-around;
	gap: 1rem;
	align-items: center;
	margin-bottom: 1rem;
	padding: .5rem;
`;

const ClearButton = styled.button`
	flex: 1;
	display: inline-block;
	padding: 0.4rem 0.8rem;
	background: var(--primary-4);
	color: var(--primary-2);
	text-decoration: none;
	text-transform: capitalize;
	border-radius: 0.3rem;
	letter-spacing: var(--spacing);
	transition: var(--transition);
	font-weight: bold;
	font-size: 1rem;
	font-family: inherit;
	border: none;
	margin-top: .6rem;
	text-align: center;
	cursor: pointer;

	&:hover {
		background: #c73b3b;
	}
`;

const Wrapper = styled.section`
	@media (max-width: 768px) {
		${FormCenter} {
			flex-direction: column;
		}
	}
	@media (min-width: 992px) {
		${FormCenter} {
			
		}
	}
`;
