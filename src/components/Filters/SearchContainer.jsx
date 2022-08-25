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
			<form className="form">
				<h4>search form</h4>
				<div className="form-center">
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
					<button
						className="btn btn-block btn-danger"
						disabled={loading}
						onClick={handleSubmit}
					>
						clear filters
					</button>
				</div>
			</form>
		</Wrapper>
	);
};

export default SearchContainer;

const Wrapper = styled.section`
	.form {
		width: 100%;
		max-width: 100%;
	}
	.form-input,
	.form-select,
	.btn-block {
		height: 35px;
	}
	.form-row {
		margin-bottom: 0;
	}
	.form-center {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 2rem;
		row-gap: 0.5rem;
	}
	h5 {
		font-weight: 700;
	}
	.btn-block {
		align-self: end;
		margin-top: 1rem;
	}
	@media (min-width: 768px) {
		.form-center {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (min-width: 992px) {
		.form-center {
			grid-template-columns: 1fr 1fr 1fr;
		}
		.btn-block {
			margin-top: 0;
		}
	}
`;
