import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../context/filter-context";

const Filters = () => {
	const {
		filters: { text, category, price, min_price, max_price, delivery },
		clearFilters,
		updateFilters,
		all_meals,
	} = useFilterContext();

	return (
		<Wrapper>
			<Content>
        <Form onSubmit={e => e.preventDefault()}>
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
				</Form>
			</Content>
		</Wrapper>
	);
};

export default Filters;

const Wrapper = styled.section``;

const Content = styled.div``;

const Form = styled.form`
`;

const FormControl = styled.div`
`;

const Input = styled.input``;
