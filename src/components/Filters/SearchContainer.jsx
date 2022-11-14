import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { useMealsContext } from "../../context/meals-context";
import FormRow from "../Form/FormRow";
import FormRowSelect from "../Form/FormRowSelect";

const SearchContainer = () => {
	const [localSearch, setLocalSearch] = useState("");

	const {
		meals_loading: loading,
		searchType,
		sort,
		sortOptions,
		handleChange,
		clearFilters,
		categoryOptions,
	} = useMealsContext();

	const handleSearch = (e) => {
		handleChange({ name: e.target.name, value: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		clearFilters();
	};

	const debounce = () => {
		let timeoutID;
		return (e) => {
			setLocalSearch(e.target.value);
			clearTimeout(timeoutID);
			timeoutID = setTimeout(() => {
				handleChange({
					name: e.target.name,
					value: e.target.value,
				});
			}, 1000);
		};
	};

	const optimizedDebounce = useMemo(() => debounce(), []);

	return (
		<Wrapper>
			<Form>
				<FormCenter>
					{/* search position */}
					<FormRow
						type="text"
						name="search"
						value={localSearch}
						handleChange={optimizedDebounce}
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
					<ClearButton disabled={loading} onClick={handleSubmit}>
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
	max-width: 1170px;
`;

const FormCenter = styled.div`
	display: flex;
	justify-content: space-around;
	gap: 1rem;
	align-items: center;
	margin-bottom: 1rem;
	padding: 0.5rem;
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
	margin-top: 0.6rem;
	text-align: center;
	cursor: pointer;

	&:hover {
		background: #c73b3b;
	}
`;

const Wrapper = styled.section`
	display: flex;
	justify-content: center;

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
